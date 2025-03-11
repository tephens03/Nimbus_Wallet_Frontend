import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(currency: string, balance: number) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: currency }).format(balance)
}

export function formatNumericIdentifier(identifier: string) {
  return identifier.match(/.{1,4}/g)?.join(" ")
}

export function formatHiddenIdentifier(identifier: string) {
  return `•••• •••• •••• ${identifier.slice(-4)}`
}

export function isNumeric(value: string) {
  return !isNaN(Number(value))
}