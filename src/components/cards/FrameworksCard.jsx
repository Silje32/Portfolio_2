import FrameworksButton from "../buttons/FrameworksButton";
import { Link } from "react-router-dom";
import { StyledH2 } from "../header/Heading.styles";
import { StyledFrameworksCard } from "./StyledCard.styles";


function FrameworksCard() {

    return (  
        <>
          <StyledFrameworksCard>
              <div>
                <StyledH2>
                    JAVASCRIPT FRAMEWORKS CA:
                </StyledH2>
              </div>
              <div>
                <Link to={"https://github.com/Silje32/Javascript-ca.git"}>GITHUB REPOSITORY</Link>
              </div> 
              <div> 
              <FrameworksButton />
              </div>  
          </StyledFrameworksCard>
        </>
    );
}

export default FrameworksCard;