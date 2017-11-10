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
			time: moment(),
      timeToLeave: new Date(2017, 11, 10, 16, 0, 0, 0),
      timeRemaining: new Date(2017, 11, 10, 16, 0, 0, 0) - Date.now()
		};
	}
	render() {
		setTimeout(() => {
			this.setState({
				time: moment(),
        timeRemaining: new Date(2017, 11, 10, 16, 0, 0, 0) - Date.now(),
			});
    }, 1000);

		return (
			<View style={styles.container}>
        <StatusBar style={styles.status} />
        <Text style={styles.dateText}>Current Time/Date:</Text>
				<Text style={styles.timeText}>{this.state.time.format('LTS')}</Text>
        <Text style={styles.dateText}>Time to Leave:</Text>
        <Text style={styles.timeText}>{moment(this.state.timeToLeave).format('LTS')}</Text>
        <Text style={styles.dateText}>Time Remaining:</Text>
       
			</View>
		)
	}
}
// eventTime = moment('27-11-2020 08:30:00', 'DD-MM-YYYY HH:mm:ss').unix(),
// currentTime = moment().unix(),
// diffTime = eventTime - currentTime,
// duration = moment.duration(diffTime * 1000, 'milliseconds'),