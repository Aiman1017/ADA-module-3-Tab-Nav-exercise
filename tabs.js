import React from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {MaterialIcons} from '@expo/vector-icons';

import ProfileStack from './profileStack';
import KindergardenStack from './kindergardenStack';


const TabNavigator = createBottomTabNavigator({
    Kindergarden: {
        screen: KindergardenStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcon name ='home' size ={28} />
            )
        }
    },
    Profile: {
        screen: ProfileStack,
        navigationOptions: {
            tabBarOptions: 'About',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcon name ='info' size ={28} />
            )
        }
    }
  });
  
  export default createAppContainer(TabNavigator);