import { useState } from "react";

function Counter() {
    const [updateCount, setUpdateCount] = useState(0);

    function increament() {
        setUpdateCount(() => updateCount + 1);
    }

    function decreament() {
        setUpdateCount(() => updateCount <= 0 ? 0 : updateCount - 1)
    }

    console.log("RENDER");

    return (
        <div style={{ textAlign: "center" }}>
            <span>
                <button style={{ cursor: "pointer" }} onClick={decreament}>-</button>
                <h1>Counter: {updateCount}</h1>
                <button style={{ cursor: "pointer" }} onClick={increament}>+</button>
            </span>
        </div>
    )
}

export default Counter;