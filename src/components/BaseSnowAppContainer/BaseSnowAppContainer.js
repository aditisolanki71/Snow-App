import { Row, Col } from 'antd';
import Header from '../Header/Header';
import { BaseSnowAppContainerStyles } from './BaseSnowAppContainer.styles';
import NotificationBar from '../RightSidebar/Notificationbar';
import Sidebar from '../Sidebar/Sidebar';
import React, { useState } from 'react';

const BaseSnowAppContainer = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    console.log('toggle sidebar clicked here');
    setShowSidebar(!showSidebar);
  };

  return (
    <BaseSnowAppContainerStyles>
      <div className="container">
        <Row>
          <Col xs={0} sm={0} md={0} lg={3} xl={3} className="container_left">
            {showSidebar && <Sidebar />}
          </Col>
          <Col
            xs={24}
            sm={24}
            md={18}
            lg={17}
            xl={17}
            className="container_content"
          >
            <div>
              <Row className="container_right_header">
                <Header
                  showSidebar={showSidebar}
                  toggleSidebar={toggleSidebar}
                />
              </Row>
              <div className="container_right_content">{children}</div>
            </div>

            <div className="container_footer_content">
              <div>@2023 Snow</div>
              <div className="footer_right">
                <div>About</div>
                <div>Support</div>
                <div>Contact Us</div>
              </div>
            </div>
          </Col>
          <Col xs={0} sm={0} md={0} lg={4} xl={4} className="container_right">
            <NotificationBar />
          </Col>
        </Row>
      </div>
    </BaseSnowAppContainerStyles>
  );
};

export default BaseSnowAppContainer;
