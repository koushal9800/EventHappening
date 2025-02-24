import { createStackNavigator } from "@react-navigation/stack";
import { AppNavigationProps } from "./Navigation";
import OnboardingScreen from "../screens/OnboardingScreen";
import Login from "../screens/LoginScreen";
import { BottomTabNavigator } from "./BottomTabNavigator";


const Stack =  createStackNavigator<AppNavigationProps>()

const AppNavigator = () =>{
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }} >
            <Stack.Screen  name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen  name="Login" component={Login} />
            <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        </Stack.Navigator>
    )
}

export default AppNavigator