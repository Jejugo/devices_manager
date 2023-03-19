import Layout from "./layout/Layout/Layout";
import ListLayout from "./layout/ListLayout/ListLayout";
import { DevicesProvider } from "./providers/DevicesProvider/DevicesProvider";
import DeviceManager from "./features/DeviceManager/DeviceManager";
import ErrorBoundary from "./features/ErrorBoundary/ErrorBoundary";
import SnackbarProvider from "./providers/SnackbarProvider/SnackbarProvider";
import DeviceProvider from "./providers/DeviceProvider/DeviceProvider";
import { useDarkMode } from "./providers/DarkModeProvider/DarkModeProvider";
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from "./styles/themes";
import { GlobalStyles } from './styles/crateGlobalStyles';

function App() {
  const { theme, toggleTheme } = useDarkMode()
  return (
    <div className="App">
      <ErrorBoundary>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <DeviceProvider>
        <SnackbarProvider>
          <DevicesProvider>
            <Layout>
              <ListLayout pageHeaderTitle="Devices" buttonText="+ Add Device">
                <DeviceManager />
              </ListLayout>
            </Layout>
          </DevicesProvider>
        </SnackbarProvider>
        </DeviceProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
