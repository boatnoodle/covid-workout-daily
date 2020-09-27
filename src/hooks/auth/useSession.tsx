import React, {
  useContext,
  useState,
  createContext,
  useEffect,
  useCallback,
} from "react";

// import { UserFromProvider } from "hooks/auth/types";
// import { useMutation } from "@apollo/react-hooks";
// import { VALIDATE_USER, CLEAN_USER } from "./graphql";
// import { Login_login } from "__generated__/Login";
// import { Logout } from "__generated__/Logout";
import firebase, { firebaseProviders } from "utils/firebase";
import { Skeleton } from "antd";
import { addUser, signIn, validateUser } from "services/firebase";
// Context Provider component that wraps your app and makes auth object
export interface SessionContext {
  user: UserFromProvider;
  authenticating: boolean;
  isLoggedIn: boolean;
}

const sessionContext = createContext<SessionContext>(null);

// available to any child component that calls the useSession() hook.
export const ProvideAuth: any = ({ children }) => {
  const auth = useProvideSession();
  return (
    <sessionContext.Provider value={auth}>{children}</sessionContext.Provider>
  );
};

// Hook that enables any component to subscribe to auth state
export const useSession = (): SessionContext => {
  return useContext<SessionContext>(sessionContext);
};

export const useAuthProtected = (redirectUri = "/sign-in"): SessionContext => {
  const { user, authenticating, isLoggedIn } = useSession();

  if (!authenticating && !user) {
    window.location.href = redirectUri;
  }

  return { user, authenticating, isLoggedIn };
};

export const ProtectedFragment: React.FC = ({ children }) => {
  const { authenticating, isLoggedIn } = useAuthProtected();
  if (authenticating) return <Skeleton></Skeleton>;

  if (isLoggedIn) return <>{children}</>;

  return <>Unauthenticated</>;
};

export interface UserFromProvider {
  uid: string;
  email?: string;
  displayName: string;
  photoURL: string;
  provider?: string;
}
// Provider hook that creates auth object and handles state
function useProvideSession() {
  const [user, setUser] = useState<UserFromProvider>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Handle a new user object (updates db and sets user state)
  const handleUser = useCallback(async (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser as firebase.User);
      setLoading(true);
      const response = await validateUser(user);
      if (!response.data()) await addUser(user);
      else await signIn(user);
      setUser(user);
      setLoading(false);
    } else {
      setUser(null);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Subscribe to user on mount
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);
    // Unsubscribe on cleanup
    return () => unsubscribe();
  }, [handleUser]);

  return {
    user,
    authenticating: loading,
    isLoggedIn: user && !loading,
  };
}
// Format user object
// If there are extra fields you want from the original user
// object then you'd add those here.
const formatUser = (user: firebase.User): UserFromProvider => {
  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    // Create an array containing the user's providers (password, google, etc).
    provider: user.providerData.map(({ providerId }) => {
      // Get the name for this providerId
      return firebaseProviders.find((p) => p.id === providerId).name;
    })[0],
  };
};
