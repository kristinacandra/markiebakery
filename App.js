import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/components/navigation/router';
export default function App() {
  return (
    <NavigationContainer>
     <Router/>
    </NavigationContainer>
  );
}