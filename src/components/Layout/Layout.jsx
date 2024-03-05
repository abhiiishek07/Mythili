import { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className="flex flex-col overflow-hidden h-screen justify-center">
        <main className="grow overflow-y-auto">
          <Header />
          {children}
          <Footer />
        </main>
      </div>
    </Fragment>
  );
};

export default Layout;
