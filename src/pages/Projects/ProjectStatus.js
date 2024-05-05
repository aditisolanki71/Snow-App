import ProjectStatusLogo from './ProjectStatusLogo';
import Dot from '../../components/Dot/Dot';
import './ProjectStatus.scss';

const ProjectStatus = () => {
  return (
    <div className="project_status_container" data-testid="project-status">
      <h3 className="project_status_header">Project status</h3>
      <ProjectStatusLogo />
      <div className="project_content">
        <div className="project_content_container">
          <div className="project_content_text">
            <Dot color="black" />
            completed
          </div>
          <div className="project_content_text">
            <Dot color="green" />
            In Progress
          </div>
          <div className="project_content_text">
            <Dot color="grey" />
            Behind
          </div>
        </div>
        <div className="project_content_container">
          <div className="project_content_text">67.6%</div>
          <div className="project_content_text">26.4%</div>
          <div className="project_content_text">6%</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatus;
