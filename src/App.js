import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Facility from './components/Facility/Facility';
import './Main.css';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Facility />
        <Newsletter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
