import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
        <p>
          <Link to="/">Back Home</Link>
        </p>
      </main>
    </>
  );
}

export default ErrorPage;
