import { Link } from "react-router-dom";
import { StyledFrameworksButton } from "./Buttons.styles";

function FrameworksButton() {
  function onButtonClick() {}

  return (
    <>
      <StyledFrameworksButton $isActive={false} onClick={() => onButtonClick()}>
        <Link to={"https://silje32.github.io/Javascript-ca/"}>
          Go To Website
        </Link>
      </StyledFrameworksButton>
    </>
  );
}

export default FrameworksButton;
