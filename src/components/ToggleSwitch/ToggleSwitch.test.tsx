import React, { useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToggleSwitch from './ToggleSwitch';
import { lightTheme } from '../../styles/themes';
import { ThemeProvider } from 'styled-components'

const ToggleSwitchComponent = () => {

  const [isOn, setIsOn] = useState<boolean>(false)

  const handleOnToggle = () => {
    setIsOn(prevState => !prevState)
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <ToggleSwitch isOn={isOn} onToggle={handleOnToggle} />
    </ThemeProvider>
  )
}

describe('ToggleSwitch', () => {
  const onToggleMock = jest.fn();

  beforeEach(() => {
    onToggleMock.mockClear();
  });

  it('renders correctly', () => {
    const onToggleMock = jest.fn();
    render(<ToggleSwitch isOn={false} onToggle={onToggleMock} />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('calls onToggle when clicked', () => {
    const onToggleMock = jest.fn();
    render(<ToggleSwitch isOn={false} onToggle={onToggleMock} />);
    const toggleSwitch = screen.getByRole('checkbox');
    userEvent.click(toggleSwitch);
    expect(onToggleMock).toHaveBeenCalledTimes(1);
  });

  it('switches to "on" state when clicked', async () => {
    render(<ToggleSwitchComponent />);
    const toggleSwitch = screen.getByRole('checkbox');
    userEvent.click(toggleSwitch);

    await waitFor (() => {
      expect(toggleSwitch).toHaveStyle({
        backgroundColor: '#048900'
      })
    })
  });

  it('switches to "off" state when clicked twice', () => {
    render(<ToggleSwitchComponent />);
    const toggleSwitch = screen.getByRole('checkbox');
    userEvent.click(toggleSwitch);
    userEvent.click(toggleSwitch);
    expect(toggleSwitch).toHaveStyle({
      backgroundColor: '#222222'
    })
  });
});