import ArrowIcon from '../../components/Icon/Projects/ArrowIcon';
import './ProjectCard.scss';

const ProjectCard = ({ text, number, color, children, isProductivity }) => {
  return (
    <>
      <div className="project_card_container">
        <div className="project_card_header">
          <div className="">{text}</div>
          <div className="">{children}</div>
        </div>
        <div className="card_text project_card_header">
          {number}
          {isProductivity ? (
            <span className="card_subtext">
              +1.48%
              <ArrowIcon />
            </span>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
