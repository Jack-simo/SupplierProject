import React, {Component} from 'react';

import SupplierTabsView from './tabs/SupplierTabsView'


var navigation = null;
export default class SupplierApp extends Component {


    constructor(props) {

        super(props);

        navigation = this.props.navigation;
    }

    render() {

        return (
            <SupplierTabsView navigation={navigation}/>
        );
    }


}
