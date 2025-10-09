import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DataTable({ columns, data }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-hidden border border-slate-200 dark:border-slate-700 rounded-2xl shadow-md bg-white dark:bg-slate-900 transition-all duration-300">
      <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
        <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-100">
          Users Data
        </h2>
        <span className="text-sm text-slate-500 dark:text-slate-400">
          Total: {data.length} users
        </span>
      </div>

      <Table>
        <TableHeader className="bg-slate-100 dark:bg-slate-800">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="text-slate-700 dark:text-slate-200 text-sm font-medium"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-200"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="text-slate-700 dark:text-slate-200 text-sm"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center text-slate-500 dark:text-slate-400"
              >
                No results found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <TableCaption className="flex flex-col items-center gap-1 text-xs text-slate-500 dark:text-slate-400 p-4">
        <span>
          <span className="font-semibold">Updated:</span>{" "}
          {new Date().toLocaleDateString()}
        </span>
        <span>
          <span className="font-semibold">Powered by</span>{" "}
          <span className="text-blue-500">React Azzam</span>
        </span>
      </TableCaption>
    </div>
  );
}
