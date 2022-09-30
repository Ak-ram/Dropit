import './index.css';

import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'

import App from './App';
import {theme} from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
    <ColorModeScript initialColorMode = 'theme.config.initialColorMode' />
    <Router><App /></Router>

    </ChakraProvider>);
