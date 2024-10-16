function Rescard(props){
    return (
      <div className="border-2 border-white hover:border-gray-700 m-4 p-4 rounded-lg flex flex-col items-center justify-evenly text-center">
        <img
          className="w-[100vw] h-[40vh] object-cover rounded-lg"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.details.info.cloudinaryImageId}`}
          width="100%"
          height="100%"
        />
        <h1 className="font-semibold text-2xl">{props.details.info.name}</h1>
        <div className="">
          <p>{props.details.info.avgRating}⭐</p>
          <p>{props.details.info.sla.slaString}</p>
        </div>
        <h3>{props.details.info.cuisines[0]}</h3>
      </div>
    );
}
export default Rescard;