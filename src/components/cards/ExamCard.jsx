import ExamButton from "../buttons/ExamButton";
import ExamLink from "../links/ExamLink";
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
                 <ExamLink />
              <div>
              <ExamButton />
              </div> 
          </StyledExamCard>
        </>
    );
}

export default ExamCard;