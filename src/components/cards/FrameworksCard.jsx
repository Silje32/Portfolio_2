import FrameworksButton from "../buttons/FrameworksButton";
import { Link } from "react-router-dom";
import { StyledH2 } from "../header/Heading.styles";
import { StyledFrameworksCard, StyledLink } from "./StyledCard.styles";


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
                <ul>
                  You are tasked with build out the following pages for an eCom store:
                  <li>Homepage</li>
                  <li>Individual product page</li>
                  <li>Cart page</li>
                  <li>Checkout success page</li>
                </ul>
                <div>
                  <p>
                     The Homepage should have a list of all the products. There should be a look-ahead 
                     search bar that filters products when typing in a product name. Clicking on a 
                     product should take a user to an individual product page.
                  </p>
                </div>
              </div>
              <StyledLink>     
                <Link to={"https://github.com/Silje32/Javascript-ca.git"}>
                   VIEW GITHUB REPOSITORY
                </Link>
              </StyledLink> 
              <div> 
              <FrameworksButton />
              </div>  
          </StyledFrameworksCard>
        </>
    );
}

export default FrameworksCard;