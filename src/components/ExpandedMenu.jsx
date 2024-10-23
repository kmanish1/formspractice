import { useState } from "react";

const ExpandedMenu=(props)=>{
    const [vis,setVis]=useState(false);
    const handleToggle=()=>{
        setVis(!vis);
    }
    return (
      <li key={props.index} onClick={handleToggle}>
        <p className="font-bold text-3xl p-3 m-2 border-b-2 border">
          {props.category.card.card.title + " ⧭"}
        </p>
        {vis&&<ul className="grid grid-cols-1 md:grid-cols-5">
          {props.category.card.card.itemCards.map((item, i) => {
            return (
              <li key={i} className="p-4 m-4 bg-gray-400 ">
                <h1 className="font-semibold text-2xl">
                  {item.card.info.name}
                </h1>
                <p className="font-semibold">
                  {item.card.info.price
                    ? item.card.info.price / 100 + " /-"
                    : item.card.info.defaultPrice / 100 + " /-"}
                </p>
                <p>{item.card.info.description}</p>
              </li>
            );
          })}
        </ul>}
      </li>
    );
}
export default ExpandedMenu;