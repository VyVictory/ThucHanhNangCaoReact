import { useState, useEffect } from "react";

function Item(props) {
    return (
        <a className="h-full flex justify-center items-center px-2 border min-w-24" href={props.link}>
            <font style={{ "vertical-align": "inherit;" }}>
                <font style={{ "vertical-align": "inherit;" }}>
                    {props.content}
                </font>
            </font>
        </a>
    );
}

function Menu({ list }) {
    const listItems = list.map((item, index) => (
        <Item key={index} link={item.url} content={item.text} />
    ));

    return (
        <div className="h-full w-full flex">
            {listItems}
        </div>
    );
}

function Header() {
    const list = [
        { text: "Home", url: "/" },
        // { text: "About", url: "/about" },
        { text: "Product", url: "/products" },
        { text: "Groups", url: "/groups" },
        // { text: "Contact", url: "/contact" },
        { text: "Profile", url: "/profile" },
    ];

    const [username, setUsername] = useState('');

    useEffect(() => {
        // Get the username from localStorage when the component mounts
        const usernameStatus = localStorage.getItem('username');
        if (usernameStatus) {
            setUsername(usernameStatus);
        }
    }, []);

    return (
        <>
            <nav className="h-16 bg-slate-300 shadow-md w-full">
                <ul className="flex flex-row h-full">
                    <Menu list={list} />
                    <div className="h-full p-2 flex justify-center items-center min-w-24 float-end">
                        {username ? `Welcome, ${username}` : ""}
                        {username ? (
                            <a href="/logout" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
                                <button>
                                    Logout
                                </button>
                            </a>
                        ) : (
                            <a href="/login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                <button>
                                    Login
                                </button>
                            </a>
                        )}
                    </div>

                </ul>
            </nav >
        </>
    );
}

export default Header;
