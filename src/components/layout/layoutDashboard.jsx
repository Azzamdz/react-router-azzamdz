import Sidebar from "@/components/Sidebar";

export default function LayoutDashboard({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 overflow-auto">{children}</div>
    </div>
  );
}
