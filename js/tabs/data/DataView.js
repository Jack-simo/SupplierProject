import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default class DataView extends Component {

    render() {

        return (

            <View style={this.styles.container}>

                <Text>this is DataView</Text>

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