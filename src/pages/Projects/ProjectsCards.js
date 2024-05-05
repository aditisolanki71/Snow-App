import { Row, Col } from 'antd';
import ProjectCard from './ProjectCard';
import { projectDashboardData } from '../../utils/helper';
import './ProjectsCards.scss';

const ProjectsCards = () => {
  return (
    <Row
      data-testid="projects-cards"
      gutter={[16, 16]}
      className="card_container"
    >
      {projectDashboardData.map((project, index) => (
        <Col
          key={index}
          xs={23}
          sm={11}
          md={11}
          lg={11}
          xl={5}
          className="card"
          style={{ backgroundColor: project.color }}
        >
          <ProjectCard
            text={project.text}
            number={project.number}
            color={project.color}
            isProductivity={project.isProductivity}
          >
            {project.icon}
          </ProjectCard>
        </Col>
      ))}
    </Row>
  );
};

export default ProjectsCards;
