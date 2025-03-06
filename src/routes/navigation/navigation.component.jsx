import { Outlet ,Link} from "react-router"
import { Fragment } from "react";


const Navigation = () => {
    return(
        <Fragment   >
            <div className="navigation">
        <div>
            <div>
                <Link className ='nav-link' to ='/' >
                    Logo
                </Link>
            </div>
            <div className="links-container">
                <Link className ='nav-link' to ='/shop' >
                    Shop
                </Link>
            </div>
          {/* <h2>I am the Navigation Bar.</h2> */}
        </div>
        <Outlet />
      </div>

        </Fragment>                                

    );
};
  


  export default Navigation;