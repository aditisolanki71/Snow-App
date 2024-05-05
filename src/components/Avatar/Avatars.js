import { Avatar } from 'antd';

const Avatars = ({ img, alt, width, icon, size, shape, ...rest }) => {
  return (
    <Avatar
      src={img}
      alt={alt}
      icon={icon}
      size={size}
      shape={shape}
      onError={(e) => console.error('Image Error', e)}
    />
  );
};

export default Avatars;
