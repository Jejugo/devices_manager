import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DevicesProvider } from "../../providers/DevicesProvider/DevicesProvider";
import SnackbarProvider from "../../providers/SnackbarProvider/SnackbarProvider";
import PageHeader from "./PageHeader";
import { sendRequest } from "../../service";
import { colors } from "../../styles";
import { lightTheme } from "../../styles/themes";
import { ThemeProvider } from 'styled-components'

jest.mock("../../service", () => ({
  sendRequest: jest.fn(),
}));

const PageHeaderWithWrapper = () => {
  return (
    <ThemeProvider theme={lightTheme}>
    <DevicesProvider>
      <SnackbarProvider>
        <PageHeader title="Test Title" buttonText="Test Button Text" />
      </SnackbarProvider>
    </DevicesProvider>
    </ThemeProvider>
  );
};

const sendRequestMock = sendRequest as jest.Mocked<any>;

describe("PageHeader component", () => {
  const title = "Test Title";
  const buttonText = "Test Button Text";

  it("renders the correct title and button text", () => {
    const title = "Test Title";
    const buttonText = "Test Button Text";
    render(
      <ThemeProvider theme={lightTheme}>
        <PageHeader title={title} buttonText={buttonText} />
      </ThemeProvider>);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Test Button Text" })
    ).toBeInTheDocument();
  });

  it("opens and closes the add device modal when clicking the button", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <PageHeader title={title} buttonText={buttonText} />
        </ThemeProvider>
      );

    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
    userEvent.click(button);

    const modalTitle = await screen.findByText("Add Device");

    expect(modalTitle).toBeVisible();

    await screen.findByRole("button", { name: "Cancel" });

    userEvent.click(screen.getByRole("button", { name: "Cancel" }));

    await waitFor(() => expect(modalTitle).not.toBeVisible());
  });

  describe("When adding a new device", () => {
    it("Should add the device successfully", async () => {
      const expectedResponse = {
        status: 200,
        data: {
          test: "test",
        },
      };

      sendRequestMock.mockResolvedValue(expectedResponse);

      render(<PageHeaderWithWrapper />);

      const menuButton = screen.getByText(buttonText);
      userEvent.click(menuButton);

      const systemNameInput = screen.getByRole("textbox");
      expect(systemNameInput).toBeInTheDocument();
      const inputText = "TestValue";
      userEvent.type(systemNameInput, inputText);

      const dropdown = screen.getByRole("combobox");
      expect(dropdown).toBeInTheDocument();
      userEvent.selectOptions(dropdown, "windows");

      const hddCapacityInput = screen.getByRole("spinbutton");
      expect(hddCapacityInput).toBeInTheDocument();
      const hddCapacityText = "555";
      userEvent.type(hddCapacityInput, hddCapacityText);

      const confirmButton = await screen.findByText("Submit");
      userEvent.click(confirmButton);

      await waitFor(() => {
        const snackbar = screen.queryByTestId("snackbar");
        expect(snackbar).toHaveStyle({ backgroundColor: colors.success });
      });
    });

    it("Should add with an 500 as a response", async () => {
      const expectedResponse = {
        status: 500,
        data: {
          test: "test",
        },
      };

      sendRequestMock.mockResolvedValue(expectedResponse);

      render(<PageHeaderWithWrapper />);

      const menuButton = screen.getByText(buttonText);
      userEvent.click(menuButton);

      const systemNameInput = screen.getByRole("textbox");
      expect(systemNameInput).toBeInTheDocument();
      const inputText = "TestValue";
      userEvent.type(systemNameInput, inputText);

      const dropdown = screen.getByRole("combobox");
      expect(dropdown).toBeInTheDocument();
      userEvent.selectOptions(dropdown, "windows");

      const hddCapacityInput = screen.getByRole("spinbutton");
      expect(hddCapacityInput).toBeInTheDocument();
      const hddCapacityText = "555";
      userEvent.type(hddCapacityInput, hddCapacityText);

      const confirmButton = await screen.findByText("Submit");
      userEvent.click(confirmButton);

      await waitFor(() => {
        const snackbar = screen.queryByTestId("snackbar");
        expect(snackbar).toHaveStyle({ backgroundColor: colors.alert });
      });
    });
    it("Should add with an 700 as a response", async () => {
      const error = {
        message: 'There was an error'
      };


      sendRequestMock.mockRejectedValue(error);

      render(<PageHeaderWithWrapper />);

      const menuButton = screen.getByText(buttonText);
      userEvent.click(menuButton);

      const systemNameInput = screen.getByRole("textbox");
      expect(systemNameInput).toBeInTheDocument();
      const inputText = "TestValue";
      userEvent.type(systemNameInput, inputText);

      const dropdown = screen.getByRole("combobox");
      expect(dropdown).toBeInTheDocument();
      userEvent.selectOptions(dropdown, "windows");

      const hddCapacityInput = screen.getByRole("spinbutton");
      expect(hddCapacityInput).toBeInTheDocument();
      const hddCapacityText = "555";
      userEvent.type(hddCapacityInput, hddCapacityText);

      const confirmButton = await screen.findByText("Submit");
      userEvent.click(confirmButton);

      await waitFor(() => {
        const snackbar = screen.queryByTestId("snackbar");
        expect(snackbar).toHaveStyle({ backgroundColor: colors.alert });
      });
    });
  });
});
