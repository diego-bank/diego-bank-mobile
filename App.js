import React from "react";
import { Routes } from './src/routes';
import { PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
     <PaperProvider>
      <Routes />
    </PaperProvider>
    <Toast />
    </>
  );
}
