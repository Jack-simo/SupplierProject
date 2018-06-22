import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableHighlight,
} from 'react-native';


var navigation = null;

export default class UserInfoView extends Component {

    constructor(props) {
        super(props);
        navigation = this.props.navigation;
    }

    render() {

        // const { navigate } = this.props.navigation;

        return (

            <View style={this.styles.container}>


                <View style={{
                    height: 48,
                    backgroundColor: "#3192ff",
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>

                    <Text style={{fontSize: 18, color: "#fff"}}>用户中心</Text>

                    <Image style={{width: 24, height: 24, position: 'absolute', right: 12}}
                           source={require("./img/icon-setting.png")}/>

                </View>

                <ScrollView style={this.styles.scrollView}>

                    <View style={{
                        flex: 1,
                        height: 130,
                        backgroundColor: "#3192ff",
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>

                        <Image style={{width: 85, height: 85, borderRadius: 12, marginLeft: 35}}
                               source={require("./img/icon-head.png")}/>


                        <View style={{marginLeft: 24, marginRight: 16}}>

                            <View style={{flexDirection: 'row', alignItems: 'center'}}>

                                <Text style={{fontSize: 17, color: "#fff"}} numberOfLines={2}>未登录</Text>

                                <Image style={{width: 61, height: 21, marginLeft: 10, marginTop: 4}}
                                       source={require("./img/icon-chance-provider.png")}/>

                            </View>

                            <Text style={{fontSize: 15, color: "#fff", marginTop: 5}}
                                  numberOfLines={2}>用户账号：15259125912</Text>

                            <Text style={{fontSize: 15, color: "#fff", marginTop: 5}}>供应商编码：N00412</Text>

                        </View>

                    </View>


                    <View style={{flex: 1, height: 40, flexDirection: 'row', alignItems: 'center'}}>


                        <View style={{width: 3, height: 16, backgroundColor: "#3192ff"}}/>

                        <Text style={{
                            fontSize: 14,
                            color: "#383838",
                            paddingLeft: 9,
                            includeFontPadding: false
                        }}>关键指标</Text>

                    </View>


                    <View style={this.styles.kpiContainer}>

                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            backgroundColor: "#ff0000",
                            justifyContent: 'center',
                            marginLeft: 10
                        }}>

                            <Text style={{fontSize: 15, color: "#fff", includeFontPadding: false}}>0</Text>

                            <Text style={{
                                fontSize: 15,
                                color: "#fff",
                                marginTop: 10,
                                includeFontPadding: false
                            }}> 昨日销售额 </Text>

                        </View>


                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            backgroundColor: "#00ff00",
                            justifyContent: 'center',
                            marginLeft: 12
                        }}>

                            <Text style={{fontSize: 15, color: "#fff", includeFontPadding: false}}>0</Text>

                            <Text style={{
                                fontSize: 15,
                                color: "#fff",
                                marginTop: 10,
                                includeFontPadding: false
                            }}> 库存额 </Text>

                        </View>


                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            backgroundColor: "#0000ff",
                            justifyContent: 'center',
                            marginLeft: 12,
                            marginRight: 10
                        }}>

                            <Text style={{fontSize: 15, color: "#fff"}}>0</Text>

                            <Text style={{fontSize: 15, color: "#fff", marginTop: 10}}> 订单满足率 </Text>

                        </View>

                    </View>


                    <View style={{flex: 1, marginTop: 7}}/>

                    <View style={this.styles.item}>

                        <Image style={this.styles.itemImage} source={require("./img/icon-need-do.png")}/>

                        <Text style={this.styles.itemText}>我的待办</Text>

                        <Text style={{flex: 1}}/>

                        <Image style={this.styles.itemArrow} source={require("./img/icon-arrow.png")}/>

                    </View>


                    <View style={this.styles.item}>

                        <Image style={this.styles.itemImage} source={require("./img/icon-report.png")}/>

                        <Text style={this.styles.itemText}>我的报表</Text>

                        <Text style={{flex: 1}}/>

                        <Image style={this.styles.itemArrow} source={require("./img/icon-arrow.png")}/>
                    </View>


                    <View style={this.styles.item}>

                        <Image style={this.styles.itemImage} source={require("./img/icon-message.png")}/>

                        <Text style={this.styles.itemText}>我的消息</Text>

                        <Text style={{flex: 1}}/>

                        <Image style={this.styles.itemArrow} source={require("./img/icon-arrow.png")}/>
                    </View>


                    <View style={this.styles.item}>

                        <Image style={this.styles.itemImage} source={require("./img/icon-provider.png")}/>

                        <Text style={this.styles.itemText}>默认登录供应商</Text>

                        <Text style={{flex: 1}}/>

                        <Image style={this.styles.itemArrow} source={require("./img/icon-arrow.png")}/>
                    </View>


                    <View style={this.styles.item}>

                        <Image style={this.styles.itemImage} source={require("./img/icon-feedback.png")}/>

                        <Text style={this.styles.itemText}>意见反馈</Text>

                        <Text style={{flex: 1}}/>

                        <Image style={this.styles.itemArrow} source={require("./img/icon-arrow.png")}/>
                    </View>


                    <View style={this.styles.item}>

                        <Image style={this.styles.itemImage} source={require("./img/icon-help.png")}/>

                        <Text style={this.styles.itemText}>帮助中心</Text>

                        <Text style={{flex: 1}}/>

                        <Image style={this.styles.itemArrow} source={require("./img/icon-arrow.png")}/>
                    </View>


                    <View style={this.styles.item}>

                        <Image style={this.styles.itemImage} source={require("./img/icon-contact.png")}/>

                        <Text style={this.styles.itemText}>联系我们</Text>

                        <Text style={{flex: 1}}/>

                        <Image style={this.styles.itemArrow} source={require("./img/icon-arrow.png")}/>
                    </View>


                    <TouchableHighlight onPress={() => this.props.navigation.navigate('Login', {name: 'login'})}>

                        <View style={this.styles.item}>

                            <Image style={this.styles.itemImage} source={require("./img/icon-about.png")}/>

                            <Text style={this.styles.itemText}>关于我们</Text>

                            <Text style={{flex: 1}}/>

                            <Image style={this.styles.itemArrow} source={require("./img/icon-arrow.png")}/>

                        </View>

                    </TouchableHighlight>

                    <View style={{height: 10, backgroundColor: "#f2f2f2"}}/>

                </ScrollView>

            </View>
        );
    }

    styles = StyleSheet.create({

        kpiContainer: {
            flex: 1,
            height: 90,
            flexDirection: 'row',
            padding: 5,
            backgroundColor: "#fff",
        },

        kpiItem: {
            flex: 1,
            alignItems: 'center',
        },


        container: {
            flex: 1,
            backgroundColor: "#f2f2f2",

        },

        scrollView: {
            flex: 1,
        },

        item: {
            flex: 1,
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: "#fff",
            marginTop: 1,
        },

        itemImage: {

            height: 35,
            width: 35,

        },

        itemText: {

            fontSize: 14,
            includeFontPadding: false,
            paddingLeft: 7,
            color: "#383838",
        },


        itemArrow: {

            width: 9,
            height: 17,
        },

    });
}

