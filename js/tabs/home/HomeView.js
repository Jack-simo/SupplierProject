import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default class HomeView extends Component {

    render() {

        return (

            <View style={this.styles.container}>

                <Text>this is HomeView</Text>

            </View>

        );
    }


    styles = StyleSheet.create({

        container: {

            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
        }

    });

}
