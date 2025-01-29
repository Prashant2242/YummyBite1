//Body container 
import ResturantCard from "./ResturantCard";
import {useState , useEffect} from "react"; //named import
import Shimmer from "./Shimmer";

const Body=()=>{
    //local state variable -support powerful variable    
    const [listOfRestaurants,setListOfRestraunt]=useState([]);
    const [filteredRestaurant,setfilteredRestaurant]=useState([]);

    const[searchText,setsearchText]= useState(" ");
       
    useEffect(()=>{
      fetchData();  
    },[]);

    const fetchData=async ()=>{
        const data= await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7630356&lng=76.6528225&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json=await data.json();
        console.log(json);

        //Optional chaining
        setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    /*Conditionl render   
    if (listOfRestaurants.length===0){
        return <Shimmer/>
    }*/

    return listOfRestaurants.length===0 ? (           //ternary operator
        <Shimmer/>
        ): ( 
        <div className="body"> 
            <div className="filters">
                <div className="search">
                    <input type="text" className="search-Box" value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}
                    />
                    <button onClick={()=>{
                        console.log(searchText);
                        
                        const filteredRestaurant=listOfRestaurants.filter
                     ((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                     setfilteredRestaurant(filteredRestaurant);


                    }}>Search</button>
                </div>
                <button className="filter-btn"
                onClick={()=>{
                    //filter logic here
                    const filteredList=listOfRestaurants.filter ( 
                        (res)=>res.info.avgRating>4.5
                    );
                    setListOfRestraunt(filteredList)
                }}
                >
                    Top Rated Resturant </button>
            </div>
            <div className="res-container">
             {
               filteredRestaurant .map((restaurant)=>(<ResturantCard key={restaurant.info.id} resinfo={restaurant}/>
               ))} 
                       
            </div>
        </div>
    );
};

export default Body;
