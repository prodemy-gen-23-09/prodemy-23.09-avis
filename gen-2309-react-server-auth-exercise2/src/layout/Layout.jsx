import Header from "./Header";


function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="flex justify-center pt-20 pb-40">{children}</div>
    </>
  );
}

export default Layout;
