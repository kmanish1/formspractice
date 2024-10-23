import { useContext } from "react"
import UserContext from "../utils/UserContext"

const About=()=>{
    const userdata=useContext(UserContext);
    return(
        <div>{userdata}</div>
    )
}