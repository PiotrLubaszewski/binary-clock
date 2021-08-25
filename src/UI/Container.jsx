import React, { Fragment } from 'react';
import RegularClock from '../Clock/RegularClock';
import BinaryClock from '../Clock/BinaryClock';

const Container = props => <Fragment>
    <div>
        <RegularClock></RegularClock>
    </div>
    <div>
        <BinaryClock></BinaryClock>
    </div>
</Fragment>

export default Container;