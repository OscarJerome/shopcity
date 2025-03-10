import { Fragment } from "react";
import { Outlet, Link } from "react-router"
import "./navigation.styles.scss";
// import {ReactComponent as ShopLogo} from "../../assets/shopify.svg";

const Navigation = () => {
    return(
      <Fragment>
        <div className="navigation" >
            <Link className="logo-container" to= "/">
                ShopCity
            </Link>
           

            <div className="nav-links-container">
                <Link className="nav-link" to = "/shop">
                Shop
                </Link>

                <Link className="nav-link" to = "/signIn">
                Sign In
                </Link>
            </div>
         
        </div>
        <Outlet /> 
      </Fragment>
    )
  }

  export default Navigation;