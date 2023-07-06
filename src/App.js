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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Facility from './components/Facility/Facility';
import './Main.css';
import Footer from './components/Footer/Footer';
import Headroom from 'react-headroom';
import Mid from './components/Mid';
import Loading from './components/Loading/Loading';

function App() {
  return (
    <>
      <BrowserRouter>
        <Headroom>
          <Navbar />
        </Headroom>
        <Mid />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
