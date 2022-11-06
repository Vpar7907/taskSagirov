import Header from "../header/Header";

interface IProps {
  children: React.ReactNode;
}

function MainLayout({ children }: IProps) {
  return (
    <div className="mainLayout">
      <Header />
      <>{children}</>
    </div>
  );
}

export default MainLayout;
