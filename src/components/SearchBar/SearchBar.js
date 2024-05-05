import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import img1 from '../../assets/images/Header_images/Shortcut.svg';
import Avatars from '../Avatar/Avatars';

const SearchBar = () => {
  return (
    <Input
      addonBefore={<SearchOutlined />}
      placeholder="Search"
      addonAfter={<Avatars img={img1} alt="default" className="img" />}
    />
  );
};

export default SearchBar;
