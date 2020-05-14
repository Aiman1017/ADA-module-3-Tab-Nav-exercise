import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Profile from '../components/profile';

const screens = {
    Profile: {
        screen: Profile
    }
}

const ProfileStack = createStackNavigator(screens, {defaultNavigationOptions:{
    headerStyle: {
        backgroundColor: '#eee'
    }
}});
export default createAppContainer(ProfileStack);
