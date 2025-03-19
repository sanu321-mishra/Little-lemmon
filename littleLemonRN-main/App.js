import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigators/RootNavigator";

export default function App() {
  console.log('App Loaded'); {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
