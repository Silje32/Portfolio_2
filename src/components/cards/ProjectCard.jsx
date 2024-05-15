import ProjectButton from "../buttons/ProjectButton";
import { Link } from "react-router-dom";
import { StyledH2 } from "../header/Heading.styles";
import { StyledProjectCard } from "./StyledCard.styles";


function HomeCard() {

    return (  
        <>
          <StyledProjectCard>
              <div>
                <StyledH2>
                    SEMESTER PROJECT 2:
                </StyledH2>
              </div>
              <div>
                <Link to={"git@github.com:Silje32/Semester_Project_2.git"}>GITHUB REPOSITORY</Link>
              </div>
              <div>
              <ProjectButton />
              </div> 
          </StyledProjectCard>
        </>
    );
}

export default HomeCard;