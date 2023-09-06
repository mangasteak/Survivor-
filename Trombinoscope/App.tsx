import React from "react";
import {
    StatusBar,
    StyleSheet,
    SafeAreaView,
} from "react-native";
import { Login } from "./Pages/login.tsx";
import { Profile } from "./Pages/profile.tsx";
import { DisplayAnImage } from "./Components/Image.tsx";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Login">
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
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
    },
});

export default App;