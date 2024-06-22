import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPhone,
} from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <footer className="w-full bg-extraClr dark:bg-[#111] xx:py-12 py-24 xx:px-0 px-12 ">
          <div className="ss:px-12 xx:px-6 lg:px-28">
            <div className=" m-auto space-y-6 text-secondary dark:text-primary">
              <div className="relative z-1 mb-12">
                <Link href={"/"} className="" aria-label="logo">
                  <h3 className="text-accent text-center xx:text-2xl ss:text-4xl ">
                    The Brown Patience Company
                  </h3>
                </Link>
                <p className="text-md xx:text-base xx:text-left ss:text-center pt-6 text-secondary dark:text-primary">
                  Get your message to the people in need of it. Many gifted
                  persons have a message for their world, books they've been
                  planning to write, a community they long to impact, but they
                  got stuck, couldn't find the time to continue, and began to
                  wonder if they'd ever share that message. But with a
                  ghostwriter to help write your book, your vision stays alive.
                </p>
              </div>
              <ul className="flex flex-col items-center justify-center gap-4 py-6 sm:flex-row sm:gap-8">
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/services"}
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/about"}
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/book"}
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    Books
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/subs"}
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    Subscription
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/community"}
                    className="hover:text-accent dark:text-primary font-bold font-xl"
                  >
                    Community
                  </Link>
                </li>
              </ul>
              {/* " Dark mode" */}
              <div className="dark:block hidden">
                <div className=" pb-12 m-auto flex w-max items-center justify-between space-x-4">
                  <Link href="tel:+243996660436" aria-label="call">
                    <FaPhone style={{ color: "#fff" }} />
                  </Link>
                  <Link href="https://wa.me/message/DOCQNYXAEPVDH1">
                    <FaWhatsapp style={{ color: "#fff" }} />
                  </Link>
                  <Link
                    href={
                      "https://www.facebook.com/Compelling_Storywriter?mibextid=ZbWKwL"
                    }
                    title="facebook"
                    target="blank"
                    aria-label="facebook"
                  >
                    <FaFacebook style={{ color: "#fff" }} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/patience-brown-3430ba17a"
                    title="linkedin"
                    aria-label="linkedin"
                  >
                    <FaLinkedin style={{ color: "#fff" }} />
                  </Link>
                  <Link
                    href="https://instagram.com/contents_by_brownpatience?utm_medium=copy_link"
                    title="instagram"
                    aria-label="instagram"
                  >
                    <FaInstagram style={{ color: "#fff" }} />
                  </Link>
                  <Link
                    href="https://twitter.com/ContentsbyBrown?s=09"
                    title="X"
                    aria-label="X"
                  >
                    <FaTwitter style={{ color: "#fff" }} />
                  </Link>
                </div>
              </div>

              {/* Light mode */}
              <div className="dark:hidden block">
                <div className="f-icon  pb-12 m-auto flex w-max items-center justify-between space-x-4">
                  <Link href="tel:+243996660436" aria-label="call">
                    <FaPhone />
                  </Link>
                  <Link href="https://wa.me/message/DOCQNYXAEPVDH1">
                    <FaWhatsapp />
                  </Link>
                  <Link
                    href={
                      "https://www.facebook.com/Compelling_Storywriter?mibextid=ZbWKwL"
                    }
                    title="facebook"
                    target="blank"
                    aria-label="facebook"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/patience-brown-3430ba17a"
                    title="linkedin"
                    aria-label="linkedin"
                  >
                    <FaLinkedin />
                  </Link>
                  <Link
                    href="https://instagram.com/contents_by_brownpatience?utm_medium=copy_link"
                    title="instagram"
                    aria-label="instagram"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href="https://twitter.com/ContentsbyBrown?s=09"
                    title="X"
                    aria-label="X"
                  >
                    <FaTwitter />
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <span className=" text-sm tracking-wide">
                  Copyright © emmanuel <span id="year"></span> | All right
                  reserved
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
