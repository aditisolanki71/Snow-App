import { Col, Row } from 'antd';
import ProjectStatus from './ProjectStatus';
import ProjectTasks from './ProjectTasks';
import './ProjectStatusTasks.scss';

const ProjectStatusTasks = () => {
  return (
    <div data-testid="project-status-tasks">
      <Row className="project_status_tasks_container">
        <Col xs={23} sm={11} md={11} lg={5} xl={5} className="project_status">
          <ProjectStatus data-testid="project-status" />
        </Col>
        <Col xs={23} sm={11} md={11} lg={18} xl={18} className="project_tasks">
          <ProjectTasks data-testid="project-tasks" />
        </Col>
      </Row>
    </div>
  );
};

export default ProjectStatusTasks;
