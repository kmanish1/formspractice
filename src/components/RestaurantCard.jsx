import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExpandedMenu from "./ExpandedMenu";

const RestaurantCard = () => {
  // const [data,setData]=useState(null);
  const [fullMenu, setFullMenu] = useState(null);
  const [temp, setTemp] = useState(null);
  const [total, setTotal] = useState("");
  const { resID } = useParams();
  const [exp,setExp]=useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=${resID}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      setTotal(json);
      setFullMenu(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    };
    dataFetch();
  }, []);
  useEffect(() => {
    if (fullMenu) {
      const filterOthers = (x) => {
        return (
          x.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      };
      const allMenu = fullMenu.filter(filterOthers);
      setTemp(allMenu);
    }
  }, [fullMenu]);

  if (!temp) return <div>Loading....</div>;
  console.log(temp);

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

      <ul>
        {temp.map((category, index) => {
          return (
            <ExpandedMenu category={category} key={index} vis={exp==index?true:false} setExp={()=>{setExp(index)}}/>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantCard;
