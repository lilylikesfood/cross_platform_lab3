// // App.js
// import React from 'react';
// import { StatusBar, StyleSheet} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import {ContactProvider} from './src/utils/ContactContext';
// import ContactListScreen from './src/screens/ContactList/ContactListScreen'; // example

// export default function App() {
//   return (
//     <ContactProvider>
//       <SafeAreaView style={styles.container}>
//         <StatusBar barStyle="dark-content" />
//         <ContactListScreen />
//       </SafeAreaView>
//     </ContactProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1 },
// });


// import React from 'react';
// import { StatusBar, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { ContactProvider } from './src/utils/ContactContext';
// import ContactListScreen from './src/screens/ContactList/ContactListScreen';
// import AddContactScreen from './src/screens/ContactList/AddContactScreen'; // example
// import ContactDetailsScreen from './src/screens/ContactList/ContactDetailsScreen'; // example

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <ContactProvider>
//       <NavigationContainer>
//         <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
//           <StatusBar barStyle="dark-content" />
//           <Stack.Navigator>
//             <Stack.Screen name="Contacts" component={ContactListScreen} />
//             <Stack.Screen name="AddContact" component={AddContactScreen} />
//             <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} />
//           </Stack.Navigator>
//         </SafeAreaView>
//       </NavigationContainer>
//     </ContactProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1 },
// });


// App.tsx
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ContactProvider } from './src/utils/ContactContext';

// Screens
import ContactListScreen from './src/screens/ContactList/ContactListScreen';
import AddContactScreen from './src/screens/AddContact/AddContactScreen';
import ContactDetailsScreen from './src/screens/ContactDetails/ContactDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContactProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <Stack.Navigator initialRouteName="ContactList">
            <Stack.Screen name="ContactList" component={ContactListScreen} />
            <Stack.Screen name="AddContact" component={AddContactScreen} />
            <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} />
            {/* <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ContactProvider>
  );
}

