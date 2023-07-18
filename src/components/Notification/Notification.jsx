import React from "react";
import { Notificat } from "./Notification.styled";

const Notification = ({text}) => {
    return (
        <Notificat>{text}</Notificat>
    )
}

export default Notification;