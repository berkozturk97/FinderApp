/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Initial from './Screens/Login/Initial';
import { TabLabel } from './Components/tabmenu/TabLabel';
import { TabIcon } from './Components/tabmenu/TabIcon';
import MainMenu from './Screens/MainMenu/MainMenu';
import Messages from './Screens/MainMenu/Messages';
import Profile from './Screens/Profile/Profile';
import Store from './Utils/Store/Store'
import { observer } from 'mobx-react';
const Tab = createBottomTabNavigator();
const LoginStack = createStackNavigator();
const MainMenuStack = createStackNavigator();
const MessagesStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Stack = createStackNavigator();

const HeaderStyle = {
  title: 'finder',
  headerStyle: {
    backgroundColor: '#212A39',
  },
  headerTitleStyle: {
    color: '#00B355',
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  headerLayoutPreset: 'center',
  //headerTitle: props => (<Text style={{color:'#00B355',fontFamily: 'AvenirNextLTPro-Bold',}}>finder</Text>)
};

function MainMenuStackScreen() {
  return (
    <MainMenuStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'MainMenu'}>
      <MainMenuStack.Screen name="MainMenu" options={HeaderStyle} component={MainMenu} />
      <MainMenuStack.Screen name="Checkin" options={HeaderStyle} component={MainMenu} />
    </MainMenuStack.Navigator>
  );
}
function MessagesStackScreen() {
  return (
    <MessagesStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Messages'}>
      <MessagesStack.Screen name="Messages" options={HeaderStyle} component={Messages} />
    </MessagesStack.Navigator>
  );
}
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Profile'}>
      <ProfileStack.Screen name="Profile" options={HeaderStyle} component={Profile} />
    </ProfileStack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{ activeBackgroundColor: '#212A39', inactiveBackgroundColor: '#212A39' }} initialRouteName={'MainMenuTab'}>
      <Tab.Screen
        name="MessagesTab"
        component={MessagesStackScreen}
        options={{
          tabBarLabel: ({ focused, color }) => <TabLabel title={'messages'} focused={focused} />,
          tabBarIcon: ({ focused, color, size }) => <TabIcon images={'messages'} focused={focused} iconName={'messages'} />,
        }}
      />
      <Tab.Screen
        name="MainMenuTab"
        component={MainMenuStackScreen}
        options={{
          tabBarLabel: ({ focused, color }) => <TabLabel title={'Home'} focused={focused} />,
          tabBarIcon: ({ focused, color, size }) => <TabIcon images={'mainMenu'} focused={focused} iconName={'mainMenu'} />,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: ({ focused, color }) => <TabLabel title={'messages'} focused={focused} />,
          tabBarIcon: ({ focused, color, size }) => <TabIcon images={'profile'} focused={focused} iconName={'profile'} />,
        }}
      />
    </Tab.Navigator>
  )
}
function LoginStackScreen() {
  return (
    <LoginStack.Navigator initialRouteName={"Initial"}>
      <LoginStack.Screen name="Initial" component={Initial} options={{ headerShown: false }} />
    </LoginStack.Navigator>
  );
}

@observer
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {Store.userToken == null ? (
            <Stack.Screen name="Login" component={LoginStackScreen} options={{ headerShown: false }} />
          ) : (
              <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} options={{ headerShown: false }} />)}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
/*
 <NavigationContainer>
        {Store.userToken == null ? (
          <Login.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Login.Screen
                name="Initial"
                component={Initial}
                options={{
                  // When logging out, a pop animation feels intuitive
                  // You can remove this if you want the default 'push' animation
                  animationTypeForReplace: true ? 'pop' : 'push',
                }}
              />
            </Login.Navigator>
        ) : (
            <Tab.Navigator tabBarOptions={{ activeBackgroundColor: '#212A39', inactiveBackgroundColor: '#212A39' }} initialRouteName={'MainMenuTab'}>
              <Tab.Screen
                name="MessagesTab"
                component={MessagesStackScreen}
                options={{
                  tabBarLabel: ({ focused, color }) => <TabLabel title={'messages'} focused={focused} />,
                  tabBarIcon: ({ focused, color, size }) => <TabIcon images={'messages'} focused={focused} iconName={'messages'} />,
                }}
              />
              <Tab.Screen
                name="MainMenuTab"
                component={MainMenuStackScreen}
                options={{
                  tabBarLabel: ({ focused, color }) => <TabLabel title={'Home'} focused={focused} />,
                  tabBarIcon: ({ focused, color, size }) => <TabIcon images={'mainMenu'} focused={focused} iconName={'mainMenu'} />,
                }}
              />
              <Tab.Screen
                name="ProfileTab"
                component={ProfileStackScreen}
                options={{
                  tabBarLabel: ({ focused, color }) => <TabLabel title={'messages'} focused={focused} />,
                  tabBarIcon: ({ focused, color, size }) => <TabIcon images={'profile'} focused={focused} iconName={'profile'} />,
                }}
              />
            </Tab.Navigator>)}
      </NavigationContainer>
*/