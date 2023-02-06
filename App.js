import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons';
import { theme } from './src/infrastructure/theme'
import { Text, View } from 'react-native';
import { RestaurantsScreen } from './src/features/restaraunts/screens/restaraunts.screen';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function SettingsScreen() {
  return (
    <View className="flex-1 justify-center mx-auto">
      <Text>Settings!</Text>
    </View>
  );
}

function MapScreen() {
  return (
    <View className="flex-1 justify-center align-middle">
      <Text>Map!</Text>
    </View>
  );
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]

  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color}/>
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  }
}

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Settings: 'md-settings',
  Map: "md-map"
}

const Tab = createBottomTabNavigator()

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })

  const [latoLoaded] = useLato({
    Lato_400Regular
  })

  if (!latoLoaded || !oswaldLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Tab.Navigator
          screenOptions={createScreenOptions}
        >
          <Tab.Screen options={{ headerShown: false }} name='Restaurants' component={RestaurantsScreen} />
          <Tab.Screen name='Map' component={MapScreen} />
          <Tab.Screen name='Settings' component={SettingsScreen} />
        </Tab.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}


