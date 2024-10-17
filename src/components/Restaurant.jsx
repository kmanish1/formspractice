import Rescard from "./Rescard";
import resobj from "../utils/constants";
import Navbar from "./Navbar";
import { useState } from "react";
function Restaurant() {
  const [curr, setCurr] = useState(resobj);
  const header = function (x) {
    return x.info.avgRating > 4;
  };
  const output = curr.filter(header);
  const header1 = function () {
    setCurr(output);
  };
  return (
    <div>
      <button className="" onClick={header1}>
        Top Rated Restaurants
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {curr.map((res, index) => {
          return <Rescard details={res} key={index} />;
        })}
      </div>
    </div>
  );
}
export default Restaurant;
