export interface Donor {
  id: string;
  name: string;
  email: string;
  phone: string;
  bloodGroup: string;
  gender: string;
  age: number;
  weight: number;
  location: string;
  address: string;
  lastDonation?: string;
  isAvailable: boolean;
  donationCount: number;
}

export interface BloodRequest {
  id: string;
  patientName: string;
  bloodGroup: string;
  urgency: "low" | "medium" | "high" | "critical";
  hospitalName: string;
  contactInfo: string;
  location: string;
  requestDate: string;
  requiredBy: string;
  status: "active" | "fulfilled" | "expired";
  description?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  bloodGroup: string;
  gender: string;
  dateOfBirth: string;
  weight: number;
  address: string;
  isDonor: boolean;
  lastDonation?: string;
  donationCount: number;
}

// Mock donors data
export const mockDonors: Donor[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1-555-0123",
    bloodGroup: "O+",
    gender: "Female",
    age: 28,
    weight: 65,
    location: "Downtown",
    address: "123 Main St, Downtown",
    lastDonation: "2024-01-15",
    isAvailable: true,
    donationCount: 12,
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael.chen@email.com",
    phone: "+1-555-0124",
    bloodGroup: "A+",
    gender: "Male",
    age: 34,
    weight: 78,
    location: "Westside",
    address: "456 Oak Ave, Westside",
    lastDonation: "2024-02-20",
    isAvailable: true,
    donationCount: 8,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.rodriguez@email.com",
    phone: "+1-555-0125",
    bloodGroup: "B-",
    gender: "Female",
    age: 31,
    weight: 62,
    location: "East District",
    address: "789 Pine Rd, East District",
    lastDonation: "2024-01-08",
    isAvailable: true,
    donationCount: 15,
  },
  {
    id: "4",
    name: "David Thompson",
    email: "david.thompson@email.com",
    phone: "+1-555-0126",
    bloodGroup: "AB+",
    gender: "Male",
    age: 42,
    weight: 82,
    location: "North Hills",
    address: "321 Elm St, North Hills",
    lastDonation: "2024-03-01",
    isAvailable: false,
    donationCount: 6,
  },
  {
    id: "5",
    name: "Maria Garcia",
    email: "maria.garcia@email.com",
    phone: "+1-555-0127",
    bloodGroup: "O-",
    gender: "Female",
    age: 26,
    weight: 58,
    location: "South Bay",
    address: "654 Cedar Ln, South Bay",
    lastDonation: "2024-02-14",
    isAvailable: true,
    donationCount: 10,
  },
  {
    id: "6",
    name: "James Wilson",
    email: "james.wilson@email.com",
    phone: "+1-555-0128",
    bloodGroup: "A-",
    gender: "Male",
    age: 38,
    weight: 75,
    location: "Central Park",
    address: "987 Maple Dr, Central Park",
    lastDonation: "2024-01-30",
    isAvailable: true,
    donationCount: 14,
  },
];

// Mock blood requests data
export const mockBloodRequests: BloodRequest[] = [
  {
    id: "1",
    patientName: "John Smith",
    bloodGroup: "O+",
    urgency: "critical",
    hospitalName: "City General Hospital",
    contactInfo: "+1-555-0200",
    location: "Downtown",
    requestDate: "2024-03-15",
    requiredBy: "2024-03-16",
    status: "active",
    description: "Urgent surgery requirement",
  },
  {
    id: "2",
    patientName: "Lisa Anderson",
    bloodGroup: "A-",
    urgency: "high",
    hospitalName: "St. Mary's Medical Center",
    contactInfo: "+1-555-0201",
    location: "Westside",
    requestDate: "2024-03-14",
    requiredBy: "2024-03-17",
    status: "active",
    description: "Post-accident treatment",
  },
  {
    id: "3",
    patientName: "Robert Brown",
    bloodGroup: "B+",
    urgency: "medium",
    hospitalName: "Regional Medical Center",
    contactInfo: "+1-555-0202",
    location: "North Hills",
    requestDate: "2024-03-13",
    requiredBy: "2024-03-20",
    status: "active",
    description: "Chemotherapy support",
  },
  {
    id: "4",
    patientName: "Anna Davis",
    bloodGroup: "AB-",
    urgency: "high",
    hospitalName: "University Hospital",
    contactInfo: "+1-555-0203",
    location: "East District",
    requestDate: "2024-03-12",
    requiredBy: "2024-03-18",
    status: "fulfilled",
    description: "Pregnancy complications",
  },
];

// Blood group compatibility data
export const bloodGroupCompatibility = {
  "O-": ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
  "O+": ["O+", "A+", "B+", "AB+"],
  "A-": ["A-", "A+", "AB-", "AB+"],
  "A+": ["A+", "AB+"],
  "B-": ["B-", "B+", "AB-", "AB+"],
  "B+": ["B+", "AB+"],
  "AB-": ["AB-", "AB+"],
  "AB+": ["AB+"],
};

export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const urgencyLevels = [
  { value: "low", label: "Low", color: "text-success" },
  { value: "medium", label: "Medium", color: "text-warning" },
  { value: "high", label: "High", color: "text-destructive" },
  {
    value: "critical",
    label: "Critical",
    color: "text-destructive font-semibold",
  },
];
