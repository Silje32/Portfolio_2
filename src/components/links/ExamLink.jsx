import { Link } from "react-router-dom";
import { StyledLink } from "./StyledLink.styles";

function ExamLink() {

    function onClick() {
        
      }
    

    return ( 
         <>
           <StyledLink $isActive={false} onClick={() => onClick()}>
              <ul>
                <li> 
                  <Link to={"https://github.com/Silje32/Final_Project_Exam_2.git"}>
                      GITHUB REPOSITORY
                  </Link>
                </li> 
              </ul>
           </StyledLink>
         </>
    );
}

export default ExamLink;