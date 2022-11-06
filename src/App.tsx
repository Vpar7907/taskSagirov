import Menu from "./components/header/Menu";
import MainLayout from "./components/layouts/MainLayout";
import MainPage from "./pages/MainPage";

function App() {
  const windowSize = window.innerWidth;
  return (
    <div className="App">
      <MainLayout>
        <MainPage />
      </MainLayout>
    </div>
  );
}

export default App;
