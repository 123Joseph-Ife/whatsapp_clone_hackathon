import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import Aside from "./components/Aside/Aside";
import First from "./Chats/First";
import Messages from "./Chats/Messages";
import { useEffect } from "react";
import Mobile from "./Mobile";
import ErrorPage from "./Chats/ErrorPage";

function App() {
    const users = [
        {
            id: 1,
            name: "delta5by5",
            image: "/images/image.png",
            lastMessage: "You bro im a boy",
            link: "/messages/1",
        },
        {
            id: 2,
            name: "delta5by5",
            image: "/images/image.png",
            lastMessage: "You bro im a boy",
            link: "/messages/2",
        },
        {
            id: 3,
            name: "delta5by5",
            image: "/images/image.png",
            lastMessage: "You bro im a boy",
            link: "/messages/3",
        },
        {
            id: 4,
            name: "delta5by5",
            image: "/images/image.png",
            lastMessage: "You bro im a boy",
            link: "/messages/4",
        },
        {
            id: 5,
            name: "delta5by5",
            image: "/images/image.png",
            lastMessage: "You bro im a boy",
            link: "/messages/5",
        },
        {
            id: 6,
            name: "delta5by5",
            image: "/images/image.png",
            lastMessage: "You bro im a boy",
            link: "/messages/6",
        },
        {
            id: 7,
            name: "delta5by5",
            image: "/images/image.png",
            lastMessage: "You bro im a boy",
            link: "/messages/6",
        },
        {
            id: 8,
            name: "delta5by5",
            image: "/images/image.png",
            lastMessage: "You bro im a boy",
            link: "/messages/6",
        },
    ];
    const messages = [
        {
            id: 1,
            chat: [
                { id: 1, message: "Yo bro how you doing", author: "you" },
                {
                    id: 2,
                    message: "I'm fine, what about you",
                    author: "opposite",
                },
                { id: 3, message: "Hows school", author: "you" },
                { id: 4, message: "School is fine", author: "opposite" },
                { id: 5, message: "Have a nice day", author: "you" },
                { id: 6, message: "Have a nice day", author: "opposite" },
                { id: 7, message: "Have a nice day", author: "you" },
                { id: 8, message: "Have a nice day", author: "opposite" },
                { id: 9, message: "Have a nice day", author: "you" },
                { id: 10, message: "Have a nice day", author: "opposite" },
                { id: 11, message: "Have a nice day", author: "you" },
            ],
        },

        {
            id: 2,
            chat: [
                { id: 1, message: "Yo bro how you doing", author: "you" },
                {
                    id: 2,
                    message: "I'm fine, what about you",
                    author: "opposite",
                },
                { id: 3, message: "Hows school", author: "you" },
                { id: 4, message: "School is fine", author: "opposite" },
                { id: 5, message: "Have a nice day", author: "you" },
                { id: 6, message: "Have a nice day", author: "opposite" },
                { id: 7, message: "Have a nice day", author: "you" },
                { id: 8, message: "Have a nice day", author: "opposite" },
                { id: 9, message: "Have a nice day", author: "you" },
                { id: 10, message: "Have a nice day", author: "opposite" },
                { id: 11, message: "Have a nice day", author: "you" },
            ],
        },

        {
            id: 3,
            chat: [
                { id: 1, message: "Yo bro how you doing", author: "you" },
                {
                    id: 2,
                    message: "I'm fine, what about you",
                    author: "opposite",
                },
                { id: 3, message: "Hows school", author: "you" },
                { id: 4, message: "School is fine", author: "opposite" },
                { id: 5, message: "Have a nice day", author: "you" },
                { id: 6, message: "Have a nice day", author: "opposite" },
                { id: 7, message: "Have a nice day", author: "you" },
                { id: 8, message: "Have a nice day", author: "opposite" },
                { id: 9, message: "Have a nice day", author: "you" },
                { id: 10, message: "Have a nice day", author: "opposite" },
                { id: 11, message: "Have a nice day", author: "you" },
            ],
        },

        {
            id: 4,
            chat: [
                { id: 1, message: "Yo bro how you doing", author: "you" },
                {
                    id: 2,
                    message: "I'm fine, what about you",
                    author: "opposite",
                },
                { id: 3, message: "Hows school", author: "you" },
                { id: 4, message: "School is fine", author: "opposite" },
                { id: 5, message: "Have a nice day", author: "you" },
                { id: 6, message: "Have a nice day", author: "opposite" },
                { id: 7, message: "Have a nice day", author: "you" },
                { id: 8, message: "Have a nice day", author: "opposite" },
                { id: 9, message: "Have a nice day", author: "you" },
                { id: 10, message: "Have a nice day", author: "opposite" },
                { id: 11, message: "Have a nice day", author: "you" },
            ],
        },

        {
            id: 5,
            chat: [
                { id: 1, message: "Yo bro how you doing", author: "you" },
                {
                    id: 2,
                    message: "I'm fine, what about you",
                    author: "opposite",
                },
                { id: 3, message: "Hows school", author: "you" },
                { id: 4, message: "School is fine", author: "opposite" },
                { id: 5, message: "Have a nice day", author: "you" },
                { id: 6, message: "Have a nice day", author: "opposite" },
                { id: 7, message: "Have a nice day", author: "you" },
                { id: 8, message: "Have a nice day", author: "opposite" },
                { id: 9, message: "Have a nice day", author: "you" },
                { id: 10, message: "Have a nice day", author: "opposite" },
                { id: 11, message: "Have a nice day", author: "you" },
            ],
        },

        {
            id: 6,
            chat: [
                { id: 1, message: "Yo bro how you doing", author: "you" },
                {
                    id: 2,
                    message: "I'm fine, what about you",
                    author: "opposite",
                },
                { id: 3, message: "Hows school", author: "you" },
                { id: 4, message: "School is fine", author: "opposite" },
                { id: 5, message: "Have a nice day", author: "you" },
                { id: 6, message: "Have a nice day", author: "opposite" },
                { id: 7, message: "Have a nice day", author: "you" },
                { id: 8, message: "Have a nice day", author: "opposite" },
                { id: 9, message: "Have a nice day", author: "you" },
                { id: 10, message: "Have a nice day", author: "opposite" },
                { id: 11, message: "Have a nice day", author: "you" },
            ],
        },

        {
            id: 7,
            chat: [
                { id: 1, message: "Yo bro how you doing", author: "you" },
                {
                    id: 2,
                    message: "I'm fine, what about you",
                    author: "opposite",
                },
                { id: 3, message: "Hows school", author: "you" },
                { id: 4, message: "School is fine", author: "opposite" },
                { id: 5, message: "Have a nice day", author: "you" },
                { id: 6, message: "Have a nice day", author: "opposite" },
                { id: 7, message: "Have a nice day", author: "you" },
                { id: 8, message: "Have a nice day", author: "opposite" },
                { id: 9, message: "Have a nice day", author: "you" },
                { id: 10, message: "Have a nice day", author: "opposite" },
                { id: 11, message: "Have a nice day", author: "you" },
            ],
        },
        {
            id: 8,
            chat: [
                { id: 1, message: "Yo bro how you doing", author: "you" },
                {
                    id: 2,
                    message: "I'm fine, what about you",
                    author: "opposite",
                },
                { id: 3, message: "Hows school", author: "you" },
                { id: 4, message: "School is fine", author: "opposite" },
                { id: 5, message: "Have a nice day", author: "you" },
                { id: 6, message: "Have a nice day", author: "opposite" },
                { id: 7, message: "Have a nice day", author: "you" },
                { id: 8, message: "Have a nice day", author: "opposite" },
                { id: 9, message: "Have a nice day", author: "you" },
                { id: 10, message: "Have a nice day", author: "opposite" },
                { id: 11, message: "Have a nice day", author: "you" },
            ],
        },
    ];

    if (window.innerWidth > 750) {
        return (
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="/" element={<First />} />
                        <Route
                            path="/messages/:id"
                            element={
                                <Messages messages={messages} users={users} />
                            }
                        />
                        <Route path="/mobile" element={<Mobile />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                    <Aside users={users} />
                </Router>
            </div>
        );
    } else {
        return (
            <>
                <Mobile />
            </>
        );
    }
}

export default App;
