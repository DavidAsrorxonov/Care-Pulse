import { getAppointment } from "@/lib/cmd/appointment.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Success = async (props: SearchParamProps) => {
  const { userId } = await props.params;
  const searchParams = await props.searchParams;
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="m-auto flex flex-1 flex-col items-center justify-between gap-10 py-10">
        <Link href={"/"}>
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="logo"
            className="h-10 w-fit"
          />
        </Link>

        <section className="flex flex-col items-center">
          <Image
            src={"/assets/gifs/success.gif"}
            height={300}
            width={280}
            alt="success"
          />
          <h2 className="text-4xl font-bold md:text-5xl md:font-bold mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment request</span> has
            been successfully <span className="text-green-500">submitted</span>.
          </h2>
          <p>We will be in touch with you shortly to confirm.</p>
        </section>

        <section className="flex w-full flex-col items-center gap-8 border-y-2 border-dark-400 py-8 md:w-fit md:flex-row">
          <p>Requested appointment details:</p>
          <div className="flex items-center gap-3">{/* <Image /> */}</div>
        </section>
      </div>
    </div>
  );
};

export default Success;
