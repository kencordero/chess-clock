import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';

const timeLimit = 15;

export default class ChessClock extends Component {
    constructor() {
        super();
        this.state = {
            timer1: timeLimit * 60,
            timer2: timeLimit * 60
        }
    }

    formatTime = (timer) => {
        const m = Math.floor(timer / 60);
        const s = timer % 60;
        return (m < 10 ? "0" + m : m) + ":" +
            (s < 10 ? "0" + s : s);
    };
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    }
});