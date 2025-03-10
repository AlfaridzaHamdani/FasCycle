import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const index = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

export default index;
