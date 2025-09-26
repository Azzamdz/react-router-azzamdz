import { useState } from "react";
import { X, Menu, User, Package } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`bg-black text-white p-4 transition-all duration-400 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        {isOpen && <h2>Dashboard</h2>}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <div className="flex flex-col gap-5">
        <Link
          to="/dashboard/user"
          className="flex items-center justify-between px-2 py-2 rounded hover:bg-gray-700"
        >
          {isOpen && <span>User</span>}
          <User />
        </Link>
        <Link
          to="/dashboard/Package"
          className="flex items-center justify-between px-2 py-2 rounded hover:bg-gray-700"
        >
          {isOpen && <span>Product</span>}
          <Package />
        </Link>
      </div>
    </aside>
  );
}
