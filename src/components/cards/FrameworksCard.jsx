import FrameworksButton from "../buttons/FrameworksButton";
import { Link } from "react-router-dom";
import { StyledH2 } from "../header/Heading.styles";
import { StyledFrameworksCard, StyledLink } from "./StyledCard.styles";

function FrameworksCard() {
  return (
    <>
      <StyledFrameworksCard>
        <div>
          <StyledH2>JAVASCRIPT CA:</StyledH2>
        </div>
        <div>
          <ul>
            Build a frontend for the API and add the following:
            <li>Homepage</li>
            <p>
              Make a GET request to fetch a list of resources from your API.
            </p>
            <p>
              Create HTML for each item and display at least 3 properties for
              each.
            </p>
            <p>
              Each item should also display a button or icon. Clicking on this
              button should toggle the item in and out of an array stored in
              localStorage.
            </p>
            <p>
              There should be a text input on this page that filters the array
              of results on one of the properties.
            </p>
            <li>Favourites page</li>
            <p>
              This page should fetch the array of items stored in localStorage
              and display them or display a message that there are no items.
            </p>
            <p>
              There should be a "Clear all" button that clears localStorage (or
              just a specific key in localStorage) and reloads the display.
              Don´t reload the page, just redraw the HTML.
            </p>
          </ul>
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
