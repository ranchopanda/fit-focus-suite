
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

// Mock Current Tenant
export const currentTenant: Tenant = {
  id: '1',
  name: 'FitFocus Gym',
  logoUrl: '/logo.svg',
  themeColor: '#4F46E5',
  plan: 'pro',
  featuresEnabled: [
    'member-management', 
    'payment-tracking', 
    'attendance', 
    'reporting'
  ],
  createdAt: '2023-01-01T00:00:00Z',
};

// Mock Members
export const mockMembers: Member[] = [
  {
    id: '1',
    tenantId: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '555-123-4567',
    photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    membershipType: 'premium',
    membershipStart: '2023-01-15T00:00:00Z',
    membershipEnd: '2023-07-15T00:00:00Z',
    status: 'active',
    notes: 'Prefers morning sessions',
    createdAt: '2023-01-15T00:00:00Z',
  },
  {
    id: '2',
    tenantId: '1',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '555-987-6543',
    photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    membershipType: 'standard',
    membershipStart: '2023-02-01T00:00:00Z',
    membershipEnd: '2023-05-01T00:00:00Z',
    status: 'active',
    notes: 'Interested in personal training',
    createdAt: '2023-02-01T00:00:00Z',
  },
  {
    id: '3',
    tenantId: '1',
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.j@example.com',
    phone: '555-567-8901',
    photoUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    membershipType: 'premium',
    membershipStart: '2023-01-10T00:00:00Z',
    membershipEnd: '2023-07-10T00:00:00Z',
    status: 'active',
    notes: 'Training for marathon',
    createdAt: '2023-01-10T00:00:00Z',
  },
  {
    id: '4',
    tenantId: '1',
    firstName: 'Emily',
    lastName: 'Wilson',
    email: 'emily.w@example.com',
    phone: '555-234-5678',
    photoUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    membershipType: 'standard',
    membershipStart: '2023-03-05T00:00:00Z',
    membershipEnd: '2023-06-05T00:00:00Z',
    status: 'active',
    createdAt: '2023-03-05T00:00:00Z',
  },
  {
    id: '5',
    tenantId: '1',
    firstName: 'Robert',
    lastName: 'Brown',
    email: 'robert.b@example.com',
    phone: '555-345-6789',
    photoUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
    membershipType: 'basic',
    membershipStart: '2023-02-20T00:00:00Z',
    membershipEnd: '2023-03-20T00:00:00Z',
    status: 'inactive',
    notes: 'Membership expired',
    createdAt: '2023-02-20T00:00:00Z',
  }
];

// Mock Payments
export const mockPayments: Payment[] = [
  {
    id: '1',
    tenantId: '1',
    memberId: '1',
    amount: 99.99,
    date: '2023-01-15T00:00:00Z',
    method: 'card',
    status: 'completed',
    description: 'Premium membership - 6 months',
    createdAt: '2023-01-15T00:00:00Z',
  },
  {
    id: '2',
    tenantId: '1',
    memberId: '2',
    amount: 59.99,
    date: '2023-02-01T00:00:00Z',
    method: 'card',
    status: 'completed',
    description: 'Standard membership - 3 months',
    createdAt: '2023-02-01T00:00:00Z',
  },
  {
    id: '3',
    tenantId: '1',
    memberId: '3',
    amount: 99.99,
    date: '2023-01-10T00:00:00Z',
    method: 'bank_transfer',
    status: 'completed',
    description: 'Premium membership - 6 months',
    createdAt: '2023-01-10T00:00:00Z',
  },
  {
    id: '4',
    tenantId: '1',
    memberId: '4',
    amount: 59.99,
    date: '2023-03-05T00:00:00Z',
    method: 'cash',
    status: 'completed',
    description: 'Standard membership - 3 months',
    createdAt: '2023-03-05T00:00:00Z',
  },
  {
    id: '5',
    tenantId: '1',
    memberId: '5',
    amount: 29.99,
    date: '2023-02-20T00:00:00Z',
    method: 'card',
    status: 'completed',
    description: 'Basic membership - 1 month',
    createdAt: '2023-02-20T00:00:00Z',
  },
];

