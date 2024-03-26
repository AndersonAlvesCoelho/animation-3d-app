import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ChairScreen from '../screens/Chair';
import ModelLowPolyHouseScreen from '../screens/LowPolyHouse';
import LowPolyKitchenScreen from '../screens/LowPolyKitchen';
import MainScreen from '../screens/main';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={MainScreen} />
        <Drawer.Screen
          name="Chair"
          options={{ drawerLabel: 'Chair' }}
          component={ChairScreen}
        />
        <Drawer.Screen
          name="LowPolyHouse"
          options={{ drawerLabel: 'Low Poly House' }}
          component={ModelLowPolyHouseScreen}
        />
        <Drawer.Screen
          name="LowPolyKitchen"
          options={{ drawerLabel: 'Low Poly Kitchen' }}
          component={LowPolyKitchenScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
