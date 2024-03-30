import React, { useEffect, useState } from "react";
import ProfileComponent from "../components/ProfileComponent";
import TopBar from "../components/TopBar"; // Import the TopBar component
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import Loader from "../components/common/Loader";

export default function Profile({ currentUser }) {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, [navigate]);

  // Include the TopBar component in the rendered output
  return (
    <>
      <TopBar />
      {loading ? <Loader /> : <ProfileComponent currentUser={currentUser} />}
    </>
  );
}
