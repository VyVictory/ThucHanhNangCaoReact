
function Item(props) {
    return (
        <li>
            <a href={props.link}>
                {props.content}
            </a>
        </li>
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
            <Menu list={list} />
        </>

    )

}
export  default (  Header) ;

