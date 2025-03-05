import { Home, Settings, User, Wallet, Receipt, LogOut } from "lucide-react";
import Link from 'next/link';

export default function Sidebar() {
  const menuItems = [
    { icon: <Home size={20} />, name: "Home", href: "/" },
    { icon: <Wallet size={20} />, name: "Wallet", href: "/" },
    { icon: <Receipt size={20} />, name: "Receipt", href: "/transaction" },
    { icon: <User size={20} />, name: "User", href: "/" },
    { icon: <Settings size={20} />, name: "Settings", href: "/" },
    { icon: <LogOut size={20} />, name: "Log Out", href: "/" },
  ];

  return (
    <aside className="w-40 bg-green-100 h-screen text-white p-3 hidden md:flex flex-col items-center space-y-6">

      {/* Navigation Menu */}
      <nav className="flex flex-col space-y-6 flex-1 w-full">
        <ul className="space-y-2 w-full">
          {menuItems.slice(0, -1).map((menuItem) => ( // Exclude logout for separate styling
            <li key={menuItem.name} className="rounded-3xl">
              <Link 
                href={menuItem.href} 
                className="flex items-center gap-3 text-gray-700 hover:bg-lime-200  hover:text-green-900 p-2 rounded-lg transition w-full"
              >
                {menuItem.icon}
                <span>{menuItem.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button (Pinned at the Bottom) */}
      <div className="mt-auto mb-4 w-full">
        <button className="flex items-center gap-3 text-gray-700 hover:bg-red-400 p-2 rounded-lg transition w-full">
          {menuItems[5].icon}
          <span>{menuItems[5].name}</span>
        </button>
      </div>
    </aside>
  );
}
