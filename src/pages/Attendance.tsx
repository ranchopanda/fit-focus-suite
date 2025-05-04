
import React, { useState } from 'react';
import { useData } from '@/context/DataContext';
import { Calendar, Clock, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { format } from 'date-fns';

const Attendance = () => {
  const { attendance, members } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  // Helper function to get member name by ID
  const getMemberName = (memberId: string) => {
    const member = members.find(m => m.id === memberId);
    return member ? `${member.firstName} ${member.lastName}` : 'Unknown Member';
  };

  // Format date-time for display
  const formatDateTime = (dateTimeStr: string) => {
    try {
      return format(new Date(dateTimeStr), 'MMM d, yyyy h:mm a');
    } catch (e) {
      return dateTimeStr;
    }
  };

  // Filter attendance records
  const filteredAttendance = attendance.filter(record => {
    // Apply search query filter
    const memberName = getMemberName(record.memberId).toLowerCase();
    const matchesSearch = searchQuery === '' || memberName.includes(searchQuery.toLowerCase());
    
    // Apply status filter
    let matchesFilter = true;
    const today = new Date().toISOString().split('T')[0];
    const recordDate = record.checkInTime.split('T')[0];
    
    if (filter === 'today') {
      matchesFilter = recordDate === today;
    } else if (filter === 'week') {
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      const recordDateTime = new Date(record.checkInTime);
      matchesFilter = recordDateTime >= oneWeekAgo;
    }
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container mx-auto p-6 space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Attendance Tracking</h1>
          <p className="text-muted-foreground">
            Monitor member check-ins and attendance records
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button className="flex items-center gap-2">
            <Clock size={16} />
            <span>Check In Member</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-4">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Attendance Records
            </CardTitle>
            
            <div className="flex flex-col md:flex-row w-full md:w-auto gap-2">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search members..."
                  className="w-full pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex items-center">
                <Filter className="mr-2 h-4 w-4 text-muted-foreground" />
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-full md:w-32">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Member</TableHead>
                    <TableHead>Check In</TableHead>
                    <TableHead>Check Out</TableHead>
                    <TableHead>Duration</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredAttendance.length > 0 ? (
                    filteredAttendance.map((record) => {
                      // Calculate duration if check-out time exists
                      let duration = 'In Progress';
                      if (record.checkOutTime) {
                        const checkIn = new Date(record.checkInTime);
                        const checkOut = new Date(record.checkOutTime);
                        const durationMs = checkOut.getTime() - checkIn.getTime();
                        const minutes = Math.floor(durationMs / 60000);
                        duration = `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
                      }
                      
                      return (
                        <TableRow key={record.id}>
                          <TableCell>{getMemberName(record.memberId)}</TableCell>
                          <TableCell>{formatDateTime(record.checkInTime)}</TableCell>
                          <TableCell>
                            {record.checkOutTime ? formatDateTime(record.checkOutTime) : '—'}
                          </TableCell>
                          <TableCell>{duration}</TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-4">
                        No attendance records found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Attendance;
