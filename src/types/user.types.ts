export type UserStatus =
  | "Active"
  | "Inactive"
  | "Pending"
  | "Blacklisted";

export interface User {
  id: string;

  organization: string;

  username: string;

  email: string;

  phone: string;

  dateJoined: string;

  status: UserStatus;

  fullName: string;

  bvn: string;

  gender: string;

  maritalStatus: string;

  children: string;

  residence: string;

  tier: number;

  balance: string;

  bank: string;

  accountNumber: string;

  educationLevel: string;

  employmentStatus: string;

  sector: string;

  duration: string;

  officeEmail: string;

  monthlyIncome: string;

  loanRepayment: string;

  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };

  guarantor: {
    fullName: string;
    phone: string;
    email: string;
    relationship: string;
  };
}