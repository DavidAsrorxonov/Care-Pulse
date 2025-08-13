import Image from "next/image";
import "../../../styles/custom.css";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/cmd/patient.actions";

export default async function NewAppointment(props: SearchParamProps) {
  const { userId } = await props.params;

  const patient = await getPatient(userId);

  if (!patient) {
    return (
      <div className="flex h-screen max-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Patient Not Found</h1>
          <p className="text-gray-600 mt-2">
            No patient record found for user ID: {userId}
          </p>
          <p className="text-gray-600 mt-2">
            Please register as a patient first.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen max-h-screen">
      <section className="relative flex-1 overflow-y-auto px-[5%] my-auto">
        <div className="mx-auto flex size-full flex-col py-10 max-w-[860px] flex-1 justify-between">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />

          <p className="justify-items-end text-dark-600 xl:text-left py-12">
            {" "}
            © {new Date().getFullYear()} Care Pulse
          </p>
        </div>
      </section>

      <Image
        src={"/assets/images/appointment-img.png"}
        alt="appointment"
        height={1000}
        width={1000}
        className="hidden h-full object-cover md:block max-w-[390px] bg-bottom"
      />
    </div>
  );
}
