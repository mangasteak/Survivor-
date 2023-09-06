import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Button } from "@react-native-material/core";
import { DisplayAnImage } from "./Components/Image.tsx";
import { HomeScreen } from "./src/screen/searchBar.tsx";
import { SettingsScreen} from "./src/screen/settingsScreen.tsx"
import { StackScreen } from "./src/screen/StackScreen.tsx"
import { MyStack} from "./src/screen/navigation.tsx"
const Stack = createStackNavigator();

const App = () => {
   return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Trombi" >
          <Stack.Screen name="Trombi" component={HomeScreen}/>
          {/* Other screens */}
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;