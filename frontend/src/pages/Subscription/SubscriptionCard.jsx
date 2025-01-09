import { Button } from "@/components/ui/button";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SubscriptionCard({ data }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");
  const handlePay = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `http://localhost:4000/payment/create?Plantype=${data.planType}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const approvalUrl = response.data.approval_url;
      if (approvalUrl) {
        window.location.href = approvalUrl;
      } else {
        throw new Error("Approval URL not found in response.");
      }
    } catch (error) {
      console.error("Error creating payment:", error);
      setError("An error occurred while creating the payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl bg-[#1b1b1b] bg-opacity-20 shadow-[#14173b] shadow-2xl card p-5 space-y-5 w-[18rem] text-base">
      <p>{data.planName}$</p>
      <p className="text-xl font-semibold text-green-500">{data.price}$</p>
      <div>
        <Button className="w-full" onClick={handlePay}>
          {loading ? "Processing..." : "Subscribe"}
        </Button>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <div>
        {data.features.map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircledIcon />
            <p className="text-sm">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
