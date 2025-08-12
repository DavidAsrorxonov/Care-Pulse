import Image from "next/image";
import Link from "next/link";
import React from "react";

const Admin = () => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className=" sticky top-3 z-20 mx-3 flex items-center justify-between rounded-2xl bg-dark-200 px-[5%] py-5 shadow-lg xl:px-12">
        <Link href={"/"} className="cursor-pointer">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-lg font-semibold">Admin Dashboard</p>
      </header>

      <main className="flex flex-col items-center space-y-6 px-[5%] pb-12 xl:space-y-12 xl:px-12">
        <section className="w-full space-y-4">
          <h1 className="text-4xl md:text-5xl">Welcome</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>
      </main>
    </div>
  );
};

export default Admin;
