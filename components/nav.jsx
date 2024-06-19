"use client";
// "use client" allows you to make use of react hooks in nextjs
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Brown from "@/assets/brown.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathName = usePathname();

  const [dropdown, setDropdown] = useState(false);
  const handleShowDropdown = () => setDropdown((prev) => true);
  const handleHideDropdown = () => setDropdown((prev) => false);
  const loggedIn = false;
  return (
    <section id="nav">
      <div className="ss:px-12 py-6 shadow nav-container">
        <div className="">
          <Link href="/">
            <img
              src="https://i.postimg.cc/sXpN9nFV/THE-BROWN-PATIENCE-COMPANY-logo.png"
              alt="logo"
              className="w-[12rem] "
            />
          </Link>
        </div>
        <ul className="flex mx-auto gap-4">
          <li className="">
            <Link href="/">Homes</Link>
          </li>
          <li className="">
            <Link href="/">Services</Link>
          </li>
          <li className="">
            <Link href="/">About</Link>
          </li>
          <li className="">
            <Link
              href="/blog"
              className={pathName === "/blog" ? "text-accent font-bold" : ""}
            >
              Blogs
            </Link>
          </li>
          <li className="">
            <Link href="/">Books</Link>
          </li>
          <li className="">
            <Link href="/">Subcription</Link>
          </li>
          <li className="">
            <Link href="/">Community</Link>
          </li>
        </ul>
        <div className="flex ml-auto gap-3">
          {loggedIn ? (
            <>
              {/* <Link href="/user">Profile</Link> */}
              <div className="relative">
                <Image
                  onClick={handleShowDropdown}
                  src={Brown}
                  alt="avatar"
                  sizes="100vw"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                {dropdown && (
                  <>
                    <div className="absolute top-0  right-0 bg-primary shadow-md  p-5">
                      <AiOutlineClose
                        onClick={handleHideDropdown}
                        className=""
                      />
                      <button onClick={handleHideDropdown} className="">
                        Logout
                      </button>
                      <Link
                        onClick={handleHideDropdown}
                        className=""
                        href="user"
                      >
                        Profile
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <Link href="/login">
                <button
                  className={
                    pathName === "/login" ? "text-accent font-bold" : ""
                  }
                >
                  Login
                </button>
              </Link>
              <Link href="/sign-up">
                <button
                  className={
                    pathName === "/sign-up" ? "text-accent font-bold" : ""
                  }
                >
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Nav;
