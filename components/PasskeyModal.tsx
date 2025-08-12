"use client";

import React, { useEffect, useState } from "react";
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
import { usePathname, useRouter } from "next/navigation";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { decryptKey, encryptKey } from "@/lib/utils";

const PasskeyModal = () => {
  const router = useRouter();
  const path = usePathname();
  const [open, setOpen] = useState(true);
  const [passkey, setPasskey] = useState("");
  const [error, setError] = useState("");

  const encryptedKey =
    typeof window !== "undefined"
      ? window.localStorage.getItem("accessKey")
      : null;

  useEffect(() => {
    const accessKey = encryptedKey && decryptKey(encryptedKey);

    if (path) {
      if (accessKey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
        setOpen(false);
        router.push("/admin");
      } else {
        setOpen(true);
      }
    }
  }, [encryptedKey]);

  const closeModal = () => {
    setOpen(false);
    router.push("/");
  };

  const validatePasskey = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (passkey === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
      const encryptedKey = encryptKey(passkey);
      localStorage.setItem("accessKey", encryptedKey);

      setOpen(false);
    } else {
      setError("Invalid Passkey! Please try again.");
    }
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

        <div>
          <InputOTP
            maxLength={6}
            value={passkey}
            onChange={(value) => setPasskey(value)}
          >
            <InputOTPGroup className="w-full flex justify-between">
              <InputOTPSlot
                className="!text-4xl !justify-center !flex !border !border-dark-500 !rounded-lg !size-16 !gap-4"
                index={0}
              />
              <InputOTPSlot
                className="!text-4xl !justify-center !flex !border !border-dark-500 !rounded-lg !size-16 !gap-4"
                index={1}
              />
              <InputOTPSlot
                className="!text-4xl !justify-center !flex !border !border-dark-500 !rounded-lg !size-16 !gap-4"
                index={2}
              />
              <InputOTPSlot
                className="!text-4xl !justify-center !flex !border !border-dark-500 !rounded-lg !size-16 !gap-4"
                index={3}
              />
              <InputOTPSlot
                className="!text-4xl !justify-center !flex !border !border-dark-500 !rounded-lg !size-16 !gap-4"
                index={4}
              />
              <InputOTPSlot
                className="!text-4xl !justify-center !flex !border !border-dark-500 !rounded-lg !size-16 !gap-4"
                index={5}
              />
            </InputOTPGroup>
          </InputOTP>

          {error && (
            <p className="text-red-400 text-sm mt-4 flex justify-center">
              {error}
            </p>
          )}
        </div>

        <AlertDialogFooter>
          <AlertDialogAction
            onClick={(e) => validatePasskey(e)}
            className="!bg-green-500 !text-white w-full"
          >
            Enter admin passkey
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PasskeyModal;
