import { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { formatCurrency, pct, gainColor } from "../../utils/format";

const columnHelper = createColumnHelper();

export default function HoldingsTable({ data }) {
  const [sorting, setSorting] = useState([{ id: "value", desc: true }]);
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = useMemo(
    () => [
      columnHelper.accessor("symbol", {
        header: "Symbol",
        cell: (info) => <span className="font-medium">{info.getValue()}</span>,
      }),
      columnHelper.accessor("name", { header: "Company" }),
      columnHelper.accessor("sector", { header: "Sector" }),
      columnHelper.accessor("marketCap", { header: "Cap" }),
      columnHelper.accessor("quantity", { header: "Qty" }),
      columnHelper.accessor("avgPrice", {
        header: "Avg Price",
        cell: (info) => formatCurrency(info.getValue()),
      }),
      columnHelper.accessor("currentPrice", {
        header: "Current",
        cell: (info) => formatCurrency(info.getValue()),
      }),
      columnHelper.accessor("value", {
        header: "Value",
        cell: (info) => formatCurrency(info.getValue()),
      }),
      columnHelper.accessor("gainLoss", {
        header: "P/L",
        cell: (info) => (
          <span className={gainColor(info.getValue())}>
            {formatCurrency(info.getValue())}
          </span>
        ),
      }),
      columnHelper.accessor("gainLossPercent", {
        header: "P/L %",
        cell: (info) => (
          <span className={gainColor(info.getValue())}>
            {pct(info.getValue())}
          </span>
        ),
      }),
    ],
    []
  );

  const table = useReactTable({
    data: data || [],
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      const v = String(row.getValue(columnId)).toLowerCase();
      return v.includes(String(filterValue).toLowerCase());
    },
  });

  return (
    <div className="overflow-auto">
      <div className="mb-3">
        <input
          className="w-full md:w-80 rounded border px-3 py-2 text-sm"
          placeholder="Search by symbol, company, sector..."
          value={globalFilter ?? ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </div>
      <table className="min-w-full text-sm">
        <thead className="bg-neutral-50">
          {table.getHeaderGroups().map((hg) => (
            <tr key={hg.id}>
              {hg.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="px-3 py-2 text-left font-medium text-neutral-700 cursor-pointer select-none"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {{ asc: " ↑", desc: " ↓" }[header.column.getIsSorted()] ?? null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-t hover:bg-neutral-50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-3 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data?.length === 0 && (
        <div className="text-center text-neutral-500 py-6">No holdings available</div>
      )}
    </div>
  );
}