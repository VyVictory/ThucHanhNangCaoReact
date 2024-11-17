
import Header from "./components/Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div> {/* This will render the page content */}
    </div>
  );
}

export default Layout;
