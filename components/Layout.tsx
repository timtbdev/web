import { FC } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Props {
  children?: any | any[];
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen bg-white/95 dark:bg-slate-900">
        <Header />
        <div className="overflow-hidden">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
