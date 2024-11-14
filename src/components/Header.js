
function Item(props) {
    return (
        <>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href={props.link}>
                <font style={{ "vertical-align": "inherit;" }}>
                    <font style={{ "vertical-align": "inherit;" }}>
                        {props.content}
                    </font>
                </font>
            </a>
        </>


    )
}
function Menu({ list }) {
    const listItems =
        list.map((item, index) => (
            <Item key={index} link={item.url} content={item.text} />
        )
        );
    return (
        <ul >
            {listItems}
        </ul>
    )

}
function Header() {
    const list = [
        { text: "Home", url: "/" },
        { text: "About", url: "/about" },
        { text: "Contact", url: "/contact" },
    ];
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                {/* <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        {/* <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li> */}
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><font style={{ "vertical-align": "inherit;" }}><font style={{ "vertical-align": "inherit;" }}>
                                danh sách trang
                            </font></font></a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Menu list={list} />
                            </div>
                        </li>
                        <li className="w-full">
                            <a href="/login">
                                <button>Login</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>

    )

}
export default (Header);

