import React, { useContext } from "react";
import AuthContext from "@/context/auth/AuthContext";
import Header from "../components/Header";

function PageProfile(props) {
  // get current user data
  const { user } = useContext(AuthContext);

  // format object to nice json format
  let sttr = JSON.stringify(user, null, "\t");
  sttr = JSON.stringify(user, null, 2);

  return (
    <>
      <Header />
      <main className="container mx-auto pt-6 pb-6">
        <h2>Profile Page</h2>

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
      </main>
    </>
  );
}

export default PageProfile;
