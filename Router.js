import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/home';
import Sport from './src/pages/sport';
import Health from './src/pages/health';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
          name="Genel"
          component={Home}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="soccer" color={color} size={size} />
            ),
          }}
          name="Spor"
          component={Sport}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="medical-bag"
                color={color}
                size={size}
              />
            ),
          }}
          name="Sağlık"
          component={Health}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
