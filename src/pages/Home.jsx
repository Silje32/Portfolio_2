import ExamCard from "../components/cards/ExamCard";
import ProjectCard from "../components/cards/ProjectCard";
import FrameworksCard from "../components/cards/FrameworksCard";
import { StyledCard } from "../components/cards/StyledCard.styles"

function Home() {

    return (
       <>
         <StyledCard>
             <ExamCard />
             <ProjectCard />
             <FrameworksCard />
         </StyledCard>
       </>
    );       
}

export default Home;  