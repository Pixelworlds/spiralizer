import { Grid, PinInput, PinInputField, Text, VStack } from '@chakra-ui/react';
import { chunk, flatten, lowerCase, map } from 'lodash';

const Matrix = ({ x, y }) => {
  const generateMatrix = (width, height) => {
    const flat = Array.from({ length: width * height }, (_, i) =>
      String.fromCharCode('A'.charCodeAt(0) + i)
    );

    return chunk(flat, width);
  };

  const generateValues = matrix => {
    return map(flatten(matrix), value => value.toString()).join('');
  };

  const spiralize = (width, height) => {
    const matrix = generateMatrix(width, height);
    const arr = [];

    while (matrix.length) {
      arr.push(
        ...matrix.shift(),
        ...matrix.map(i => i.pop()),
        ...(matrix.pop() || []).reverse(),
        ...matrix.map(i => i.shift()).reverse()
      );
    }

    return map(arr, value => lowerCase(value)).join(' ');
  };

  const matrix = generateMatrix(x, y);
  const defaultValues = generateValues(matrix);

  return (
    <VStack spacing={12} role="group" aria-label="matrix">
      <Grid
        templateColumns={`repeat(${x}, 1fr)`}
        templateRows={`repeat(${y}, 1fr)`}
        gap={3}
      >
        <PinInput type="alphanumeric" value={defaultValues} isReadOnly={true}>
          {map(flatten(matrix), value => (
            <PinInputField key={value} />
          ))}
        </PinInput>
      </Grid>
      <Text>{spiralize(x, y)}</Text>
    </VStack>
  );
};

export { Matrix };
