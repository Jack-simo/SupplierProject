import React from 'react';

import {StackNavigator} from 'react-navigation';
import SupplierApp from "../SupplierApp";
import LoginView from "../login/LoginView";
import UserInfoView from "../tabs/user/UserInfoView";
import SupplierTabsView from "../tabs/SupplierTabsView";


export default  RootNavigation = StackNavigator({

    Home: {
        screen: SupplierApp,
    },

    SupplierTab:{
        screen:SupplierTabsView,
    },

    UserInfo:{
      screen:UserInfoView,
    },

    Login:{
        screen:LoginView,
    }

});
