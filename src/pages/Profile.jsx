import { getAuth } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  const auth = getAuth();
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return user ? <h1>{user.displayName}</h1> : "not logged in";
}

export default Profile;
