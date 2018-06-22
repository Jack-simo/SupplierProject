import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';


export default class LoginView extends Component {


    render() {

        return (

            <View style={{backgroundColor: "#393E41", }}>


                <View style={{height: 48,flexDirection: 'row', justifyContent: 'center',alignItems:'center'}}>

                    <Image style={{width: 20,height:23,position:'absolute',left:10}} source={require("../common/img/icon-navigator-back.png")}/>

                    <Text style={{fontSize:20, color:"#fff"}}>登录</Text>
                </View>



                <View style={{flexDirection:'column',alignItems:'center'}}>

                    <Image style={{width: 92,height:84,marginTop:35,marginBottom:28}} source={require("../common/img/icon-logo1.png")}/>

                </View>

            </View>

        );
    };


}

