import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Messages = ({ messages, users }) => {
    const { id } = useParams();
    const msgs = messages.find((message) => message.id.toString() === id);

    const findUser = (key) => {
        let data = users.find((user) => user.id.toString() === key);
        return data.name;
    };
    const nav = useNavigate()
    useEffect(() => {
      if (window.innerWidth < 800) {
        nav("/mobile")
      }
    }, [])

    return (
        <>
            {msgs && (
                <>
                    <main>
                        <div className="message-header">
                            <h2>{findUser(id)}</h2>
                        </div>
                        <div className="messages">
                            {msgs.chat.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`message ${msg.author}`}
                                >
                                    {msg.message}
                                </div>
                            ))}
                        </div>
                        <form>
                          <input type="text" />
                        </form>
                    </main>
                </>
            )}
        </>
    );
};

export default Messages;
