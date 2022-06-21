import { useState, useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
} from "react-table";
import {
  FaAngleUp,
  FaAngleDown,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./data.json";
import { GlobalFilter } from "./GlobalFilter";
import { ColumnFilter } from "./ColumnFilter";
import { Checkbox } from "./Checkbox";

function Table() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    }
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const selectedRows = JSON.stringify(
    {
      selectedFlatRows: selectedFlatRows.map((row) => row.original),
    },
    null,
    2
  );

  console.log(selectedRows);

  // const [pageNumber, setPageNumber] = useState(pageIndex + 1);

  // console.log(pageIndex + 1);

  return (
    <div className="p-5 flex justify-center">
      <h1 className="text-2xl text-center">Table</h1>
      <div className="my-10">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table
          {...getTableProps()}
          className="table-auto border-collapse border border-slate-600 text-center text-xs lg:text-base"
        >
          <thead className="bg-green-600 text-white">
            {headerGroups.map((headerGroup, i) => (
              <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, i) => (
                  <th
                    key={i}
                    className="px-2 py-2 border-collapse border border-slate-300"
                  >
                    {column.render("Header")}
                    <span
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="inline-block px-2"
                    >
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FaAngleDown />
                        ) : (
                          <FaAngleUp />
                        )
                      ) : (
                        <p className="text-xs first:hidden">Sort</p>
                      )}
                    </span>
                    <div className="mt-2 text-black font-normal">
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  key={i}
                  {...row.getRowProps()}
                  className="even:bg-slate-200 hover:bg-red-100"
                >
                  {row.cells.map((cell, i) => {
                    return (
                      <td
                        key={i}
                        {...cell.getCellProps()}
                        className="px-10 py-2 border-collapse border border-slate-300"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="flex justify-center items-center mt-2 space-x-2">
          <span className="text-sm">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>

          <span>
            | Rows per page:{" "}
            <select
              className="outline-none w-12 border border-slate-300"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 20, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </span>

          <span>
            | Go to page:{" "}
            <input
              type="number"
              min="1"
              max={pageOptions.length}
              className="w-10 outline-none border border-slate-500"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
            />
          </span>

          <div className="flex gap-1">
            <button
              className="p-1 text-sm rounded-sm bg-slate-300 disabled:opacity-50"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <FaAngleDoubleLeft />
            </button>
            <button
              className="bg-slate-300 active:bg-slate-400 px-3 py-1 rounded-sm text-sm disabled:opacity-50"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Previous
            </button>
            <button
              className="bg-slate-300 active:bg-slate-400 px-3 py-1 rounded-sm text-sm disabled:opacity-50"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
            </button>
            <button
              className="p-1 text-sm rounded-sm  bg-slate-300 disabled:opacity-50"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <FaAngleDoubleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
