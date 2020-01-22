import React, { useState } from 'react';

const Card = (props) => {
    const {img, title, info, clickHandler} =  props
    const [isShown, setIsShown, modalShow, setModalShow] = useState(false);
    
    return (   
    <React.Fragment>
        <div 
            onMouseEnter={()=>setIsShown(true)}   
            onMouseLeave={()=>setIsShown(false)}   
            className="card mb-4 shadow-sm">

            <img  className="card-img-top" src={img} alt={title} />
            <div className="card-body">
                <p className="card-text">{info}</p>
            </div>
            {isShown && (
                <div>
                    <button 
                    className="btn btn-primary"
                    onClick={()=>clickHandler()}>Add To Cart</button>
                </div>
            )}
        </div>
    </React.Fragment>);
}
 
export default Card;