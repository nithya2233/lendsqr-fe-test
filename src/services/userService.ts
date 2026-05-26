import type { User } from "../types/user.types";

const organizations = ["Lendsqr", "Irorun", "Lendstar", "Kredi", "FintechX"];
const statuses = ["Active", "Inactive", "Pending", "Blacklisted"] as const;

export function getUsers(): Promise<User[]> {
  const users: User[] = Array.from({ length: 500 }, (_, index) => {
    const id = String(index + 1);

    return {
      id,
      organization: organizations[index % organizations.length],
      username: `user${id}`,
      email: `user${id}@mail.com`,
      phone: `080${Math.floor(10000000 + Math.random() * 89999999)}`,
      dateJoined: new Date(2020 + (index % 5), index % 12, (index % 28) + 1).toISOString(),
      status: statuses[index % statuses.length],
      fullName: `User ${id} Johnson`,
      bvn: `22${Math.floor(100000000 + Math.random() * 899999999)}`,
      gender: index % 2 === 0 ? "Male" : "Female",
      maritalStatus: index % 3 === 0 ? "Married" : "Single",
      children: index % 4 === 0 ? "2" : "None",
      residence: "Lagos, Nigeria",
      tier: (index % 3) + 1,
      balance: `₦${(100000 + index * 2500).toLocaleString()}`,
      bank: "Providus Bank",
      accountNumber: `10${Math.floor(10000000 + Math.random() * 89999999)}`,
      educationLevel: "B.Sc",
      employmentStatus: "Employed",
      sector: "Fintech",
      duration: "2 years",
      officeEmail: `office.user${id}@company.com`,
      monthlyIncome: "₦200,000 - ₦400,000",
      loanRepayment: "₦40,000",
      socials: {
        twitter: `@user${id}`,
        facebook: `User ${id}`,
        instagram: `@user${id}`,
      },
      guarantor: {
        fullName: `Guarantor ${id}`,
        phone: "08123456789",
        email: `guarantor${id}@mail.com`,
        relationship: "Sibling",
      },
    };
  });

  return new Promise((resolve) => {
    setTimeout(() => resolve(users), 500);
  });
}