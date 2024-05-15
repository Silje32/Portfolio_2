import ExamButton from "../buttons/ExamButton";
import { Link } from "react-router-dom";
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
                <p>
                   An existing Social Media company has approached you to create a brand new front 
                   end for their application. While they have a list of required features, the design 
                   and user experience has not been specified. Working with the official API 
                   documentation, plan, design and build a modern front end social media application.
                </p>
              </div>
              <div>
                <Link to={"https://github.com/Silje32/Final_Project_Exam_2.git"}>GITHUB REPOSITORY</Link>
              </div> 
              <div>
              <ExamButton />
              </div> 
          </StyledExamCard>
        </>
    );
}

export default ExamCard;