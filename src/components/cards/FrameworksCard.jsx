import FrameworksButton from "../buttons/FrameworksButton";
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
              <FrameworksButton />
              </div>  
          </StyledFrameworksCard>
        </>
    );
}

export default FrameworksCard;