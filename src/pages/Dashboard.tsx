
import React from 'react';
import { useData } from '@/context/DataContext';
import { StatCard } from '@/components/StatCard';
import { MemberListItem } from '@/components/MemberListItem';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, Calendar, TrendingUp, ArrowUpRight, BarChart } from 'lucide-react';
import { Bar, BarChart as RechartsBarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const Dashboard = () => {
  const { stats, members } = useData();

  // Last 7 days attendance mock data
  const attendanceData = [
    { day: 'Mon', count: 42 },
    { day: 'Tue', count: 38 },
    { day: 'Wed', count: 45 },
    { day: 'Thu', count: 39 },
    { day: 'Fri', count: 48 },
    { day: 'Sat', count: 30 },
    { day: 'Sun', count: 25 },
  ];

  const recentMembers = members
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  return (
    <div className="px-6 py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome to FitFocus Gym management</p>
        </div>
        <div>
          {/* Placeholder for user menu */}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Members"
          value={stats.totalMembers}
          description={`${stats.activeMembers} active`}
          icon={<Users className="h-5 w-5" />}
        />
        <StatCard
          title="New Members"
          value={stats.newMembersThisMonth}
          description="this month"
          icon={<ArrowUpRight className="h-5 w-5" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Revenue"
          value={`$${stats.revenueThisMonth.toFixed(2)}`}
          description="this month"
          icon={<DollarSign className="h-5 w-5" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Check-ins Today"
          value={stats.attendanceToday}
          description={`${stats.attendanceThisWeek} this week`}
          icon={<Calendar className="h-5 w-5" />}
        />
      </div>

      {/* Charts and Recent Members */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Attendance Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Weekly Attendance</CardTitle>
            <CardDescription>Member check-ins for the past 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={attendanceData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Members */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Members</CardTitle>
            <CardDescription>Latest members who joined</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentMembers.map((member) => (
              <MemberListItem key={member.id} member={member} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
