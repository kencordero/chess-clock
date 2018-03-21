import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Constants} from 'expo';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isTimerOneActive: true,
            timer1: 10 * 60,
            timer2: 10 * 60
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.runTimer, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    runTimer = () => {
        if (this.state.isTimerOneActive && this.state.timer1 > 0) {
            this.setState(prevState => ({
                timer1: prevState.timer1 - 1
            }));
        } else if (this.state.timer2 > 0) {
            this.setState(prevState => ({
                timer2: prevState.timer2 - 1
            }));
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.timerButton} onPress={() => {if (!this.state.isTimerOneActive) this.setState(() => ({isTimerOneActive: true }))}}>
                    <Text style={styles.text2}>{this.formatTime(this.state.timer2)}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.timerButton} onPress={() => {if (this.state.isTimerOneActive) this.setState(() => ({isTimerOneActive: false }))}}>
                    <Text style={styles.text1}>{this.formatTime(this.state.timer1)}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    formatTime = (timer) => {
        const m = Math.floor(timer / 60);
        const s = timer % 60;
        return (m < 10 ? `0${m}` : m) + ':' +
            (s < 10 ? `0${s}` : s);
    };
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        borderWidth: 0,
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    timerButton: {
        flex: .5,
    },
    text1: {
        fontFamily : Platform.OS === 'ios' ? 'Futura-CondensedMedium' : 'sans-serif-thin',
        fontSize: 160
    },
    text2: {
        fontFamily : Platform.OS === 'ios' ? 'Futura-CondensedMedium' : 'sans-serif-thin',
        fontSize: 160,
        transform: [{ rotate: '180deg'}],
        backgroundColor: 'black',
        color: 'white',
        alignItems: 'stretch'
    }
});
