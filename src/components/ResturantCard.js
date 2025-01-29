import {CDN_URL} from "../utils/constants"; //named import /export 
const ResturantCard= (props) => {
    const { resinfo }=props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime
      }=resinfo?.info; 
    return(
       <div className="res-card" style={{backgroundColor:"#d3d3d3"}}>
           <img className="res-logo"
            alt="res-logo" src={CDN_URL + cloudinaryImageId } />
           <h3>{name}</h3>
           <h5>{cuisines.join(",")}</h5>
           <h5>{avgRating} stars</h5>
           <h5>{costForTwo}</h5>
           <h5>{deliveryTime}</h5>
        </div>
    );
};

export default ResturantCard; 