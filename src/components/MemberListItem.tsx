
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Member } from '@/types';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface MemberListItemProps {
  member: Member;
  onClick?: () => void;
}

export const MemberListItem = ({ member, onClick }: MemberListItemProps) => {
  const getStatusColor = (status: Member['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'inactive':
        return 'bg-red-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'frozen':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const membershipEndsIn = formatDistanceToNow(new Date(member.membershipEnd), { addSuffix: true });
  
  return (
    <div 
      className="p-4 border rounded-lg transition-all hover:bg-accent/10 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center">
        <Avatar className="h-12 w-12 mr-4">
          <AvatarImage src={member.photoUrl} alt={`${member.firstName} ${member.lastName}`} />
          <AvatarFallback>
            {member.firstName.charAt(0)}{member.lastName.charAt(0)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium truncate">
              {member.firstName} {member.lastName}
            </h3>
            <Badge variant={member.status === 'active' ? 'default' : 'outline'}>
              {member.membershipType}
            </Badge>
          </div>
          
          <div className="flex items-center mt-1 text-sm text-muted-foreground">
            <span className="truncate">{member.email}</span>
            <span className="mx-2">•</span>
            <span>{member.phone}</span>
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <div className={cn("h-2 w-2 rounded-full mr-1", getStatusColor(member.status))}></div>
              <span className="text-xs capitalize">{member.status}</span>
            </div>
            <span className="text-xs text-muted-foreground">
              {member.status === 'active' ? `Expires ${membershipEndsIn}` : ''}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
