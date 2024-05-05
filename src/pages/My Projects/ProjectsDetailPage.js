import { useState } from 'react';
import { Menu } from 'antd';
import UsersPage from './My Project Detail/UsersPage';

const ProjectsDetailPage = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('users');

  const handleMenuClick = (e) => {
    setSelectedMenuItem(e.key);
  };

  return (
    <>
      <div className="projects">
        <h3>My Projects</h3>
        <Menu
          mode="horizontal"
          selectedKeys={[selectedMenuItem]}
          onClick={handleMenuClick}
        >
          <Menu.Item key="overview">Overview</Menu.Item>
          <Menu.Item key="targets">Targets</Menu.Item>
          <Menu.Item key="budget">Budget</Menu.Item>
          <Menu.Item key="users">Users</Menu.Item>
          <Menu.Item key="files">Files</Menu.Item>
          <Menu.Item key="activity">Activity</Menu.Item>
          <Menu.Item key="settings">Settings</Menu.Item>
        </Menu>
        <div>
          {selectedMenuItem === 'overview' && <div>Overview</div>}
          {selectedMenuItem === 'targets' && <div>Targets</div>}
          {selectedMenuItem === 'budget' && <div>Budget</div>}
          {selectedMenuItem === 'users' && (
            <div>
              <UsersPage />
            </div>
          )}
          {selectedMenuItem === 'files' && <div>Files</div>}
          {selectedMenuItem === 'activity' && <div>Activities</div>}
          {selectedMenuItem === 'settings' && <div>Settings</div>}
        </div>
      </div>
    </>
  );
};

export default ProjectsDetailPage;
