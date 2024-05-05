import React from 'react';
import Avatars from '../Avatar/Avatars';
import './Notificationbar.scss';
import {
  activitiesData,
  contactsData,
  notificationsData,
} from '../../utils/helper';

const NotificationBar = () => {
  return (
    <div className="rightsidebar_container">
      <div className="notifications_container">
        <span className="rightsidenbar_header">Notifications</span>
        <div className="notifications">
          {notificationsData.map((item, index) => (
            <div key={index} className="notification_container">
              <div>{item.icon}</div>
              <div className="notification_content">
                <span className="notification_content_text">{item.text}</span>
                <span className="notification_content_time">just now</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="notifications_container">
        <span className="rightsidenbar_header">Activities</span>
        <div className="notifications">
          {activitiesData.map((item, index) => (
            <div key={index} className="notification_container">
              <div>
                <Avatars img={item.avatar} />
              </div>
              <div className="notification_content">
                <span className="notification_content_text">{item.text}</span>
                <span className="notification_content_time">just now</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="notifications_container">
        <span className="rightsidenbar_header">Contacts</span>
        <div className="notifications">
          {contactsData.map((item, index) => (
            <div key={index} className="notification_container">
              <div>{item.icon}</div>
              <div className="notification_content">
                <span className="notification_content_text">{item.text}</span>
                <span className="notification_content_time">just now</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
