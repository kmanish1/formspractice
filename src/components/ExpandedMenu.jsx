import { useState } from "react";
import { useDispatch } from "react-redux";
import { additem } from "../utils/cartSlice";

const ExpandedMenu=(props)=>{
    const handleClick=()=>{
        props.setExp();
    }
    const vis=props.vis;
    const dispatch=useDispatch();
    const addtoCart=()=>{
      dispatch(additem(props.category.card.card));
    }
    
    return (
      <li key={props.index} onClick={handleClick}>
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
                <button onClick={addtoCart}>Add +</button>
              </li>
            );
          })}
        </ul>}
      </li>
    );
}
export default ExpandedMenu;