import {
  FormControl,
  FormLabel,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useToast,
} from '@chakra-ui/react';

const Controls = ({ x, setX, y, setY }) => {
  const toast = useToast();

  return (
    <HStack spacing={6} role="group" aria-label="controls">
      <FormControl>
        <FormLabel htmlFor="size">Array Width</FormLabel>
        <NumberInput
          id="size"
          value={x}
          min={2}
          max={26}
          aria-label="increment"
          onChange={size => {
            size * y <= 26
              ? setX(size)
              : toast({
                  title: 'The matrix is limited to a maximum of 26 cells',
                  status: 'warning',
                  isClosable: true,
                });
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="size">Array Height</FormLabel>
        <NumberInput
          id="size"
          value={y}
          min={2}
          max={26}
          aria-label="decrement"
          onChange={size => {
            size * x <= 26
              ? setY(size)
              : toast({
                  title: 'The matrix is limited to a maximum of 26 cells',
                  status: 'warning',
                  isClosable: true,
                });
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
    </HStack>
  );
};

export { Controls };
