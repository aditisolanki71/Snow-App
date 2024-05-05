import AuthPage from './AuthPage';
import './LoginPage.scss';

const LoginPage = () => {
  return (
    <AuthPage
      title="Sign In"
      subheader="Your Social Campaigns"
      buttonLabel="Sign Up"
      buttonLink="/dashboard"
      footerLink="/signup"
    />
  );
};

export default LoginPage;
