import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Home2, ProfileCircle, SearchNormal1} from 'iconsax-react-native';
import {Home, Discover, Profile, detail, AddBlogForm, EditBlogForm} from '../../screens';
import {colors} from '../../theme';
import SearchBar from '../SearchBar';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.brown(),
        tabBarInactiveTintColor: colors.black(),
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 50,
          backgroundColor: '#F1F0E8',
        },
        tabBarLabelStyle: {
          marginTop: 5,
          fontSize: 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Home2
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({focused, color}) => (
            <SearchNormal1
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <ProfileCircle
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={detail}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="SearchPage"
        component={SearchBar}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
        }}
      />
      <Stack.Screen
        name="AddBlog"
        component={AddBlogForm}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="EditBlog"
        component={EditBlogForm}
        options={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
};
export default Router;
