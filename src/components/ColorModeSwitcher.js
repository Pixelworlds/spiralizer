import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      size="md"
      fontSize="lg"
      role="button"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
