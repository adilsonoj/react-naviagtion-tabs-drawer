import React from 'react';
import { TouchableOpacity } from 'react-native'

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import About from './pages/About'
import Icon from 'react-native-vector-icons/FontAwesome';

import TabNavigator from './routes/TabNavigator'
import DrawerScreen from './components/DrawerScreen'

const DrawerNavigator = createDrawerNavigator({
  TabBar,
  About
},
{
  initialRouteName:  'TabBar',
  drawerBackgroundColor: '#FFFFFF',
  contentComponent: DrawerScreen,
}
);

//responsável pela integracao do DrawerNavigator e MaterialTopTabNavigator
const AppStackNavigator = createStackNavigator({
  Home: DrawerNavigator,
  TabBar: TabNavigator
},
{
  initialRouteName:  'Home',
  defaultNavigationOptions:({navigation})=>({
    
      headerStyle: {
        backgroundColor: '#633689',
      },
      headerTintColor: '#FFFFFF',
      title: 'TabExame',
      headerRight: (
        <TouchableOpacity style={{marginRight: 16}} >
          <Icon name="home" size={20} color='#fff' />
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity style={{marginLeft: 16}} onPress={navigation.toggleDrawer}>
          <Icon name="bars" size={20} color='#fff'  />
        </TouchableOpacity>
        
      ),
   
  })
})

export default createAppContainer(AppStackNavigator);