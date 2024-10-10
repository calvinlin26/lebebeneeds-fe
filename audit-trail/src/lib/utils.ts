import { ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (eventDate:string) => {
  // Hilangkan bagian mikrodetik dan zona waktu yang bermasalah
  const cleanDate = eventDate.split(".")[0]; // Ambil hanya tanggal dan waktu tanpa mikrodetik

  const date = new Date(cleanDate);
  
  // Pastikan Date valid
  if (isNaN(date.getTime())) {
    return ""; // Kembalikan string kosong jika tanggal invalid
  }

  // Format menjadi YYYY-MM-DD
  return date.toISOString().split('T')[0];
};