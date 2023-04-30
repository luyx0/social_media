import "./conversations.css"
import {useEffect, useState} from "react";
import axios from "axios";

function Conversations({conversation, currentUser}) {

    const[user, setUser] = useState(null);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() =>{
        const friendId = conversation.members.find((a) => a !== currentUser._id);

        const getUser = async () => {
            try{
                const res = await axios("/users?userId=" + friendId);
                setUser(res.data)
            }catch(e){
                console.log(e)
            }
        };
        getUser()
    },[currentUser,conversation])

    return (
        <div className="conversations">
            <img
                src={
                    user?.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
                className="conversationsImg"
            />
            <span className="conversationsName">{user?.username}</span>

        </div>
    );
}

export default Conversations;