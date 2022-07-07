import {
  Box,
  Center,
  ChakraProvider,
  HStack,
  theme,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from 'src/components/ColorModeSwitcher';
import { Controls } from 'src/components/Controls';
import { Matrix } from 'src/components/Matrix';
import { AppProvider } from 'src/providers/AppProvider';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Box textAlign="center" fontSize="xl">
          <VStack spacing={12}>
            <HStack w="full" justifyContent="flex-end">
              <ColorModeSwitcher />
            </HStack>
            <Controls />
            <Center>
              <Matrix />
            </Center>
          </VStack>
        </Box>
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;
