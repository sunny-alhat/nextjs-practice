import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 p-3">
      <Link href="/" className="mr-5">
        Home
      </Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default NavBar;
