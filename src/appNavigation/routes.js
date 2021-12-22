import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductDetail from '../screens/productDetail/index';
import SignUpScreen from '../screens/signUpScreen';
import LoginScreen from '../screens/Login';
import BottomTab from './index';
import Places from '../screens/shop/map';
import NewsDetail from '../screens/newsDetail';
import UuDaiDacBiet from '../screens/home/kham-pha-them/uu-dai-dac-biet';

export default function HomeStackScreen() {
  const HomeStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="ProductList" component={LoginScreen} />
        <HomeStack.Screen name="goToHome" component={BottomTab} />
        <HomeStack.Screen name="LoginScreen" component={LoginScreen} />
        <HomeStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <HomeStack.Screen name="Places" component={Places} />
        <HomeStack.Screen name="Detail" component={ProductDetail} />
        <HomeStack.Screen name="newsDetail" component={NewsDetail} />
        <HomeStack.Screen name="UuDaiDacBiet" component={UuDaiDacBiet} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
const Tab = createBottomTabNavigator();

// function RouterNavigation() {
//   const Tab = createBottomTabNavigator();
// return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarHideOnKeyboard: true, // v6
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;

//           if (route.name === 'Discover') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Shop') {
//             iconName = focused ? 'search' : 'search-outline';
//           } else if (route.name === 'Wishlist') {
//             iconName = focused ? 'heart' : 'heart-outline';
//           } else if (route.name === 'Bag') {
//             iconName = focused ? 'cart' : 'cart-outline';
//           } else if (route.name === 'Logout') {
//             iconName = focused ? 'person' : 'person-outline';
//           }

//           // You can return any component that you like here!
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray',
//         headerShown: false,
//       })}>
//       <Tab.Screen name="Discover" component={HomeStackScreen} />
//       <Tab.Screen name="Shop" component={Shop} />
//       <Tab.Screen name="Wishlist" component={Wishlist} />
//       <Tab.Screen name="Bag" component={Bag} />
//       <Tab.Screen name="Logout" component={ProfileScreen} />
//     </Tab.Navigator>
// );
// }
