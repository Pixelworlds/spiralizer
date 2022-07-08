import { screen } from '@testing-library/react';
import { Controls } from 'src/components/Controls';
import { render } from 'src/test-utils';

let mockProps = {
  x: 2,
  setX: jest.fn(),
  y: 2,
  setY: jest.fn(),
};

beforeEach(() => {
  render(<Controls {...mockProps} />);
});

describe('Controls', () => {
  test('Should render the Controls component', () => {
    expect(screen.getByRole('group', { name: 'controls' })).toBeInTheDocument();
    expect(
      screen.getByRole('spinbutton', { name: 'increment' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('spinbutton', { name: 'decrement' })
    ).toBeInTheDocument();
  });

  test('Should have an initial value of 2 for the width and height', () => {
    expect(screen.getByRole('spinbutton', { name: 'increment' }).value).toBe(
      '2'
    );
    expect(screen.getByRole('spinbutton', { name: 'decrement' }).value).toBe(
      '2'
    );
  });
});
