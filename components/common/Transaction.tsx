import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { CardDescription, CardHeader, CardTitle } from "../ui/card";

export default function Transaction({ headerOn }: { headerOn: boolean }) {
    return (
        <div className="border rounded-2xl shadow p-4">
            <CardHeader>
                <CardTitle>Line Chart - Label</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>

            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                {/* Conditionally render the TableHeader */}
                {
                    headerOn && (
                        <TableHeader>
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

                    <TableRow>
                        <TableCell className="font-medium">Toy</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Toy</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Toy</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table >
        </div>
    );
}
