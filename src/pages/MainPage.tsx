import BeginButton from "../components/mainPage/BeginButton";
import BenefitCards from "../components/mainPage/BenefitCards";
import Leader from "../components/mainPage/Leader";

function MainPage() {
  let windowSize = window.innerWidth;
  return (
    <main className="container">
      <div className="main-page">
        <Leader />
        <BenefitCards />
        {windowSize <= 992 ? (
          <div className="leader">
            <BeginButton />
          </div>
        ) : null}
      </div>
    </main>
  );
}

export default MainPage;
