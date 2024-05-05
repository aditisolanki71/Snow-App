import { Row, Col } from 'antd';
import { MyProjectsCards } from '../../utils/helper';
import ProjectNameCard from './ProjectNameCard';
import './MyProjectName.scss';

const MyProjectName = () => {
  return (
    <div data-testid="my-project-name">
      <Row className="card_container">
        {MyProjectsCards?.map((project) => {
          return (
            <Col
              xs={23}
              sm={11}
              md={11}
              lg={11}
              xl={7}
              gutter="0"
              className="name_card"
            >
              <a href="/project-detail">
                <ProjectNameCard
                  projectName={project.projectName}
                  cardImg={project.cardImg}
                  projectDueDate={project.projectDueDate}
                  avatarImg={project.avatarImg}
                  status={project.status}
                  statusPercent={project.statusPercent}
                  statusColor={project.statusColor}
                  totalTask={project.totalTask}
                />
              </a>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default MyProjectName;
