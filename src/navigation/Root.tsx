import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LocationDetails } from "../screens/LocationDetails";
import { DayDetails } from "../screens/DayDetails";

const Stack = createNativeStackNavigator();

export const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LocationDetails" component={LocationDetails} />
      <Stack.Screen name="DayDetails" component={DayDetails} />
    </Stack.Navigator>
  );
};
//58:40
