"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PasskeyModal = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const closeModal = () => {
    setOpen(false);
    router.push("/");
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="!space-y-5 !bg-dark-400 !border-dark-500 !outline-none">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center justify-between">
            Admin Access Verification
            <Image
              src={"/assets/icons/close.svg"}
              alt="close"
              width={20}
              height={20}
              onClick={() => closeModal()}
              className="cursor-pointer"
            />
          </AlertDialogTitle>
          <AlertDialogDescription>
            To acces the admin page, please enter the passkey.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div></div>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PasskeyModal;
