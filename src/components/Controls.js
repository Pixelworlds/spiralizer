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

const Controls = ({ x, setX, y, setY }) => {
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
          aria-label="decrement"
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
