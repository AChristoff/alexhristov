import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(yearString: string, lang: string) {
  const [year, month] = yearString.split('-');
  const date = new Date(parseInt(year, 10), parseInt(month, 10) - 1);  // Months are 0-indexed in JavaScript Date object
  return new Intl.DateTimeFormat(lang, { year: 'numeric', month: 'long'}).format(date);
}