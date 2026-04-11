import { Header } from "../components/Header";
import './NotfoundPage.css';

export function NotfoundPage(){

  return (
     <>
     <title>404 Page Not Found</title>
     <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header />

      <div className="notfound-div">
        Page Not Found "Error 404!"⚆_⚆.
      </div>
     </>
  );
}