import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>404</h1>
      <div className="fw-semibold fs-6 text-gray-500 mb-7">
        The resource request could not be found on this server
      </div>

      {/* begin::Link */}
      <div className="mb-0">
        <Link to="/dashboard" className="btn btn-sm btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
