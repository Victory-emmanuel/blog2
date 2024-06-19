import Link from "next/link";
import React from "react";

const BlogHero = () => {
  return (
    <div>
      <section
        style={{
          background: `url("https://i.postimg.cc/K8XNPK0r/Untitled-design-21.jpg") no-repeat center center/cover`,
        }}
        className=" hero"
      >
        <div className="grid ss:py-40 xx:py-32 text-center img ss:px-12 xx:px-6 ">
          <h1 className="sm:text-6xl xx:text-3xl sm:font-extrabold xx:font-bold text-white xx:py-3  ss:py-6">
            OUR BLOG
          </h1>
          <p className="sm:text-2xl xx:text-xl xx:w-full ss:w-[75%] mx-auto  text-white xx:py-3  ss:py-6 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            iste facilis doloremque nobis ipsum commodi, deserunt tempore at
            quam tempora excepturi ratione reiciendis eligendi repudiandae aut
            qui praesentium dolore quisquam velit omnis vero expedita adipisci
            incidunt. Reprehenderit, a libero. Doloremque totam, rem commodi
            explicabo sit optio placeat perferendis incidunt praesentium!
          </p>
          <Link href="https://wa.me/message/DOCQNYXAEPVDH1">
            <button className="w-[11rem] py-5 px-7 mx-auto  bg-white h-[4rem] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:text-white before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-accent before:to-lightAccent before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#343434]">
              CONTACT US
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogHero;
