"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Input } from "./components";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const initialState = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  ////
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }
  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    if (!email || !password) {
      setError("All field are required");
      return;
    }
    //Regular expression pattern for a basic email validation

    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!pattern.test(email)) {
      setError("Please enter a valid email address ");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    try {
      setIsLoading(true);
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("Invalid credentials");
        setIsLoading(false);
        return;
      }
      router.push("/blog");
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const handleChange = (event) => {
    setError("");
    setState({ ...state, [event.target.name]: event.target.value });
  };
  return (
    <>
      <section id="signup-form" className="">
        <div className="relative py-8">
          <div className="container relative m-auto px-6 text-primary md:px-12 xl:px-40">
            <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
              <div className="rounded-3xl   bg-accent shadow-2xl shadow-lightAccent backdrop-blur-2xl">
                <div className="p-8 py-12 sm:p-16">
                  <h2 className="mb-8 text-2xl font-bold text-primary">
                    Sign in to your account
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                      <Input
                        label="Email"
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={state.email}
                        autocomplete="email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        label="Pasword"
                        type="text"
                        name="password"
                        onChange={handleChange}
                        value={state.password}
                        autocomplete="password"
                      />
                    </div>
                    {error && (
                      <div className="text-primary font-semibold">{error}</div>
                    )}
                    {success && (
                      <div className="text-primary font-semibold">
                        {success}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative text-base font-semibold text-accent ">
                        {isLoading ? "Loading..." : "Login"}
                      </span>
                    </button>

                    <p className="border-t border-primary pt-6 text-sm text-primary">
                      Need an account ?
                      <Link href="/sign-up" className="text-primary ml-4">
                        Sign Up
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
              <div className="space-x-4 text-center text-gray-500">
                <span>Brown Patience</span>
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

export default LoginForm;
