import { Row, Col } from 'antd';
import ProjectCard from '../Projects/ProjectCard';
import { myProjectData } from '../../utils/helper';
import '../Projects/ProjectsCards.scss';

const generateProjectCard = (project) => {
  return (
    <Col
      key={project.text}
      xs={23}
      sm={11}
      md={11}
      lg={11}
      xl={7}
      gutter="0"
      className="card"
      style={{ backgroundColor: project.color }}
    >
      <ProjectCard
        text={project.text}
        number={project.number}
        color={project.color}
      >
        {project.icon}
      </ProjectCard>
    </Col>
  );
};

const MyProjectsCards = () => {
  return (
    <div data-testid="my-projects-cards">
      <Row className="card_container">
        {myProjectData.map((project) => generateProjectCard(project))}
      </Row>
    </div>
  );
};

export default MyProjectsCards;
