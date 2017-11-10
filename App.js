/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   Alert,
// } from 'react-native';


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// export default class App extends Component<{}> {
//   render() {
//     let date = new Date();
//     let dateString = date.getHours().toString() + ':' + date.getMinutes().toString();
//     return (
      
//       <View style={{height: 300}}>
//         <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//         <View style={{flex: 1, backgroundColor: 'skyblue'}} />
//         <View style={{flex: 1, backgroundColor: 'steelblue'}} />
//         <Text style={{fontSize: 45}}>{dateString}</Text>
//       </View>
      
//     );
//   }
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 45,
//     textAlign: 'center',
//     color: 'pink',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import React, {Component} from 'react';
import {
	View,
	Text,
  StyleSheet,
  StatusBar
} from 'react-native';


import moment, { diff } from 'moment';
import timer from 'moment-timer';
import ReactMomentCountDown from 'react-moment-countdown'

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
        <Text style={styles.timeText}>{moment.duration(this.state.timeRemaining).format('LTS')}</Text>
       
			</View>
		)
	}
}
// eventTime = moment('27-11-2020 08:30:00', 'DD-MM-YYYY HH:mm:ss').unix(),
// currentTime = moment().unix(),
// diffTime = eventTime - currentTime,
// duration = moment.duration(diffTime * 1000, 'milliseconds'),