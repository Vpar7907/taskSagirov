import { IBenefit } from "../../types/benefit";
import BenefitItem from "./BenefitItem";

const benefitCards: IBenefit[] = [
  {
    firstLine: "мы",
    secondLine: "1",
    thirdLine: "на рынке",
    gradient: "to bottom right",
  },
  {
    firstLine: "гарантируем",
    secondLine: "50%",
    thirdLine: "безопасность",
    gradient: "to bottom left",
  },
  {
    firstLine: "календарик за",
    secondLine: "2001",
    symbol: "г.",
    thirdLine: "в подарок",
    gradient: "to top right",
  },
  {
    firstLine: "путешествие",
    secondLine: "597",
    thirdLine: "дней",
    gradient: "to top left",
  },
];

function BenefitCards() {
  return (
    <div className="benefit-container">
      {benefitCards.map((card) => (
        <BenefitItem {...card} />
      ))}
    </div>
  );
}

export default BenefitCards;
