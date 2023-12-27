import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Index from './src/routes/stack';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
    <NavigationContainer>
<Index/>
    </NavigationContainer>
    </GestureHandlerRootView>
  );
}

