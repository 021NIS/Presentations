import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class HelloWorldApp extends Component {
	state = {
		data: {},
		isLoaded: false
	};

	handleClick = () => {
		fetch('https://facebook.github.io/react-native/movies.json').then(
			response => {
				if (response.status !== 200) {
					return;
				}

				response.json().then(data => {
					this.setState({
						data: data,
						isLoaded: true
					});
				});
			}
		);
	};

	render() {
		if (!this.state.isLoaded) {
			return (
				<View>
					<TouchableOpacity onPress={this.handleClick}>
						<Text>Give me movie!</Text>
					</TouchableOpacity>
				</View>
			);
		}

		return (
			<View style={{ flex: 1 }}>
				<View style={{ height: 120, backgroundColor: 'red' }}>
					<Text>{this.state.data.movies[0].title}</Text>
				</View>
			</View>
		);
	}
}
