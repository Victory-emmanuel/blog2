import React from "react";
import Link from "next/link";
const NotFound = () => {
  return (
    <>
      <div className="container h-screen flex flex-col gap-5 items-center justify-center">
        <h2 className="">Not Found</h2>
        <p className="">Could not find requested resource</p>
        <Link href="/" className="">
          Return Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
