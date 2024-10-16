const Card=(props)=>{
    return(
        <div>
            <h1>{props.details.title}</h1>
            <p>{props.details.description}</p>
        </div>
    )
}
const Card2=({title,description})=>{
    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
//props and destructuring on the fly examples
//config driven ui
//key warning
//for react to identify which item has changed,modified,added or removed it uses key. 
//it is used to optimize the rendering of the components.
//if key is not provided, all the components are re-rendered again and again but when key is provided, only that particular component is re-rendered.
//donot use index as a key and it is told by react team.

    //   <Navbar />;
    //   {
    //     allcards.map((card) => <Card details={card} key={i++} />);
    //   }

export default Card;
export {Card2};
