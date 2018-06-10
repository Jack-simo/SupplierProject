import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default class OrderView extends Component {

    render() {

        return (

            <View style={this.styles.container}>

                <Text>this is OrderView</Text>

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