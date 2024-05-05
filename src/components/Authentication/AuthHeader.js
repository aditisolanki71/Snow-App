import { Row, Col, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LogoImg } from '../../assets/images/Logo.svg';
import './AuthHeader.scss';
import BaseButton from '../Button/Button';

const AuthHeader = () => {
  const authHeaderItems = [
    'Product',
    'Solutions',
    'Resources',
    'Download',
    'Pricing',
  ].map((key) => ({
    key,
    label: key,
  }));
  const navigate = useNavigate();
  return (
    <>
      <Row className="auth_header_container">
        <Col xs={7} md={8} xl={2}>
          <div style={{ textAlign: 'left' }}>
            <LogoImg data-testid="logo" />
          </div>
        </Col>
        <Col xs={20} md={8} xl={10} className="custom_menu">
          <Menu
            mode="horizontal"
            style={{ backgroundColor: '#F7F9FB' }}
            items={authHeaderItems}
          />
        </Col>
        <Col xs={12} md={8} xl={3} className="auth_action_button">
          <BaseButton onClick={() => navigate('/signup')} type="text">
            Sign In
          </BaseButton>
          <BaseButton onClick={() => navigate('/')} type="text">
            Login
          </BaseButton>
        </Col>
      </Row>
    </>
  );
};

export default AuthHeader;
