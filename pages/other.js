import Link from "next/link";
import React from "react";

function OtherPage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl">Link</h1>
      <div className="mt-5">
        <Link href="/"> Go to home</Link>
      </div>
    </div>
  );
}

export default OtherPage;
