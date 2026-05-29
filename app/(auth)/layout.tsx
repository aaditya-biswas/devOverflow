import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <main className="bg-auth-light dark:bg-auth-dark">{children}</main>;
};
export default AuthLayout;
