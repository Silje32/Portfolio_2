import ExamButton from "../buttons/ExamButton";
import { StyledH2 } from "../header/Heading.styles";
import { StyledExamCard } from "./StyledCard.styles";


function ExamCard() {

    return (  
        <>
          <StyledExamCard>
              <div>
                <StyledH2>
                    PROJECT EXAM 2:
                </StyledH2>
              </div> 
              <div>
              <ExamButton />
              </div> 
          </StyledExamCard>
        </>
    );
}

export default ExamCard;