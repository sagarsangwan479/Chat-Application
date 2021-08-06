import { Avatar, Button } from "@material-ui/core";
import React from "react";
import DonutLarge from "@material-ui/icons/DonutLarge";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Photo from "./download.jfif";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from "./SidebarChat";
import AddNewChat from "./AddNewChat";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Button>
          <Avatar src={Photo} />
        </Button>
        <div className="ml-auto">
          <Button>
            <DonutLarge />
          </Button>
          <Button>
            <AttachFileIcon />
          </Button>
          <Button>
            <MoreVertIcon />
          </Button>
        </div>
      </div>
      <div className="sidebar_search">
        <SearchIcon />
        <input type="text" className="form-control ml-1" placeholder="Search a chat" />
      </div>
      <div>
         <AddNewChat/>
         <SidebarChat/>          
         <SidebarChat/>          
         <SidebarChat/>          
         <SidebarChat/>          
      </div>
    </div>
  );
};

export default Sidebar;
