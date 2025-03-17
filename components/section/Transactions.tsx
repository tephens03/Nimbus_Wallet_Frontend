"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { TransactionStatus } from "@/model/transaction";
import { formatCurrency, isNumeric } from "@/lib/utils";
import SectionHeader from "../layout/SectionHeader";
import SectionContainer from "../container/SectionContainer";
import SectionContent from "../layout/SectionContent";
import { useContext } from "react";
import { AppContext } from "@/store/app-context";



const TransactionTable = () => {
    const context = useContext(AppContext);

    const transactions = context?.transactions ?? []

    return (
        <SectionContainer>

            <SectionHeader title="Transactions" />

            <SectionContent>

                <Table>

                    <TableCaption>A list of your recent invoices.</TableCaption>

                    <TableHeader className="bg-green-100">
                        <TableRow>
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>



                    <TableBody>
                        {transactions.slice(4).map((transaction, index) => {
                            let transactionAccountIdentifier = transaction.account.identifier
                            let isIdentifierNumeric = isNumeric(transactionAccountIdentifier)
                            return (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{transaction.name}</TableCell>
                                    <TableCell>{TransactionStatus[transaction.status]}</TableCell>
                                    <TableCell>{isIdentifierNumeric ? "•" + transactionAccountIdentifier.slice(-4) : transactionAccountIdentifier}</TableCell>
                                    <TableCell className="text-right">{formatCurrency(transaction.account.currency, transaction.amount)}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>


                </Table >

            </SectionContent>

        </SectionContainer>
    );
}

export default TransactionTable
