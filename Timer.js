import React from 'react';
import { Stylesheet, Text } from 'react-native';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: startTime
        }
    }

    render() {
        return <Text>startTime</Text>
    }
}

const styles = Stylesheet.create({
    text: {
        flex: .5,
        fontFamily: Platform.OS === 'ios' ? 'Futura-CondensedMedium' : 'sans-serif-thin',
        fontSize: 160
    }
});