import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn btn-danger">New User</Link>
      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
      <p className="mt-5">{new Date().toLocaleTimeString()}</p>
    </>
  );
};

export default UsersPage;
