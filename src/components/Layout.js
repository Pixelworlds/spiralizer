import { Box, Center, HStack, VStack } from '@chakra-ui/react';
import { ColorModeSwitcher } from 'src/components/ColorModeSwitcher';
import { Controls } from 'src/components/Controls';
import { Matrix } from 'src/components/Matrix';
import { useApp } from 'src/providers/AppProvider';

const Layout = () => {
  const { x, setX, y, setY, flatValues, valueStr, result } = useApp();

  return (
    <Box textAlign="center" fontSize="xl">
      <VStack spacing={12}>
        <HStack w="full" justifyContent="flex-end">
          <ColorModeSwitcher />
        </HStack>
        <Controls x={x} setX={setX} y={y} setY={setY} />
        <Center>
          <Matrix
            x={x}
            y={y}
            flatValues={flatValues}
            valueStr={valueStr}
            result={result}
          />
        </Center>
      </VStack>
    </Box>
  );
};

export { Layout };
