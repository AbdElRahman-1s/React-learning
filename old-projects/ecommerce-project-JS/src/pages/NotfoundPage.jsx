import { Header } from "../components/Header";
import './NotfoundPage.css';

export function NotfoundPage({cart}){

  return (
     <>
     <title>404 Page Not Found</title>
     <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart} />

      <div className="notfound-div">
        Page Not Found "Error 404!"⚆_⚆.
      </div>
     </>
  );
}