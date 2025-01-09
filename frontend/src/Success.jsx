import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-[#121212] text-white flex flex-col items-center justify-center h-screen">
      <CheckCircledIcon className="w-24 h-24 text-green-400" />
      <h1 className="mt-5 text-3xl font-bold">Payment Successful!</h1>
      <p className="mt-2 text-lg">Thank you for your payment.</p>
      <Button
        className="mt-8 bg-green-400 text-[#121212] px-6 py-3 hover:bg-green-500 transition-colors"
        onClick={handleGoHome}
      >
        Go to Home
      </Button>
    </div>
  );
}
