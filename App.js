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
	StatusBar,
} from 'react-native';


import moment from "moment";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		justifyContent: 'center',
		alignItems: 'center',
	},
	timeText: {
		color: '#999999',
		fontSize: 150,
	},
	dateText: {
		color: '#999999',
		fontSize: 40,
	}
})

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: moment().format("LTS"),
			date: moment().format("LL")
		};
	}
	render() {
		setTimeout(() => {
			this.setState({
				time: moment().format("LTS"),
				date: moment().format("LL")
			});
		}, 1000);

		return (
			<View style={styles.container}>
				<StatusBar style={{backgroundColor: 'transparent'}} />
				<Text style={styles.timeText}>
					{this.state.time}
				</Text>
				<Text style={styles.dateText}>
					{this.state.date}
				</Text>
			</View>
		)
	}
}