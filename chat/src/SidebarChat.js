import React from 'react'
import { Link } from 'react-router-dom';

const SidebarChat = () => {


    return (
        <div className="sidebar_chat border-bottom border-1 px-4 py-2">
            <Link to="/chat" className="text-decoration-none text-dark">
            <div className="contact_name font-weight-bold">
                Chat 1
            </div>
            <div className="">
                hey
            </div>
            </Link>
        </div>
    )
}

export default SidebarChat;
