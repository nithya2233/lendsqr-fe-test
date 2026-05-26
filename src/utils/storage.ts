import type { User } from "../types/user.types";

const key = "selected_user";

export function saveUser(user: User) {
  localStorage.setItem(key, JSON.stringify(user));
}

export function getSavedUser(): User | null {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}