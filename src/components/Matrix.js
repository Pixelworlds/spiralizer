import { Grid, PinInput, PinInputField, Text, VStack } from '@chakra-ui/react';
import { map } from 'lodash';

const Matrix = ({ x, y, flatValues, valueStr, result }) => {
  return (
    <VStack spacing={12} role="group" aria-label="matrix">
      <Grid
        templateColumns={`repeat(${x}, 1fr)`}
        templateRows={`repeat(${y}, 1fr)`}
        gap={3}
      >
        <PinInput type="alphanumeric" value={valueStr} isReadOnly={true}>
          {map(flatValues, value => (
            <PinInputField key={value} />
          ))}
        </PinInput>
      </Grid>
      {result && <Text>{result}</Text>}
    </VStack>
  );
};

export { Matrix };
