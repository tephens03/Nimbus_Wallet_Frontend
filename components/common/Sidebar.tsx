import { Home, Settings, User, Wallet, Receipt, LogOut, Cloud } from "lucide-react";
import Link from 'next/link'

export default function Sidebar() {
  const menuItems = [
    { icon: <Home size={24} />, name: "Home", href: "/", },
    { icon: <Wallet size={24} />, name: "Wallet", href: "/" },
    { icon: <Receipt size={24} />, name: "Receipt", href: "/transaction" },
    { icon: <User size={24} />, name: "User", href: "/" },
    { icon: <Settings size={24} />, name: "Settings", href: "/" },
  ];

  return (
    <aside className="w-12 h-screen bg-black text-white p-4 hidden md:flex flex-col items-center space-y-6">

      {/* Navigation Menu */}
      <nav className="flex flex-col items-center space-y-6 flex-1">
        <ul className="space-y-6">
          {menuItems.map((menuItem) => (
            <li
              key={menuItem.name}
              className="hover:bg-gray-700 p-2 rounded-lg cursor-pointer transition delay-10"
            >
              <Link href={menuItem.href}>
                {menuItem.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button (Pinned at the Bottom) */}
      <div className="mt-auto mb-4">
        <button className="hover:bg-red-400 p-2 rounded-lg cursor-pointer transition duration-50 delay-50">
          <LogOut size={24} />
        </button>
      </div>
    </aside>
  );
}
