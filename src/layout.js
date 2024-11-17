
import Footer from "./components/footer";
import Header from "./components/Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div> {/* This will render the page content */}
      <Footer/>
    </div>
  );
}

export default Layout;
