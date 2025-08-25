import axios from 'axios';
import { createContext, useState, useEffect} from 'react';
import type { ReactNode } from 'react';
// User data structure
interface User {
  id: string;
  fName: string;
  lName: string;
  email: string;
}

// Context type definition
interface UserContextType {
  user: User | null | undefined; // undefined = loading, null = not logged in, User = logged in
  setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>;
  logout: () => Promise<void>; // function to log out the user
}

// Props type for provider
interface UserContextProviderProps {
  children: ReactNode;
}

// Create context with undefined as initial value
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Context provider component
export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  // Load user profile on initial mount
  useEffect(() => {
    axios
      .get('/profile', { withCredentials: true }) // Send cookies for authentication
      .then(res => setUser(res.data))             // Set user if response is valid
      .catch(() => setUser(null));                // Set to null if not authenticated or error occurs
  }, []);



  // Logout function to clear the session and context state
  // Logout function
  const logout = async () => {
    try {
      await axios.post("/logout"); // assuming logout is a POST route
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };


  
  // Provide user state and actions to children
  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}
