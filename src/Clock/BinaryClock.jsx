import React, { Fragment, useEffect, useState } from 'react';
import parseNumToBin from '../Helper/parseNumToBin';

const BinaryClock = props => {
    const [currentTime, setCurrentTime] = useState('000000:000000:000000');

    const transformValueForPrint = (value) => parseNumToBin(value);

    const createTimeString = (hours, mins, secs) => transformValueForPrint(hours) + ":"
        + transformValueForPrint(mins) + ":"
        + transformValueForPrint(secs);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();

            const currentHours = currentDate.getHours();
            const currentMinutes = currentDate.getMinutes();
            const currentSeconds = currentDate.getSeconds();

            const currentTime = createTimeString(currentHours, currentMinutes, currentSeconds)

            setCurrentTime(currentTime)
        }, 100);

        return () => clearInterval(interval)
    }, [])

    return (<Fragment>
        <h1>
            {
                currentTime.split(':').map((segment, index) => {
                    return <div key={'segment_' + index} style={{ display: 'inline-block'}}>
                        {segment.split('').map((num, index) => {
                            return (
                                <div key={'segment_num' + index} style={{ display: 'inline-block', margin: '5px' }}>
                                    {num > 0 ? <div style={{ backgroundColor: 'blue', width: '25px', height: '50px' }}> </div>
                                        : <div style={{ backgroundColor: 'grey', width: '25px', height: '50px' }}> </div>
                                    }
                                </div>
                            )
                        })}
                        <div style={{ display: 'inline-block', margin: '10px' }}></div>
                    </div>
                })
            }
        </h1>
    </Fragment>)
}
export default BinaryClock;