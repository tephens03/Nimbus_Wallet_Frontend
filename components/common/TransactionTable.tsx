import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import FilterButton from "./FilterButton";
import { transactions, TransactionStatus } from "@/model/transaction";
import { formatCurrency, isNumeric } from "@/lib/utils";

interface MoneyDisplayProps {
    headerVisible: boolean
}


const TransactionTable: React.FC<MoneyDisplayProps> = ({ headerVisible }) => {
    return (
        <div className="border rounded-2xl shadow p-4">

            <CardHeader>
                <div className="flex justify-between">
                    <div className="">
                        <CardTitle className="text-gray-900">Transaction</CardTitle>
                        <CardDescription>Last updated 2 hours ago</CardDescription>
                    </div>
                    <div className="">
                        <FilterButton />
                    </div>
                </div>
            </CardHeader >

            <CardContent>

                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    {/* Conditionally render the TableHeader */}
                    {
                        headerVisible && (
                            <TableHeader className="bg-green-100">
                                <TableRow>
                                    <TableHead className="w-[100px]">Name</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Method</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                        )
                    }

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
            </CardContent>

        </div >
    );
}

export default TransactionTable
