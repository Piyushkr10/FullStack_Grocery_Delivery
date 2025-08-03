import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


// Create the context
export const AppContext = createContext();


// Context Provider Component

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);

  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin
  };    

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};


// Custom hook for using the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};




