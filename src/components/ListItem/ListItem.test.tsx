import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListItem from "./ListItem";
import { DevicesProvider } from "../../providers/DevicesProvider/DevicesProvider";
import SnackbarProvider from "../../providers/SnackbarProvider/SnackbarProvider";
import { sendRequest } from "../../service";
import { colors } from "../../styles";

jest.mock("../../service", () => ({
  sendRequest: jest.fn(),
}));

const mockDevice = {
  id: "1",
  system_name: "Device 1",
  type: "WINDOWS",
  hdd_capacity: "500",
};

const sendRequestMock = sendRequest as jest.Mocked<any>;

const ListItemWithWrapper = () => {
  return (
    <DevicesProvider>
      <SnackbarProvider>
        <ListItem item={mockDevice} />
      </SnackbarProvider>
    </DevicesProvider>
  );
};

describe("ListItem", () => {
  describe("When clicking on the menu icon", () => {
    it("Should open the floating menu", async () => {
      render(<ListItem item={mockDevice} />);

      const menuButton = screen.getByAltText("More");
      userEvent.click(menuButton);

      const editMenuItem = await screen.findByText("Edit");
      expect(editMenuItem).toBeInTheDocument();
    });

    ["Edit", "Delete"].forEach((item) => {
      describe(`And clicking on the item: ${item}`, () => {
        it(`clicking on the ${item.toLowerCase()} menu item opens the ${item.toLowerCase()} modal and closes when cancel is clicked`, async () => {
          render(<ListItem item={mockDevice} />);
          const moreButton = "More";
          const deleteModalTitle = "Delete device?";
          const editModalTitle = "Edit device";

          const menuButton = screen.getByAltText(moreButton);
          userEvent.click(menuButton);

          const menuItem = await screen.findByText(item);
          userEvent.click(menuItem);

          const title = await screen.findByText(
            item === "Edit" ? editModalTitle : deleteModalTitle
          );

          const cancelButton = await screen.findByRole("button", {
            name: "Cancel",
          });

          expect(title).toBeVisible();
          userEvent.click(cancelButton);
          expect(title).not.toBeVisible();
        });
      });
    });
  });

  describe("When clicking outside the menu container", () => {
    it("Should remove menu from screen", async () => {
      render(<ListItem item={mockDevice} />);

      const menuButton = screen.getByAltText("More");
      userEvent.click(menuButton);

      const editMenuItem = await screen.findByText("Edit");
      expect(editMenuItem).toBeInTheDocument();

      const logoImages = screen.getAllByRole("img");
      userEvent.click(logoImages[0]);

      await waitFor(() => expect(editMenuItem).not.toBeInTheDocument());
    });
  });

  describe("When clicking on the Delete item on the menu", () => {
    describe("And canceling the operation", () => {
      it("Should remove the Edit modal from the screen", async () => {
        render(<ListItem item={mockDevice} />);

        const menuButton = screen.getByAltText("More");
        userEvent.click(menuButton);

        const editMenuItem = await screen.findByText("Delete");
        userEvent.click(editMenuItem);

        const cancel = await screen.findByRole("button", { name: "Cancel" });
        userEvent.click(cancel);

        const title = await screen.findByText("Delete device?");

        await waitFor(() => expect(title).not.toBeVisible());
      });
    });

    describe("And confirming the operation", () => {
      it("Should make the request successfully", async () => {
        const expectedResponse = {
          status: 200,
          data: {
            test: "test",
          },
        };

        sendRequestMock.mockResolvedValue(expectedResponse);

        render(<ListItemWithWrapper />);

        const menuButton = screen.getByAltText("More");
        userEvent.click(menuButton);

        const editMenuItem = await screen.findByText("Delete");
        userEvent.click(editMenuItem);

        const confirmButton = await screen.findByText("delete");
        userEvent.click(confirmButton);

        const snackbar = screen.queryByTestId("snackbar");
        expect(snackbar).toBeInTheDocument();
        await waitFor(() => {
          expect(snackbar).toHaveStyle({ backgroundColor: colors.success });
        });
      });

      it("Should make the request but fail if there's an error", async () => {
        const expectedResponse = {
          status: 500,
          data: {
            test: "test",
          },
        };

        sendRequestMock.mockResolvedValue(expectedResponse);

        render(<ListItemWithWrapper />);

        const menuButton = screen.getByAltText("More");
        userEvent.click(menuButton);

        const editMenuItem = await screen.findByText("Delete");
        userEvent.click(editMenuItem);

        const confirmButton = await screen.findByText("delete");
        userEvent.click(confirmButton);

        const snackbar = screen.queryByTestId("snackbar");
        expect(snackbar).toBeInTheDocument();
        await waitFor(() => {
          expect(snackbar).toHaveStyle({ backgroundColor: colors.alert });
        });
      });
    });
  });

  describe("When clicking on the Edit item on the menu", () => {
    describe("And canceling the operation", () => {
      it("Should remove the Edit modal from the screen", async () => {
        render(<ListItem item={mockDevice} />);

        const menuButton = screen.getByAltText("More");
        userEvent.click(menuButton);

        const editMenuItem = await screen.findByText("Edit");
        userEvent.click(editMenuItem);

        const cancel = await screen.findByRole("button", { name: "Cancel" });
        userEvent.click(cancel);

        const title = await screen.findByText("Edit device");

        await waitFor(() => expect(title).not.toBeVisible());
      });
    });

    describe("And confirming the operation", () => {
      it("Should try to make the request without changing anything", async () => {
        const expectedResponse = {
          status: 200,
          data: {
            test: "test",
          },
        };

        sendRequestMock.mockResolvedValue(expectedResponse);

        render(<ListItemWithWrapper />);

        const menuButton = screen.getByAltText("More");
        userEvent.click(menuButton);

        const editMenuItem = await screen.findByText("Edit");
        userEvent.click(editMenuItem);

        const confirmButton = await screen.findByText("Submit");
        userEvent.click(confirmButton);

        const snackbar = screen.queryByTestId("snackbar");

        expect(snackbar).not.toBeVisible();
      });
      it("Should make the request successfully", async () => {
        const expectedResponse = {
          status: 200,
          data: {
            test: "test",
          },
        };

        sendRequestMock.mockResolvedValue(expectedResponse);

        render(<ListItemWithWrapper />);

        const menuButton = screen.getByAltText("More");
        userEvent.click(menuButton);

        const editMenuItem = await screen.findByText("Edit");
        userEvent.click(editMenuItem);

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
      it("Should make the request but get an error from the server", async () => {
        const expectedResponse = {
          status: 500,
          data: {
            test: "Error",
          },
        };

        sendRequestMock.mockResolvedValue(expectedResponse);

        render(<ListItemWithWrapper />);

        const menuButton = screen.getByAltText("More");
        userEvent.click(menuButton);

        const editMenuItem = await screen.findByText("Edit");
        userEvent.click(editMenuItem);

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
});
