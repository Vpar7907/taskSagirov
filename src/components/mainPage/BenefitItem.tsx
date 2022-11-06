import { useState } from "react";

interface Props {
  firstLine: string;
  secondLine: string;
  thirdLine: string;
  gradient: string;
  symbol?: string;
}

function BenefitItem({
  firstLine,
  secondLine,
  thirdLine,
  gradient,
  symbol,
}: Props): JSX.Element {
  const [hover, setHover] = useState(false);

  const style = {
    backgroundImage: `linear-gradient(${gradient}, transparent 40%, rgba(255, 255, 255, 0.05)`,
    margin: 5,
    display: "inline-block",
    width: 190,
    height: 160,
  };
  const styleHover = {
    width: 190,
    height: 160,
    backgroundImage: `linear-gradient(${gradient}, transparent 40%, rgba(255, 255, 255, 0.13)`,
    display: "inline-block",
    borderImage: `linear-gradient( ${gradient}, transparent 50%, rgba(255, 255, 255, 0.377) 100% )`,
    cursor: "pointer",
    margin: 5,
    borderImageSlice: 1,
    borderWidth: `${
      gradient === "to bottom left"
        ? "0 0 1px 1px"
        : gradient === "to bottom right"
        ? "0 1px 1px 0"
        : gradient === "to top left"
        ? "1px 0 0 1px"
        : gradient === "to top right"
        ? "1px 1px 0 0"
        : ""
    }`,
    borderStyle: "solid",
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      style={hover ? styleHover : style}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div className="benefit">
        <p className="text-small">{firstLine}</p>
        <div className="text-large">
          {secondLine} <p className="symbol">{symbol}</p>
        </div>
        <p className="text-small">{thirdLine}</p>
      </div>
    </div>
  );
}

export default BenefitItem;
