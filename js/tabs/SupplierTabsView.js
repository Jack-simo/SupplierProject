/**
 *
 * app底部tab栏
 *
 */

import React, {Component} from 'react';
import TabNavigator from "react-native-tab-navigator";

import {
    Image,
    View,
    StyleSheet,
} from 'react-native';

import HomeView from './home/HomeView';
import DataView from './data/DataView';
import OrderView from './order/OrderView';
import UserInfoView from './user/UserInfoView';

export default class SupplierTabsView extends Component {


    constructor(props) {

        super(props)
        this.state = {
            selectedTab: "首页"
        }
    }

    componentWillMount() {

    }

    render() {

        return (

            <View style={this.styles.tabBar}>

                <TabNavigator>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === '首页'}
                        title="首页"
                        titleStyle={this.styles.tabTitle}
                        selectedTitleStyle={this.styles.tabTitleActive}
                        renderIcon={() => this.renderTabIcon(require("./home/img/tab-icon/default.png"))}
                        renderSelectedIcon={() => this.renderTabIcon(require("./home/img/tab-icon/active.png"))}
                        onPress={() => this.setState({selectedTab: '首页'})}
                    >
                        <HomeView/>

                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === '数据服务'}
                        title="数据服务"
                        titleStyle={this.styles.tabTitle}
                        selectedTitleStyle={this.styles.tabTitleActive}
                        renderIcon={() => this.renderTabIcon(require("./data/img/tab-icon/default.png"))}
                        renderSelectedIcon={() => this.renderTabIcon(require("./data/img/tab-icon/active.png"))}
                        onPress={() => this.setState({selectedTab: '数据服务'})}>
                        <DataView/>

                    </TabNavigator.Item>


                    <TabNavigator.Item
                        selected={this.state.selectedTab === '订单服务'}
                        title="订单服务"
                        titleStyle={this.styles.tabTitle}
                        selectedTitleStyle={this.styles.tabTitleActive}
                        renderIcon={() => this.renderTabIcon(require("./order/img/tab-icon/default.png"))}
                        renderSelectedIcon={() => this.renderTabIcon(require("./order/img/tab-icon/active.png"))}
                        onPress={() => this.setState({selectedTab: '订单服务'})}>
                        <OrderView/>

                    </TabNavigator.Item>


                    <TabNavigator.Item
                        selected={this.state.selectedTab === '我的'}
                        title="我的"
                        titleStyle={this.styles.tabTitle}
                        selectedTitleStyle={this.styles.tabTitleActive}
                        renderIcon={() => this.renderTabIcon(require("./user/img/tab-icon/default.png"))}
                        renderSelectedIcon={() => this.renderTabIcon(require("./user/img/tab-icon/active.png"))}
                        onPress={() => this.setState({selectedTab: '我的'})}>
                        <UserInfoView/>

                    </TabNavigator.Item>

                </TabNavigator>

            </View>
        );
    }

    componentDidMount() {

    }

    renderTabIcon(src) {

        return (

            <Image style={this.styles.tabIcon} source={src}/>
        );
    }


    styles = StyleSheet.create({

        tabBar: {
            flex: 1,
        },

        tabTitle: {
            color: "#383838",
            fontSize: 12,
        },

        tabTitleActive: {
            color: "#3192ff",
            fontSize: 12
        },

        tabIcon: {
            width: 20,
            height: 20,
        }

    });
}



