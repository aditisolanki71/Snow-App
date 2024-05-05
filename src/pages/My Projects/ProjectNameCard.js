import './ProjectNameCard.scss';
import card2 from './card2.png';
import Avatars from '../../components/Avatar/Avatars';
import contacts1 from '../../assets/images/right_sidebar_images/Female15.svg';
import { Progress } from 'antd';
import Dot from '../../components/Dot/Dot';

const ProjectNameCard = ({
  projectName,
  projectDueDate,
  status,
  statusPercent,
  totalTask,
  avatarImg,
  cardImg,
  statusColor,
}) => {
  console.log('color', projectName, 'img', cardImg);
  return (
    <>
      <div className="project_name_container">
        <div className="project_name_header">
          <h3>{projectName}</h3>
          <span className="project_due_time">{projectDueDate}</span>
        </div>
        <div>
          <img src={cardImg} alt="card img" />
        </div>
      </div>
      <div className="project_name_container">
        <div>
          <Avatars img={avatarImg} />
        </div>
        <div
          style={{ color: statusColor, display: 'flex', alignItems: 'center' }}
        >
          <Dot color={statusColor} />
          {status}
        </div>
      </div>
      <Progress
        percent={statusPercent}
        strokeColor={statusColor}
        showInfo={false}
      />
      <div className="project_name_container">
        <div>
          {totalTask} <span className="project_task_color">Total Tasks</span>
        </div>
        <div>{statusPercent}%</div>
      </div>
    </>
  );
};

export default ProjectNameCard;
