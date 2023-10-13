import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RecipeDetail from "../screens/RecipeDetail";


const Stack = createNativeStackNavigator();

function AppNavigation ()
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'
        screenOptions={ { headerShown: false } }>
        <Stack.Screen name="Welcome" component={ WelcomeScreen } />
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="RecipeDetail" component={ RecipeDetail } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;