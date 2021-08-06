import { Avatar, Button, Icon, IconButton } from "@material-ui/core";
import AttachFile from "@material-ui/icons/AttachFile";
import DonutLarge from "@material-ui/icons/DonutLarge";
import MoreVert from "@material-ui/icons/MoreVert";
import React, { useState } from "react";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

const Chat = () => {
  const [message, setMessage] = useState("");

  const handleChange = (msg) => (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    setMessage("");
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_photo">
          <Avatar />
        </div>
        <div className="chat_details">
          <div className="chat_name font-weight-bold">Name</div>
          <div className="text-secondary">last seen...</div>
        </div>
        <div className="chat_actions">
          <Button>
            <DonutLarge />
          </Button>
          <Button>
            <AttachFile />
          </Button>
          <Button>
            <MoreVert />
          </Button>
        </div>
      </div>
      <div className="chat_body">
        <div className="my-3 d-flex px-2">
          <p className={true ? `chat_sender` : `chat_receiver`}>Hey</p>
        </div>
        <div className="my-3 d-flex px-2">
          <p className={false ? `chat_sender` : `chat_receiver`}>Hey</p>
        </div>
      </div>
      <div className="chat_footer py-2">
        <Button>
          <InsertEmoticonIcon />
        </Button>
        <form className="d-flex flex-grow-1">
          <input
            type="text"
            placeholder="Type a message"
            className="form-control flex-grow-1"
            value={message}
            onChange={handleChange("messsage")}
          />
          <Button onSubmit={sendMessage} type="submit">
            <SendRoundedIcon />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
