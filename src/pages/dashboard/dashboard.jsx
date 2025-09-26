import { DataTable } from "@/components/dataTable";
import { columns } from "@/utilss/dataUser/columsUser";
import { data } from "@/utilss/dataUser/dataUser";
import LayoutDashboard from "@/components/layout/layoutDashboard";

export default function Dashboard() {
  return (
    <LayoutDashboard>
      <DataTable columns={columns} data={data} />
    </LayoutDashboard>
  );
}
