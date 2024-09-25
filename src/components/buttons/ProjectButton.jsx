import { Link } from "react-router-dom";
import { StyledProjectButton } from "./Buttons.styles";

function ProjectButton() {

    function onButtonClick() {
        
    }
    

    return ( 
         <>
           <StyledProjectButton $isActive={false} onClick={() => onButtonClick()}>
               <Link to={"https://new-semester-project2.netlify.app"}>
                  Go To Website
               </Link>
            </StyledProjectButton>
         </>
    );
}

export default ProjectButton;