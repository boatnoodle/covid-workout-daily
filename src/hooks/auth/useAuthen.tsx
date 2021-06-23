import React, { useState } from "react";
import firebase from "utils/firebase";

export const useAuthen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [redirectUri, setRedirectDestination] = useState("");

  const signout = async () => {
    setLoading(true);
    await firebase.auth().signOut();
    setLoading(false);
    setRedirectDestination("/auth");
  };

  return {
    loading,
    redirectUri,
    signout,
  };
};
