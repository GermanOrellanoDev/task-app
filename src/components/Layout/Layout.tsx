import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import "./Layout.css";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <div className="content">{children}</div>
      <Footer></Footer>
    </div>
  );
};
