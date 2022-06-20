import Link from "next/link";
import React from "react";

function OtherPage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl">Link</h1>
      <div className="mt-4 flex gap-5">
        <Link href="/">Go to home</Link>
        <Link href="/table">Go to table page</Link>
      </div>
    </div>
  );
}

export default OtherPage;
