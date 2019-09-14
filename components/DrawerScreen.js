import React, { Component } from 'react';

import { ScrollView, Text, View, StyleSheet } from 'react-native';

import { DrawerActions } from 'react-navigation-drawer';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DrawerScreen extends Component {
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        }); 
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
      }
  render() {
    return (
    <View>
        <ScrollView>
          <View>
            <View style={styles.item}>
                <Icon name='home' size={20} />
              <Text onPress={this.navigateToScreen('Home')}>
                Home
              </Text>
            </View>
            <View style={styles.item}>
              <Text onPress={this.navigateToScreen('Settings')}>
                Configurações
              </Text>
            </View>
            <View style={styles.item}>
              <Text onPress={this.navigateToScreen('About')}>
                Sobre
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>);
  }
}
const styles = StyleSheet.create({
    
    item:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        padding: 10,
        height: 50,
        borderBottomWidth: 0.5,
        borderColor: '#000000',
    }
});

