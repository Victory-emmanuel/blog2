import Link from "next/link";
import React from "react";
import { Input } from "./components";

const SignupForm = () => {
  return (
    <>
      <section id="signup-form" classNameName="">
        <div className="relative py-8">
          <div className="container relative m-auto px-6 text-primary md:px-12 xl:px-40">
            <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
              <div className="rounded-3xl   bg-accent shadow-2xl shadow-lightAccent backdrop-blur-2xl">
                <div className="p-8 py-12 sm:p-16">
                  <h2 className="mb-8 text-2xl font-bold text-primary">
                    Sign in to your account
                  </h2>
                  <form action="" className="space-y-8">
                    <div className="space-y-2">
                      <Input
                        label="Name"
                        type="text"
                        name="name"
                        id="name"
                        autocomplete="username"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        label="Email"
                        type="text"
                        name="email"
                        autocomplete="email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        label="Pasword"
                        type="text"
                        name="password"
                        autocomplete="password"
                      />
                    </div>

                    <div className="space-y-2">
                      <Input
                        label="Confirm Pasword"
                        type="text"
                        name="confirm-password"
                        autocomplete="confirm-password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative text-base font-semibold text-accent ">
                        Sign Up
                      </span>
                    </button>

                    <p className="border-t border-primary pt-6 text-sm text-primary">
                      Already have an account ?
                      <Link href="/login" className="text-primary ml-4">
                        Sign in
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
              <div className="space-x-4 text-center text-gray-500">
                <span>tailus</span>
                <a href="#" className="text-sm hover:text-primary">
                  Contact
                </a>
                <a href="#" className="text-sm hover:text-primary">
                  Privacy & Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupForm;
