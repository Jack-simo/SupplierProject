import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default class UserInfoView extends Component {

    render() {

        return (

            <View style={this.styles.container}>

                <Text>this is UserInfoView</Text>

            </View>

        );
    }

    styles = StyleSheet.create({

        container: {

            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',

        }

    });

}
