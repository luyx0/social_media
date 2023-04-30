import "./message.css"
import {format} from "timeago.js";

function Message({message,own}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    className="messageImg"
                />
                <p className="messageText">
                    {message.text}
                </p>
            </div>

            <div className="messageBottom">
                {format(message.createdAt)}
            </div>
        </div>
    );
}

export default Message;