interface Account {
    identifier: string;
    balance: number;
    currency: string;
    expiryDate?: string
    bank?: string;
    provider?: string;
}

export const accounts: Account[] = [
    { currency: "CAD", provider: "Visa", identifier: "1234567887654321", balance: 120.00, expiryDate: "12/30", bank: "Nimbus Bank" },
    { currency: "CAD", provider: "Visa", identifier: "3987654321123456", balance: 1289.20, expiryDate: "12/30", bank: "Nimbus Bank" },
    { currency: "CAD", provider: "Visa", identifier: "5647382910234129", balance: 1200.20, expiryDate: "12/30", bank: "Nimbus Bank" },
]

