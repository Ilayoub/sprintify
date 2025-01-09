import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar/Navbar";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import IssueDetails from "./IssueDetails/IssueDetails";
import Subscription from "./Subscription/Subscription";
import Auth from "./Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./redux/Auth/Action";
import { fetchProjects } from "./redux/Project/Action";
import Success from "@/Success";

export default function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const location = useLocation();

  useEffect(() => {
    dispatch(getUser());
    dispatch(fetchProjects({}));
  }, [auth.jwt, dispatch, location]);
  console.log(auth.jwt);

  return (
    <>
      {auth.user ? (
        <div>
          <Navbar />
          <Routes>
            <Route Component={Home} path="/" />
            <Route Component={ProjectDetails} path="/project/:id" />
            <Route
              Component={IssueDetails}
              path="/project/:projectId/issue/:issueId"
            />
            <Route Component={Subscription} path="/upgrade" />
            <Route Component={Success} path="/payment/success" />
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}
