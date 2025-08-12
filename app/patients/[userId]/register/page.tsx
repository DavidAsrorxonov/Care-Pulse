import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/cmd/patient.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = async (props: SearchParamProps) => {
  const { userId } = await props.params;
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="relative flex-1 overflow-y-auto px-[5%] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto flex size-full flex-col py-10 max-w-[860px] flex-1">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          {/* <PatientForm /> */}
          <RegisterForm user={user} />

          <p className="justify-items-end text-dark-600 xl:text-left py-12">
            {" "}
            © {new Date().getFullYear()} Care Pulse
          </p>
        </div>
      </section>

      <Image
        src={"/assets/images/register-img.png"}
        alt="patient"
        height={1000}
        width={1000}
        className="hidden h-full object-cover md:block max-w-[390px]"
      />
    </div>
  );
};

export default Register;
