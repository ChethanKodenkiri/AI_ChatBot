import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  loginUser,
  logoutUser,
  verifyUser,
} from "../../helpers/api-communicator";
import toast from "react-hot-toast";

type User = {
  name: string;
  email: string;
};
type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const verifyLoginUser = async () => {
      const data = await verifyUser();
      if (data) {
        setUser({ email: data.email, name: data.name });
        setIsLoggedIn(true);
      }
    };
    verifyLoginUser();
  }, []);

  const login = async (email: string, password: string) => {
    const data = await loginUser(email, password);
    if (data) {
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
    }
  };
  const signUp = async (name: string, email: string, password: string) => {};

  const logout = async () => {
    logoutUser()
      .then(() => {
        setIsLoggedIn(false);
        setUser(null);
        // window.location.reload();
        toast.success("Logged Out"), { id: "logout" };
      })
      .catch(err=> {
        toast.error("Logout Failed"), { id: "logout" };
        console.log(err)
      });
  };

  const value = {
    user,
    isLoggedIn,
    login,
    signUp,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
