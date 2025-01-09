import SubscriptionCard from "./SubscriptionCard";

export default function Subscription() {
  const annualPlan = [
    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team members",
    "Advanced Reporting",
    "Priority Support",
    "Everything which monthly plan has",
  ];

  const paidPlan = [
    "Add unlimited project",
    "Access to live chat",
    "Add unlimited team member",
    "Advance Reporting",
    "Priority Support",
    "Customization Options",
    "Integration Support",
    "Advanced Security",
    "Training and Resources",
    "Access Control",
    "Custom workflows",
  ];
  const freePlan = [
    "Add only 3 projects",
    "Basic Task Management",
    "Project Collaboration",
    "Basic Reporting",
    "Email Notification",
    "Basic Access Control",
  ];
  return (
    <>
      <div className="p-10">
        <h1 className="text-5xl font-semibold py-5 pb-16 text-center">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
            <SubscriptionCard
              data={{
                planName: "Free",
                features: freePlan,
                planType: "FREE",
                price: 0,
                buttonName: "Get Started",
              }}
            />
            <SubscriptionCard
              data={{
                planName: "Monthly Paid Plan",
                features: paidPlan,
                planType: "MONTHLY",
                price: 5,
                buttonName: "Subscribe",
              }}
            />
            <SubscriptionCard
              data={{
                planName: "Annual Paid Plan",
                features: annualPlan,
                planType: "ANNUALLY",
                price: 50,
                buttonName: "Subscribe",
              }}
            />
          </div>
        </h1>
      </div>
    </>
  );
}
