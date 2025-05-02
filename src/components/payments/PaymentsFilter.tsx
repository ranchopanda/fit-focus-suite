
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PaymentsFilterProps {
  searchTerm: string;
  statusFilter: string;
  onFilter: (searchTerm: string, status: string) => void;
}

export const PaymentsFilter: React.FC<PaymentsFilterProps> = ({
  searchTerm,
  statusFilter,
  onFilter,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-1/2">
        <Input
          placeholder="Search payments..."
          value={searchTerm}
          onChange={(e) => onFilter(e.target.value, statusFilter)}
          className="w-full"
        />
      </div>
      <div className="md:w-1/4">
        <Select
          value={statusFilter}
          onValueChange={(value) => onFilter(searchTerm, value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
