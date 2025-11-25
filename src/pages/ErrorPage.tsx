import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="container">
      <h1>Page not found!</h1>
      <Link to="/">Go back</Link>
    </div>
  );
};
