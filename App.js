import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ProdutoView from './src/screens/CadastroProdutosView';
import ClienteView from './src/screens/CadastroClienteView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='ProdutoView' component={ProdutoView}/>
        <Stack.Screen name='ClienteView' component={ClienteView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
