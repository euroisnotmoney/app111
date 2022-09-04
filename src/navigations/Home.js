import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChannelList, Profile, Timer } from '../screens';
import Todo from '../screens/Todo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const TabIcon = ({ name, focused, color }) => {
  const theme = useContext(ThemeContext);
  return (
    <MaterialCommunityIcons
      name={name}
      size={25}
      color={focused ? theme.tabBarActiveTintColor : theme.tabBarInactiveTintColor}
    />
  );
};

const Tab = createBottomTabNavigator();

const Home = ({ navigation, route }) => {
  useEffect(() => {
    const screenName = getFocusedRouteNameFromRoute(route) || 'List';
    navigation.setOptions({
      headerTitle: screenName,
      headerRight: () =>
        screenName === 'List' && (
          <MaterialCommunityIcons
            name="plus"
            size={26}
            style={{ margin: 10 }}
            onPress={() => navigation.navigate('ChannelCreation')}
          />
        ),
    });
  });
  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown:false,
        tabBarStyle: {
          backgroundColor: '#d4e6ff',
          borderTopColor: '#d4e6ff',
          
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#778bdd', }}
      >
      <Tab.Screen
        name="List"
        component={ChannelList}
        options={{
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'chat' : 'chat-outline',
              
            }),
        }}
      />
      
      <Tab.Screen
        name="Calendar"
        component={Profile}
        options={{
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'calendar' : 'calendar-outline',
              
            }),
        }}/>
      <Tab.Screen
        name="POMODORO"
        component={Timer}
        options={{
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'timer' : 'timer-outline',
              
            }),
        }}
      />
      <Tab.Screen
        name="Todo List"
        component={Todo}
        options={{
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'check' : 'check-outline',
              
            }),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: props =>
            TabIcon({
              ...props,
              name: props.focused ? 'face-man' : 'face-man-outline',
              
            }),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
