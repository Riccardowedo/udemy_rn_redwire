import 'react-native-gesture-handler';
import React,{ Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

const Drawer = createDrawerNavigator();

import { Stack, HomeStack, VideosStack } from './routes/stacks';


import VideosScreen from './components/home/videos';
import HomeScreen from './components/home/articles';
import AuthScreen from './components/auth';

const MainDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeStack}/>
    <Drawer.Screen name="Videos" component={VideosStack}/>
  </Drawer.Navigator>
)

class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          { this.props.auth.isAuth ? 
            <>
              <Stack.Screen
                name="Main"
                component={ MainDrawer }
              />
            </>
          :
            <Stack.Screen
              name="AuthScreen"
              component={AuthScreen}
            />
          }
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const mapStateToProps = state => ({auth: state.auth })
export default connect(mapStateToProps)(App);

