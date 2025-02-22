import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';


const Stack = createStackNavigator();

const RootNavigator:React.FC = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
};

export default RootNavigator;
