import ProjectStatusTasks from './ProjectStatusTasks';
import ProjectsCards from './ProjectsCards';
import ProjectChart from './ProjectChart';

const ProjectsPage = () => {
  return (
    <div style={{ margin: '29px' }}>
      <h3>Projects</h3>
      <ProjectsCards />
      <ProjectStatusTasks />
      <ProjectChart />
    </div>
  );
};

export default ProjectsPage;
