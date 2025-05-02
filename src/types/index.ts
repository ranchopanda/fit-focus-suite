
export interface Tenant {
  id: string;
  name: string;
  logoUrl?: string;
  themeColor?: string;
  plan: 'basic' | 'pro' | 'enterprise';
  featuresEnabled: string[];
  createdAt: string;
}

export interface Member {
  id: string;
  tenantId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  photoUrl?: string;
  membershipType: string;
  membershipStart: string;
  membershipEnd: string;
  status: 'active' | 'inactive' | 'pending' | 'frozen';
  notes?: string;
  createdAt: string;
}

export interface Payment {
  id: string;
  tenantId: string;
  memberId: string;
  amount: number;
  date: string;
  method: 'cash' | 'card' | 'bank_transfer' | 'other';
  status: 'pending' | 'completed' | 'failed';
  description?: string;
  createdAt: string;
}

export interface AttendanceRecord {
  id: string;
  tenantId: string;
  memberId: string;
  checkInTime: string;
  checkOutTime?: string;
  createdAt: string;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  requiredPlan: 'basic' | 'pro' | 'enterprise';
  isEnabled: boolean;
}

export interface MembershipType {
  id: string;
  tenantId: string;
  name: string;
  duration: number; // in days
  price: number;
  description?: string;
  features: string[];
  isActive: boolean;
}

export interface User {
  id: string;
  tenantId: string;
  name: string;
  email: string;
  role: 'owner' | 'admin' | 'staff' | 'trainer';
  permissions: string[];
}

export interface GymStats {
  totalMembers: number;
  activeMembers: number;
  newMembersThisMonth: number;
  totalRevenue: number;
  revenueThisMonth: number;
  attendanceToday: number;
  attendanceThisWeek: number;
}
