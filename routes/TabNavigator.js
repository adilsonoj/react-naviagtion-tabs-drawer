import React from 'react';

import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Home from '../pages/Home';
import Settings from '../pages/Settings';

const TabScreen = createMaterialTopTabNavigator(
  {
    Home: { screen: Home },
    Settings: { screen: Settings },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,    
    animationEnabled: true,
    showIcon: true,
    
    tabBarOptions: {
      activeTintColor: '#87B56A',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#633689',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
        
      },
    },
    
  }
);



export default TabScreen;