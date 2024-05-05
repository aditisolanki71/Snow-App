import React from 'react';
import { Card, Button, Input, Divider, Checkbox } from 'antd';
import { GoogleOutlined, AppleFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Auth.scss';
import AuthHeader from '../../components/Authentication/AuthHeader';

const AuthPage = ({
  title,
  subheader,
  buttonLabel,
  buttonLink,
  isSignup,
  footerLink,
}) => {
  const navigate = useNavigate();

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className="signup-container">
      <AuthHeader />
      <div className="signup-header">
        <Card className="signup-card">
          <>
            <h1>{title}</h1>
            <h4 className="signup-subheader">Your Social Campaigns</h4>
            <div style={{ margin: '28px' }}>
              <div
                className="d-flex flex-wrap"
                style={{
                  margin: '5px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                <Button
                  style={{
                    marginRight: '20px',
                    marginBottom: '10px',
                  }}
                  icon={<GoogleOutlined />}
                >
                  {title} with Google
                </Button>
                <Button
                  style={{
                    marginRight: '20px',
                  }}
                  icon={<AppleFilled />}
                >
                  {title} with Apple
                </Button>
              </div>
              <Divider plain>
                <span class="words">Or with Email</span>
              </Divider>
              <Input
                style={{ marginBottom: '16px' }}
                placeholder="Email"
                value="adtsolanki22@gmail.com"
              />
              <Input type="password" placeholder="Password" value="Aditi@71" />

              {isSignup ? (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span class="signup-words">
                    Use 8 or more characters with a mix of letters, numbers &
                    symbols.
                  </span>
                  <Input
                    style={{ margin: '14px 0px' }}
                    type="password"
                    placeholder="Repeat Password"
                    value="Aditi@71"
                  />
                  <Checkbox
                    style={{ marginBottom: '14px', display: 'flex' }}
                    onChange={onChange}
                  >
                    I accept the term
                  </Checkbox>
                </div>
              ) : (
                <>
                  <p style={{ textAlign: 'right', color: '#95A4FC' }}>
                    <a href="/forgot-password">Forgot Password?</a>
                  </p>
                </>
              )}
              <Button
                style={{
                  width: '100%',
                  backgroundColor: 'black',
                  color: 'white',
                }}
                size="large"
                onClick={() => navigate(buttonLink)}
              >
                <span>{title}</span>
              </Button>
              <p style={{ color: 'rgba(0, 0, 0, 0.40)' }}>
                Not a Member yet?
                <a href={footerLink}>
                  <span style={{ color: '#95A4FC' }}> {buttonLabel} </span>
                </a>
              </p>
            </div>
          </>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;
