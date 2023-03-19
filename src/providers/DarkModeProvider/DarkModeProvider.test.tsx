import { render, screen, waitFor } from '@testing-library/react';
import DarkModeProvider, { useDarkMode } from './DarkModeProvider';
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../../styles/themes';

export const TextStyle = styled.p`
  color: ${(props: any) => props.theme.color }
`

describe('DarkModeProvider', () => {
  it('renders children correctly', () => {
    const ChildComponent = () => <div>Child Component</div>;
    render(
      <DarkModeProvider>
        <ChildComponent />
      </DarkModeProvider>
    );
    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });

  it('uses light theme by default', () => {
    const ChildComponent = () => {
      const { theme } = useDarkMode();
      return <div>{theme}</div>;
    };
    render(
      <DarkModeProvider>
        <ChildComponent />
      </DarkModeProvider>
    );
    expect(screen.getByText('light')).toBeInTheDocument();
  });

  it('toggles theme between light and dark', async () => {
    const ChildComponent = () => {
      const { theme, toggleTheme } = useDarkMode();
      return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <div>{theme}</div>
          <TextStyle>Test</TextStyle>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </ThemeProvider>
      );
    };
    render(
      <DarkModeProvider>
        <ChildComponent />
      </DarkModeProvider>
    );

    const text = screen.getByText('Test')
    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle({
      color: '#000'
    })
 
    const toggleButton = screen.getByRole('button', { name: 'Toggle Theme' });
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveTextContent('Toggle Theme');
    toggleButton.click();

    await waitFor(() => expect(text).toHaveStyle({
      color: '#fff'
    }))
  });

  it('sets theme in local storage', () => {
    const ChildComponent = () => {
      const { theme, toggleTheme } = useDarkMode();
      return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <div>{theme}</div>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </ThemeProvider>
      );
    };
    render(

      <DarkModeProvider>
        <ChildComponent />
      </DarkModeProvider>

    );

    const toggleButton = screen.getByRole('button', { name: 'Toggle Theme' });
    toggleButton.click();
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
