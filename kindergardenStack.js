import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Kindergarden from '../components/kindergarden';
import KindergardenDetail from '../components/profile';

const screens = {
    Kindergarden: {
        screen: Kindergarden,
    },
    KingdergardenDetail: {
        screen: KindergardenDetail
    }
}

const KindergardenStack = createStackNavigator(screens);

export default createAppContainer(KindergardenStack);