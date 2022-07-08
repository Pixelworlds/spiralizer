import { screen } from '@testing-library/react';
import { Matrix } from 'src/components/Matrix';
import { AppContext, AppProvider } from 'src/providers/AppProvider';
import { render } from 'src/test-utils';

describe('Matrix', () => {
  test('Should render the Matrix component', () => {
    render(
      <AppProvider>
        <AppContext.Consumer>
          {({ x, y }) => <Matrix x={x} y={y} />}
        </AppContext.Consumer>
      </AppProvider>
    );

    expect(screen.getByRole('group', { name: 'matrix' })).toBeInTheDocument();
  });

  test('Should contain the same number of pin inputs as the product of x and y', () => {
    const { rerender } = render(
      <AppProvider>
        <AppContext.Consumer>
          {({ x, y }) => <Matrix x={x} y={y} />}
        </AppContext.Consumer>
      </AppProvider>
    );

    expect(screen.getAllByRole('textbox').length).toBe(4);
    expect(screen.getByText('a b d c')).toBeInTheDocument();

    rerender(
      <AppProvider>
        <Matrix x={3} y={2} />
      </AppProvider>
    );

    expect(screen.getAllByRole('textbox').length).toBe(6);
    expect(screen.getByText('a b c f e d')).toBeInTheDocument();

    rerender(
      <AppProvider>
        <Matrix x={4} y={5} />
      </AppProvider>
    );

    expect(screen.getAllByRole('textbox').length).toBe(20);
    expect(
      screen.getByText('a b c d h l p t s r q m i e f g k o n j')
    ).toBeInTheDocument();
  });

  test('Should have a spiralized result', () => {
    render(
      <AppProvider>
        <Matrix x={4} y={3} />
      </AppProvider>
    );

    expect(screen.getAllByRole('textbox').length).toBe(12);
    expect(screen.getByText('a b c d h l k j i e f g')).toBeInTheDocument();
  });
});
