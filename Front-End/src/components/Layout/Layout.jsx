import React from "react";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        maxHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
