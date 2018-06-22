import React from 'react';

import {StackNavigator} from 'react-navigation';
import SupplierApp from "../SupplierApp";
import LoginView from "../login/LoginView";
import UserInfoView from "../tabs/user/UserInfoView";


export default  Application = StackNavigator({

    Home: {
        screen: SupplierApp,
    },

    UserInfo:{
      screen:UserInfoView,
    },

    Login:{
        screen:LoginView,
    }



});
