import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './Main.css';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="sm"
      fontSize="sm"
      aria-label={`Switch to ${text} mode`}
      variant="light"
      color="current"
      border="none"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
      className="color_switcher"
    />
  );
};
