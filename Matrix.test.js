import { screen } from '@testing-library/react';
import { Matrix } from 'src/components/Matrix';
import { AppContext, AppProvider } from 'src/providers/AppProvider';
import { render } from 'src/test-utils';

beforeEach(() => {
  render(
    <AppProvider>
      <AppContext.Consumer>
        {({ x, setX }) => {
          setX(3);

          console.log(x);

          return <Matrix />;
        }}
      </AppContext.Consumer>
    </AppProvider>
  );
});

describe('Matrix', () => {
  test('Should render the Matrix component', () => {
    // render(
    //   <Matrix x={2} y={2} flatValues={['A', 'B', 'C', 'D']} valuesStr="ABCD" />
    // );

    expect(screen.getByRole('group', { name: 'matrix' })).toBeInTheDocument();
  });

  // test('Should contain the same number of pin inputs as the product of x and y', () => {
  //   const { rerender } = render(
  //     <Matrix x={2} y={2} flatValues={['A', 'B', 'C', 'D']} valuesStr="ABCD" />
  //   );

  //   expect(screen.getAllByRole('textbox').length).toBe(4);

  //   rerender(
  //     <Matrix
  //       x={3}
  //       y={2}
  //       flatValues={['A', 'B', 'C', 'D', 'E', 'F']}
  //       valuesStr="ABCDEF"
  //     />
  //   );

  //   expect(screen.getAllByRole('textbox').length).toBe(6);

  //   rerender(
  //     <Matrix
  //       x={4}
  //       y={5}
  //       flatValues={[
  //         'A',
  //         'B',
  //         'C',
  //         'D',
  //         'E',
  //         'F',
  //         'G',
  //         'H',
  //         'I',
  //         'J',
  //         'K',
  //         'L',
  //         'M',
  //         'N',
  //         'O',
  //         'P',
  //         'Q',
  //         'R',
  //         'S',
  //         'T',
  //       ]}
  //       valuesStr="ABCDEFGHIJKLMNOPQRST"
  //     />
  //   );
  //   expect(screen.getAllByRole('textbox').length).toBe(20);
  // });

  // test('Should have a spiralized result', () => {
  //   render(
  //     <AppProvider>
  //       <AppContext.Consumer>
  //         {({ x, setX }) => {
  //           console.log(x);

  //           return <div>Hola</div>;
  //         }}
  //       </AppContext.Consumer>
  //     </AppProvider>
  //   );
  // });
});
