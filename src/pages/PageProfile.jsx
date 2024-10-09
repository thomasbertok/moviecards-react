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
          <div className="bg-blue-800 p-4 flex gap-4">
            <div className="flex flex-col gap-2">
              <img src={user.photoURL} alt={user.displayName} className="w-32 h-32 rounded-full bg-blue-900" />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <h2 className="text-3xl font-medium leading-none mb-0">{user.displayName || "none"}</h2>
              <strong>{user.email || "none"}</strong>
            </div>

            <pre className="text-md font-mono">{sttr}</pre>
          </div>
        )}
      </main>
    </>
  );
}

export default PageProfile;
