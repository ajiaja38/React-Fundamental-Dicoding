import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { getAccessToken } from "../utils/network.data";

const RequireAuth = ({ redirectPath }) => {
  const token = getAccessToken();

  if (!token) {
    return <Navigate to={redirectPath} />;
  }

  return <Outlet />;
};

RequireAuth.propTypes = {
  redirectPath: PropTypes.string.isRequired,
};

export default RequireAuth;
