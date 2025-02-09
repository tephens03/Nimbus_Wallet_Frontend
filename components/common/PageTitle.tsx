import { Calendar } from "lucide-react";

export default function PageTitle({ userFullName }: { userFullName: string }) {

  return (
    <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
      {/* Dashboard Title & Welcome Message */}
      <div className="min-w-[200px]">
        <h1 className="text-xl text-white md:text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-400 text-sm md:text-base">Welcome back, {userFullName}</p>
      </div>

      {/* Date Picker */}
      <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700 transition text-sm md:text-base">
        <Calendar size={18} className="text-gray-400 mr-2" />
        <span className="text-gray-300">05/05/2024 - 05/06/2024</span>
      </div>
    </div>
  );
}
