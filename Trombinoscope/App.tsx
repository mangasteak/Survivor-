import React from "react";
import {
    StatusBar,
    StyleSheet,
    SafeAreaView,
} from "react-native";
import { Login } from "./src/screen/login.tsx";
import { Profile } from "./src/screen/profile.tsx";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Button } from "@react-native-material/core";
import { DisplayAnImage } from "./Components/Image.tsx";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "./src/screen/searchBar.tsx";
import { SettingsScreen} from "./src/screen/settingsScreen.tsx"
import { StackScreen } from "./src/screen/StackScreen.tsx"
import { MyStack} from "./src/screen/navigation.tsx"
const Stack = createNativeStackNavigator();

const NavigationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Login">
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
                <Stack.Screen name="Trombi" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const App = () => (
    NavigationStack()
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default App;