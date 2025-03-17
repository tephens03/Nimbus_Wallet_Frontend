"use client"

import { createContext, useState, ReactNode } from "react";
import { Account, accounts as initialAccounts } from "@/model/account";
import { transactions as initialTransactions, Transaction } from "@/model/transaction";


interface AppContextType {
    transactions: Transaction[];
    accounts: Account[];
    // setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
    // setAccounts: React.Dispatch<React.SetStateAction<Account[]>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppProvider = ({ children }: { children: ReactNode }) => {

    const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
    
    const [accounts, setAccounts] = useState<Account[]>(initialAccounts);


    return (
        <AppContext.Provider value={{ transactions, accounts }}>
            {children}
        </AppContext.Provider>
    );
};
