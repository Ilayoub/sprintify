import { useState } from "react";
import Login from "./Login";
import { Button } from "@/components/ui/button";
import Signup from "./Signup";
import "./Auth.css"

export default function Auth() {
  const [active, setActive] = useState();

  return (
    <div className="loginContainer">
      <div className="box h-[30rem] w-[25rem]">
        <div className="minContainer login">
          <div className="loginBox w-full px-10 space-y-5">
            {active ? <Signup /> : <Login />}
          </div>
          <div>
            <span>Already have an account?</span>
            <Button variant="ghost" onClick={() => setActive(!active)}>
              {active ? "signing" : "signup"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
