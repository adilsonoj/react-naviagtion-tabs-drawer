import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FirstPage extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.name : 'HOME',
      
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>

        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name='home'size={30} color="#900" /> 
          <Text>Home Scren</Text>
          <TouchableOpacity  onPress={this.props.navigation.toggleDrawer}>
            <Icon name="bars" size={20} color='#900'  />
          </TouchableOpacity>
        </View>
      </View>
      
     
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  header:{
    backgroundColor: '#900',
    width: Dimensions.get('window').width,
    height: 20
  }
})