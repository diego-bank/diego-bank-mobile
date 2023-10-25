import React from "react";
import { Routes } from './src/routes';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}
