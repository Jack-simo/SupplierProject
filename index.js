import { AppRegistry } from 'react-native';
import { YellowBox } from 'react-native';
import RootNavigation from "./js/common/RootNavigation";

AppRegistry.registerComponent('SupplierProject', () => RootNavigation);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
