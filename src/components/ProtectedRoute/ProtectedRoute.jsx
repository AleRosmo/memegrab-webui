import React from "react";

export default function ProtectedRoute({ isLoggedIn, children }) {
    const [isTest, setIsTest] = useState("it is not");

    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])
    
  
    return (
      <AppContext.Provider value={contextObj}>{children}</AppContext.Provider>
    );
  }