// Mock Attendance Records
export const mockAttendance: AttendanceRecord[] = [
  {
    id: '1',
    tenantId: '1',
    memberId: '1',
    checkInTime: '2023-04-01T08:30:00Z',
    checkOutTime: '2023-04-01T10:00:00Z',
    createdAt: '2023-04-01T08:30:00Z',
  },
  {
    id: '2',
    tenantId: '1',
    memberId: '2',
    checkInTime: '2023-04-01T17:15:00Z',
    checkOutTime: '2023-04-01T18:45:00Z',
    createdAt: '2023-04-01T17:15:00Z',
  },
  {
    id: '3',
    tenantId: '1',
    memberId: '3',
    checkInTime: '2023-04-01T06:00:00Z',
    checkOutTime: '2023-04-01T07:30:00Z',
    createdAt: '2023-04-01T06:00:00Z',
  },
  {
    id: '4',
    tenantId: '1',
    memberId: '1',
    checkInTime: '2023-04-02T09:00:00Z',
    checkOutTime: '2023-04-02T10:45:00Z',
    createdAt: '2023-04-02T09:00:00Z',
  },
  {
    id: '5',
    tenantId: '1',
    memberId: '4',
    checkInTime: '2023-04-02T18:00:00Z',
    checkOutTime: '2023-04-02T19:30:00Z',
    createdAt: '2023-04-02T18:00:00Z',
  },
];

// Mock Features
export const mockFeatures: Feature[] = [
  {
    id: 'member-management',
    name: 'Member Management',
    description: 'Register and manage gym members',
    requiredPlan: 'basic',
    isEnabled: true,
  },
  {
    id: 'payment-tracking',
    name: 'Payment Tracking',
    description: 'Track membership payments and financial history',
    requiredPlan: 'basic',
    isEnabled: true,
  },
  {
    id: 'attendance',
    name: 'Attendance Tracking',
    description: 'Monitor member check-ins and attendance',
    requiredPlan: 'basic',
    isEnabled: true,
  },
  {
    id: 'reporting',
    name: 'Basic Reporting',
    description: 'Access to basic gym performance reports',
    requiredPlan: 'basic',
    isEnabled: true,
  },
  {
    id: 'advanced-reporting',
    name: 'Advanced Reporting',
    description: 'Detailed analytics and custom reports',
    requiredPlan: 'pro',
    isEnabled: true,
  },
  {
    id: 'staff-management',
    name: 'Staff Management',
    description: 'Manage gym staff and trainers',
    requiredPlan: 'pro',
    isEnabled: true,
  },
  {
    id: 'class-scheduling',
    name: 'Class Scheduling',
    description: 'Schedule and manage fitness classes',
    requiredPlan: 'pro',
    isEnabled: true,
  },
  {
    id: 'custom-branding',
    name: 'Custom Branding',
    description: 'Apply your gym branding to the platform',
    requiredPlan: 'enterprise',
    isEnabled: false,
  },
  {
    id: 'api-access',
    name: 'API Access',
    description: 'Access to the platform API for custom integrations',
    requiredPlan: 'enterprise',
    isEnabled: false,
  },
];

// Mock Membership Types
export const mockMembershipTypes: MembershipType[] = [
  {
    id: '1',
    tenantId: '1',
    name: 'Basic',
    duration: 30, // 1 month
    price: 29.99,
    description: 'Access to gym facilities during non-peak hours',
    features: ['gym-access', 'locker-room'],
    isActive: true,
  },
  {
    id: '2',
    tenantId: '1',
    name: 'Standard',
    duration: 90, // 3 months
    price: 59.99,
    description: 'Full access to gym facilities and standard classes',
    features: ['gym-access', 'locker-room', 'standard-classes'],
    isActive: true,
  },
  {
    id: '3',
    tenantId: '1',
    name: 'Premium',
    duration: 180, // 6 months
    price: 99.99,
    description: 'Full access to all gym facilities, classes, and one personal training session per month',
    features: ['gym-access', 'locker-room', 'all-classes', 'personal-training'],
    isActive: true,
  },
];

// Mock Users (Staff)
export const mockUsers: User[] = [
  {
    id: '1',
    tenantId: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
    permissions: ['all'],
  },
  {
    id: '2',
    tenantId: '1',
    name: 'Staff Member 1',
    email: 'staff1@example.com',
    role: 'staff',
    permissions: ['view-members', 'check-in-members', 'view-payments'],
  },
  {
    id: '3',
    tenantId: '1',
    name: 'Trainer 1',
    email: 'trainer1@example.com',
    role: 'trainer',
    permissions: ['view-members', 'check-in-members'],
  },
];

// Mock Stats
export const mockGymStats: GymStats = {
  totalMembers: 5,
  activeMembers: 4,
  newMembersThisMonth: 2,
  totalRevenue: 349.95,
  revenueThisMonth: 89.98,
  attendanceToday: 2,
  attendanceThisWeek: 5,
};
