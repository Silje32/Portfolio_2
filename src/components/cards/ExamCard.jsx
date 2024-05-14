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
                <p>LINK TO GITHUB REPOSITORY:</p>
                <Link to={"https://github.com/Silje32/Final_Project_Exam_2.git"}>LINK TO GITHUB REPOSITORY</Link>
              </div> 
              <div>
              <ExamButton />
              </div> 
          </StyledExamCard>
        </>
    );
}

export default ExamCard;