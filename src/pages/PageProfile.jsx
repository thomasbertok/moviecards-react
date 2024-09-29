import React, { useContext, useEffect, useState } from "react";
import AuthContext from "@/context/auth/AuthContext";
import Header from "../components/Header";
import { NavLink, useNavigate } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";

function PageProfile() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // get current user data
  const { user } = useContext(AuthContext);

  let sttr = "";

  useEffect(() => {
    setLoading(true);
    console.log(">>> user: ", user);
    if (user) {
      // format object to nice json format
      sttr = JSON.stringify(user, null, "\t");
      sttr = JSON.stringify(user, null, 2);
      setLoading(false);
    }

    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <Header />
      <main className="container mx-auto pt-6 pb-6">
        <h2 className="text-5xl flex items-center gap-4">
          <NavLink to="/">
            <BsChevronLeft size="36px" />
          </NavLink>{" "}
          Profile Page
        </h2>

        {loading && (
          <div className="flex flex-col h-full items-center justify-center gap-4">
            <LoadingIcons.Oval strokeWidth={4} height={"4em"} width={"4em"} />
            <div>Loading profile...</div>
          </div>
        )}

        {!loading && !user && <p>No user.</p>}

        {!loading && user && (
          <div className="bg-blue-800 p-4 overflow-x-auto">
            <p>
              <strong>Username:</strong> {user.displayName || "none"}
            </p>
            <p>
              <strong>Email account:</strong> {user.email || "none"}
            </p>
            <p>
              <strong>Profile image:</strong> {user.photoURL || "none"}
            </p>
            <pre className="text-md font-mono">{sttr}</pre>
          </div>
        )}
      </main>
    </>
  );
}

export default PageProfile;
