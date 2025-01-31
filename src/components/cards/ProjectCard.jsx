import { Link } from "react-router-dom";
import ProjectButton from "../buttons/ProjectButton";
import Screenshot from "../../images/website_semester-project2.png";
import { StyledH2 } from "../header/Heading.styles";
import { StyledProjectCard, StyledLink } from "./StyledCard.styles";




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
                   <img src={Screenshot} alt="Screenshot" />
                </div>
              <div>
                <p>
                   An auction site is looking to launch a website where users can add items to be 
                   bid on and bid on items other users have put up for auction. When a new user joins 
                   the website, they are given 1000 credits to use on the site. They can get credits by 
                   selling items and use credit by buying items. Non-registered users can search through the 
                   listings, but only registered users can make bids on listings.
                </p>
              </div>
              <StyledLink>
                  <Link to={"https://github.com/Silje32/new-javascript-semester-project.git"}>
                     VIEW GITHUB REPOSITORY
                  </Link>
              </StyledLink>
              <div>
              <ProjectButton />
              </div> 
          </StyledProjectCard>
        </>
    );
}

export default HomeCard;