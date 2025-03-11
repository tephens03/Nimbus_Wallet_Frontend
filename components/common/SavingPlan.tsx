import { Plus } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "../ui/card";

const SavingPlans = () => {
    return (
        <div className="border rounded-2xl shadow p-4 bg-white">
            {/* Header Section */}
            <CardHeader>
                <div className="flex items-center justify-between w-full">
                    {/* Title */}
                    <CardTitle className="text-gray-900">Saving Plans</CardTitle>

                    {/* Add Plan Button */}
                    <button className="text-green-700 hover:text-green-900 transition flex items-start gap-1">
                        <p>Add Plan</p>
                        <Plus size={16} />
                    </button>
                </div>
            </CardHeader>

            {/* Card Content */}
            <CardContent>
                {/* Add your saving plans content here */}
            </CardContent>
        </div>
    );
};

export default SavingPlans;
