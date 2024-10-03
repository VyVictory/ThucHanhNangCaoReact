import { useState } from 'react';
function Car() {
    // Initialize state with useState hook
    const [state, setState] = useState({
        name: 'Default Name',
        color: 'green',
        year: 2024,
    });
    const [data, setData] = useState("2024");
    // Handle updating the year
    const SetYear = () => {
        setState({
            ...state,
            year: data
        });
        setData("");
    };

    return (
        <>


            <div>Show information of Car:</div>
            <div>Name: {state.name}</div>
            <div>Color: {state.color}</div>
            <div>Year: {state.year}</div>

            <div>
                Update Year of Car:
                <input
                    type="number"
                    value={data}
                    onInput={(e) => setData(e.target.value)}
                />
                <input
                    type="button"
                    value="Update Year"
                    onClick={SetYear}
                />
            </div>
        </>
    );
}

export default Car;
