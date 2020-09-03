import React from "react";
import c from './Message.module.css'

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: MessageDataType) {
    return (
        <div className={c.message}>
            <div className={c.ava}>
                <img src={props.avatar} />
            </div>
            <div className={c.textBox}>
                <div className={c.name}>
                    {props.name}
                </div>
                <div className={c.text}>
                    {props.message}
                </div>
                <div className={c.time}>
                    {props.time}
                </div>
            </div>
        </div>
    );
}
