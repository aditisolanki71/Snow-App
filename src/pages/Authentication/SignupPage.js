import AuthPage from './AuthPage';
import './LoginPage.scss';

const SignupPage = () => {
  return (
    <AuthPage
      title="Sign Up"
      subheader="Your Social Campaigns"
      buttonLabel="Sign In"
      buttonLink="/"
      footerLink="/"
      isSignup
    />
  );
};

export default SignupPage;
