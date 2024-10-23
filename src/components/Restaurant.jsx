import Rescard from "./Rescard";
import resobj from "../utils/constants";
import Navbar from "./Navbar";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Restaurant() {
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
    setCurr(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const [definput, setDefinput] = useState("");
  const [curr, setCurr] = useState([]);
  const header = function (x) {
    return x.info.avgRating > 4;
  };
  const output = curr.filter(header);
  const header1 = function () {
    setCurr(output);
  };
  const filterlogic = () => {
    const output1 = curr.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(definput.toLowerCase())
    );
    setCurr(output1);
  };
  if (curr.length === 0) {
    return <Shimmer />;
  }
  console.log(curr);
  return (
    <div>
      <div className="m-4 p-4">
        <input
          type="text"
          placeholder="Enter the name of restaurant"
          onChange={(e) => {
            setDefinput(e.target.value);
          }}
          value={definput}
          className="mx-4 border-2 p-4 w-[30vw]"
        />
        <button
          onClick={filterlogic}
          className="hover:bg-slate-400 p-4 bg-gray-400"
        >
          Search
        </button>
      </div>
      <button className="" onClick={header1}>
        Top Rated Restaurants
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {curr.map((res, index) => {
          return (
            <Link key={res.info.id} to={`/restaurant/${res.info.id}`}>
              <Rescard details={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Restaurant;
