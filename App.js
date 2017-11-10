import React, {Component} from 'react';
import {
	View,
	Text,
  StyleSheet,
  StatusBar
} from 'react-native';


import moment, { diff } from 'moment';
import timer from 'moment-timer';
//import ReactMomentCountDown from 'react-moment-countdown'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'pink',
		justifyContent: 'center',
		alignItems: 'center',
	},
	timeText: {
		color: 'black',
		fontSize: 40,
	},
	dateText: {
		color: 'black',
		fontSize: 40,
  },
  status: {
    backgroundColor: '#FFFFFF50',
  }
})

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Date(),
			timeToLeave: new Date(2017, 10, 10, 19, 0, 0, 0),
      //timeRemaining: this.timeToLeave.getTime() - this.time.getTime()
		};
	}
	render() {
		setTimeout(() => {
			this.setState({
				time: new Date()
			});
		}, 1000);

		const timeRemaining = this.state.timeToLeave.getTime() - this.state.time.getTime();
		const mom = moment.duration(timeRemaining).toISOString();
		const hours = mom.slice(mom.indexOf('T') + 1, mom.indexOf('T') + 2);
		const minutes = mom.slice(mom.indexOf('H') + 1, mom.indexOf('T') + 3);
		const formatted = minutes
		return (
			<View style={styles.container}>
        <StatusBar style={styles.status} />
        <Text style={styles.dateText}>Current Time/Date:</Text>
				<Text style={styles.timeText}>{moment(this.state.time).format('LLLL')}</Text>
        <Text style={styles.dateText}>Time to Leave:</Text>
        <Text style={styles.timeText}>{moment(this.state.timeToLeave).format('LLLL')}</Text>
        <Text style={styles.dateText}>Time Remaining:</Text>
				<Text style={styles.timeText}>{mom}</Text>
			</View>
		)
	}
}
// eventTime = moment('27-11-2020 08:30:00', 'DD-MM-YYYY HH:mm:ss').unix(),
// currentTime = moment().unix(),
// diffTime = eventTime - currentTime,
// duration = moment.duration(diffTime * 1000, 'milliseconds'),