
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { 
  Tenant, 
  Member, 
  Payment, 
  AttendanceRecord, 
  Feature,
  MembershipType,
  User,
  GymStats
} from '../types';
import { 
  currentTenant,
  mockMembers,
  mockPayments,
  mockAttendance,
  mockFeatures,
  mockMembershipTypes,
  mockUsers,
  mockGymStats
} from '../services/mockData';

interface DataContextType {
  tenant: Tenant;
  members: Member[];
  payments: Payment[];
  attendance: AttendanceRecord[];
  features: Feature[];
  membershipTypes: MembershipType[];
  users: User[];
  stats: GymStats;
  setMembers: React.Dispatch<React.SetStateAction<Member[]>>;
  setPayments: React.Dispatch<React.SetStateAction<Payment[]>>;
  setAttendance: React.Dispatch<React.SetStateAction<AttendanceRecord[]>>;
  addMember: (member: Omit<Member, 'id' | 'createdAt'>) => void;
  addPayment: (payment: Omit<Payment, 'id' | 'createdAt'>) => void;
  addAttendance: (attendance: Omit<AttendanceRecord, 'id' | 'createdAt'>) => void;
  updateMember: (memberId: string, updates: Partial<Member>) => void;
  updatePayment: (paymentId: string, updates: Partial<Payment>) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tenant] = useState<Tenant>(currentTenant);
  const [members, setMembers] = useState<Member[]>(mockMembers);
  const [payments, setPayments] = useState<Payment[]>(mockPayments);
  const [attendance, setAttendance] = useState<AttendanceRecord[]>(mockAttendance);
  const [features] = useState<Feature[]>(mockFeatures);
  const [membershipTypes] = useState<MembershipType[]>(mockMembershipTypes);
  const [users] = useState<User[]>(mockUsers);
  const [stats] = useState<GymStats>(mockGymStats);

  const addMember = (member: Omit<Member, 'id' | 'createdAt'>) => {
    const newMember: Member = {
      ...member,
      id: `member-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    setMembers(prev => [...prev, newMember]);
  };

  const addPayment = (payment: Omit<Payment, 'id' | 'createdAt'>) => {
    const newPayment: Payment = {
      ...payment,
      id: `payment-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    setPayments(prev => [...prev, newPayment]);
  };

  const addAttendance = (attendanceRecord: Omit<AttendanceRecord, 'id' | 'createdAt'>) => {
    const newAttendance: AttendanceRecord = {
      ...attendanceRecord,
      id: `attendance-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    setAttendance(prev => [...prev, newAttendance]);
  };

  const updateMember = (memberId: string, updates: Partial<Member>) => {
    setMembers(prev => 
      prev.map(member => 
        member.id === memberId ? { ...member, ...updates } : member
      )
    );
  };

  const updatePayment = (paymentId: string, updates: Partial<Payment>) => {
    setPayments(prev => 
      prev.map(payment => 
        payment.id === paymentId ? { ...payment, ...updates } : payment
      )
    );
  };

  return (
    <DataContext.Provider value={{
      tenant,
      members,
      payments,
      attendance,
      features,
      membershipTypes,
      users,
      stats,
      setMembers,
      setPayments,
      setAttendance,
      addMember,
      addPayment,
      addAttendance,
      updateMember,
      updatePayment
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
