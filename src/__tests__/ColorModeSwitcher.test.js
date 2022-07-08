import { fireEvent, screen } from '@testing-library/react';
import { ColorModeSwitcher } from 'src/components/ColorModeSwitcher';
import { render } from 'src/test-utils';

describe('ColorModeSwitcher', () => {
  test('Should render the ColorModeSwitcher component', () => {
    render(<ColorModeSwitcher />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('Should initially be in light mode', () => {
    render(<ColorModeSwitcher />);

    const button = screen.getByRole('button', { name: 'Switch to dark mode' });

    expect(button).toBeInTheDocument();
  });

  test('Should change to dark mode when clicked', () => {
    render(<ColorModeSwitcher />);

    const lightButton = screen.getByRole('button', {
      name: 'Switch to dark mode',
    });

    fireEvent.click(lightButton);

    const darkButton = screen.getByRole('button', {
      name: 'Switch to light mode',
    });

    expect(darkButton).toBeInTheDocument();
  });
});
