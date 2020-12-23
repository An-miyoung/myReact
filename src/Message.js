import React from "react";
import MessageStyle from "Message.module.scss";

class Message extends React.Component {
    render() {
        return (
            <div className={MessageStyle.wrapper}>
                Message Component
            </div>
        )
    }
}

export default Message;