import React from 'react';
import { Table } from 'antd';
import { projectTasksColumns, projectTasksData } from '../../utils/helper';
import './ProjectTasks.scss';

const ProjectTasks = () => (
  <div className="responsive_table" data-testid="project-tasks">
    <h3>Tasks</h3>
    <Table
      columns={projectTasksColumns}
      dataSource={projectTasksData}
      pagination={false}
      bordered={false}
    />
  </div>
);
export default ProjectTasks;
