import { render, screen } from "@testing-library/react";
import FormSelect from "./FormSelect";
import { FormProvider, useForm } from "react-hook-form";
import { sortingTypes } from "../../providers/DevicesProvider/constants";
import { ThemeProvider } from 'styled-components'
import { lightTheme } from "../../styles/themes";

const WithFormProvider = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({
    defaultValues: {
      input_1: "",
    },
  });

  return (
    <ThemeProvider theme={lightTheme}>
    <FormProvider {...methods}>
      <form>{children}</form>
    </FormProvider>
    </ThemeProvider>
  );
};

describe("Select component", () => {
  it("renders label and select element", () => {
    render(
      <WithFormProvider>
        <FormSelect
          label="Name"
          items={sortingTypes}
          name="input_1"
          placeholder="placeholder-test"
        />
      </WithFormProvider>
    );

    const labelElement = screen.getByText("Name");
    const selectElement = screen.getByRole("combobox", { name: "" });
    expect(labelElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
  });
});
