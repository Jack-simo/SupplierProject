import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';


export default class UserInfoView extends Component {

    render() {

        return (

            <View style={this.styles.container}>


                <ScrollView style={this.styles.scrollView}>


                    <View style={this.styles.item}>

                        <Image style={this.styles.itemImage} source={require("./img/tab-icon/active.png")}/>

                        <Text style={this.styles.itemText}>联系我们</Text>

                        <Text style={{flex:1}}/>

                        <Image style={this.styles.itemArrow} source={require("./img/icon-arrow.png")}/>

                    </View>


                </ScrollView>

            </View>


        );
    }

    styles = StyleSheet.create({

        container: {

            flex: 1,

        },

        scrollView: {

            flex: 1,

        },

        item: {

            flex: 1,
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
<<<<<<< HEAD

        }
=======
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: "#fff",
        },

        itemImage: {

            height: 35,
            width: 35,

        },

        itemText: {

            fontSize: 14,
            includeFontPadding: false,
            paddingLeft: 7,
            color: "#000",

        },

        itemArrow: {

            width: 9,
            height:17,
        },

>>>>>>> 387faa235103f61a7eb7526f01642fa4e8a1333b

    });

}
