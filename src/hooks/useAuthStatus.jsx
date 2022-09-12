import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";

export const useAuthStatus = () => {
  const isMounted = useRef(true);
  const [loggedIn, setLoggedin] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedin(true);
        }
        setCheckingStatus(false);
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);
  return { loggedIn, checkingStatus };
};
