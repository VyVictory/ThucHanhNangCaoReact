function Hello() {
    const person = {
        name: 'Peter',
        theme: {
            backgroundColor: 'green',
            color: 'white'
        }
    };
    return (
        <div style={person.theme}>  

            <h1>Xin chào:{person.name} </h1>
            <div> Chúc bạn thành công với React</div>
        </div>
    )

};
function HelloPerson(props) {
    
    return (
        <h1>Xin chào bạn:{props.name}</h1>
    )
}
function HelloFull(){
	//vị trí đặt function
    const hiAll=()=>{
        alert("hello everyone")
    }
    const hiYou=(name)=>{
        alert("Hello "+ name)
    }

    return(
        <span>
            <button onClick={hiAll}>Hi All</button>
            <button onClick={(e) => hiYou('Peter')}>Hi you</button>
        </span>
    )
}

export {Hello,HelloPerson,HelloFull};
