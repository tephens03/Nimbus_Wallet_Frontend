import { Plus } from "lucide-react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import FilterButton from "./FilterButton";

const SavingPlans = () => {
    return (
        <div className="border rounded-2xl shadow p-4 bg-white">
            {/* Header Section */}
            <CardHeader>

                <div className="flex justify-between">
                    <div className="">
                        <CardTitle className="text-gray-900">Saving Plans</CardTitle>
                        {/* <CardDescription>Last updated 2 hours ago</CardDescription> */}
                    </div>

                    <div className="">
                        <button className="flex items-center gap-1 text-green-700 hover:text-green-900 transition">
                            <span>Add plan</span>
                            <Plus size={16} />
                        </button>

                    </div>

                </div>


            </CardHeader >
            
            <p className="text-gray-500 text-sm">Total Savings</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">$84,500</h1>


            {/* Card Content */}
            <CardContent>
                {/* Add your saving plans content here */}
            </CardContent>
        </div>
    );
};

export default SavingPlans;
