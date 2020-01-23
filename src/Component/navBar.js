import React from 'react';



const NavBar = (props) => {
    const buttonDisabler = props.cartProduct.length > 0 ? "" : "disabled"
    console.log(props)
    return (
      <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="navbar-nav ml-auto">
                    <button 
                            onClick={props.gotoCart}
                            className= "btn btn-primary "
                            disabled={buttonDisabler}
                             >My Cart</button >
                </div>

          </nav>
      </React.Fragment>  
      );
}
 
export default NavBar;