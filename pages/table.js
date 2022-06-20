import Link from "next/link";
import React from "react";
import BasicTable from "../components/table/BasicTable";

function TablePage() {
  return (
    <div className="p-5">
      <h1 className="text-2xl">Table Page</h1>
      <div className="my-5">
        <Link href="/">Go to home</Link>
      </div>
      <BasicTable />
    </div>
  );
}

export default TablePage;
