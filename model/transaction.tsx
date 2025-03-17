import { Account, accounts } from "./account";

enum TransactionCategory {
    ESSENTIALS = 1,
    TRANSPORTATION = 2,
    FOOD_DINING = 3,
    SHOPPING_PERSONAL = 4,
    ENTERTAINMENT = 5,
    HEALTH_FITNESS = 6,
    FINANCE_INVESTMENTS = 7,
    INCOME_TRANSFERS = 8
}

export enum TransactionStatus {
    COMPLETED,
    REFUNDED,
    CANCELLED,
    PENDING
}

export interface Transaction {
    name: string;
    category: TransactionCategory;
    status: TransactionStatus;
    date: string;
    account: Account;
    amount: number,
}

export const transactions: Transaction[] = [
    {
        name: "Grocery Shopping",
        category: TransactionCategory.ESSENTIALS,
        status: TransactionStatus.COMPLETED,
        date: "2024-12-01",
        account: accounts[1],
        amount: 100,
    },
    {
        name: "Grocery Shopping",
        category: TransactionCategory.ESSENTIALS,
        status: TransactionStatus.COMPLETED,
        date: "2024-11-01",
        account: accounts[1],
        amount: 100,
    },
    {
        name: "RG35XX",
        category: TransactionCategory.ESSENTIALS,
        status: TransactionStatus.COMPLETED,
        date: "2024-10-01",
        account: accounts[3],
        amount: 100,
    },
    {
        name: "Gas Station Fuel",
        category: TransactionCategory.TRANSPORTATION,
        status: TransactionStatus.COMPLETED,
        date: "2024-09-01",
        account: accounts[0],
        amount: 100,
    },
    {
        name: "Starbucks Coffee",
        category: TransactionCategory.FOOD_DINING,
        status: TransactionStatus.COMPLETED,
        date: "2024-08-01",
        account: accounts[0],
        amount: 100,
    },
    {
        name: "New Sneakers",
        category: TransactionCategory.SHOPPING_PERSONAL,
        status: TransactionStatus.COMPLETED,
        date: "2024-07-01",
        account: accounts[2],
        amount: 100,
    },
    {
        name: "Netflix Subscription",
        category: TransactionCategory.ENTERTAINMENT,
        status: TransactionStatus.COMPLETED,
        date: "2024-06-01",
        account: accounts[0],
        amount: 100,
    },
    {
        name: "Gym Membership",
        category: TransactionCategory.HEALTH_FITNESS,
        status: TransactionStatus.COMPLETED,
        date: "2024-05-01",
        account: accounts[1],
        amount: 100,
    },
    {
        name: "Stock Investment",
        category: TransactionCategory.FINANCE_INVESTMENTS,
        status: TransactionStatus.COMPLETED,
        date: "2024-04-01",
        account: accounts[2],
        amount: 100,
    },
    {
        name: "Freelance Payment",
        category: TransactionCategory.INCOME_TRANSFERS,
        status: TransactionStatus.COMPLETED,
        date: "2024-03-01",
        account: accounts[0],
        amount: 100,
    }
];
