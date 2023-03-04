import Layout from "./layout/Layout/Layout";
import ListLayout from "./layout/ListLayout/ListLayout";
import { DevicesProvider } from "./providers/DevicesProvider";
import DeviceManager from "./features/DeviceManager/DeviceManager";
import ErrorBoundary from "./features/ErrorBoundary/ErrorBoundary";
import SnackbarProvider from "./providers/SnackbarProvider";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <SnackbarProvider>
          <DevicesProvider>
            <Layout>
              <ListLayout pageHeaderTitle="Devices" buttonText="+ Add Device">
                <DeviceManager />
              </ListLayout>
            </Layout>
          </DevicesProvider>
        </SnackbarProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
