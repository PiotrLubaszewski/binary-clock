import React, { Fragment, useEffect, useState } from 'react';

const RegularClock = (props) => {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date())
    }

    useEffect(() => {
        const interval = setInterval(tick(), 100);
        return () => clearInterval(interval)
    }, [])


    return (<Fragment>
        <h1> {date.toLocaleTimeString()} </h1>
    </Fragment>)
}
export default RegularClock;