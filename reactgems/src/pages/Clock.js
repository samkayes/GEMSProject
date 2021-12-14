import React, { useEffect, useState } from "react";

function Clock() {
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date=new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    },[]);

    return <h3>{clockState}</h3>;

}

export default Clock;