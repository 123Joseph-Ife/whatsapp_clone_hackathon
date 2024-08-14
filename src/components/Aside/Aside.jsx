import React from "react";
import { Link } from "react-router-dom";

const Aside = ({ users }) => {
    return (
        <aside>
            <h2>Chats</h2>
            <div className="users">
                {users.map((user) => (
                    <Link
                        className="user"
                        to={`/messages/${user.id}`}
                        key={user.id}
                    >
                        <img src={user.image} />
                        <div className="txt">
                            <h4>{user.name}</h4>
                            <p>{user.lastMessage}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default Aside;
