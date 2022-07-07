import {
  FormControl,
  FormLabel,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import { useApp } from 'src/providers/AppProvider';

const Controls = () => {
  const { x, setX, y, setY } = useApp();

  return (
    <HStack spacing={6}>
      <FormControl>
        <FormLabel htmlFor="size">Array Width</FormLabel>
        <NumberInput
          id="size"
          value={x}
          min={2}
          max={26}
          onChange={size => {
            if (size * y <= 26) setX(size);
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
          onChange={size => {
            if (size * x <= 26) setY(size);
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
