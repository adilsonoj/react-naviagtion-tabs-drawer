import React from 'react';

import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from './pages/Home';
import Settings from './pages/Settings';
import About from './pages/About'
import TabBar from './routes/TabNavigator'


const MyDrawerNavigator = createDrawerNavigator({
  
    Home: {
      screen: Home,
    },
    Settings: {
      screen: Settings,
      params: { param: 'Qualquer' } 
    },
     About: {
     screen: About
    },
    TabBar: {
      screen: TabBar 
    },
    
  },
  {
    initialRouteName:  'TabBar',
    drawerBackgroundColor: '#FFFFFF',
    
  }
  );

  export default MyDrawerNavigator;