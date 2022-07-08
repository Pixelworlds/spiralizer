import { ChakraProvider, theme } from '@chakra-ui/react';
import { Layout } from 'src/components/Layout';
import { AppProvider } from 'src/providers/AppProvider';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Layout />
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;
