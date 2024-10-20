import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const RestaurantCard=()=>{
    const [data,setData]=useState(null);
    const [total,setTotal]=useState("");
    const {resID}=useParams();
    // const ans=resfId.resId;
    console.log(resID);

    useEffect(()=>{
        const dataFetch=async()=>{

            const data = await fetch(
            //   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
              `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resID}&catalog_qa=undefined&submitAction=ENTER`
            //   `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=613421&catalog_qa=undefined&submitAction=ENTER`
            );
            const json= await data.json();
            setTotal(json);
            console.log(json);
            const prefix = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
            setData(prefix);
        }
        dataFetch();
    },[])
    if(!data)return(
        <div>Loading....</div>
    )
    return (
      <div>
        <h1 className="text-center font-bold text-3xl my-3">
          {total.data.cards[2].card.card.info.name}
        </h1>
        <div className="flex justify-center items-center flex-wrap">
          <p className="px-4 mx-4 my-2 text-xl">
            {total.data.cards[2].card.card.info.costForTwoMessage}
          </p>
          <p className="px-4 mx-4 my-2 text-xl">
            {total.data.cards[2].card.card.info.cuisines.join(",")}
          </p>
          <p className="px-4 mx-4 my-2 text-xl">
            {total.data.cards[2].card.card.info.avgRating + "⭐"}
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {data.map((item, index) => {
            return (
              <li key={index} className="p-4 m-4 bg-gray-400">
                <h1 className="font-semibold text-2xl">
                  {item.card.info.name}
                </h1>
                <p>{item.card.info.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
}

export default RestaurantCard;