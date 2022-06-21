import React from "react";

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="p-1 w-2/3 text-sm outline-none border border-slate-600 bg-green-100"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};
