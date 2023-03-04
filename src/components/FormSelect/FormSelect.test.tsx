import { render, screen, waitFor } from "@testing-library/react";
import FormSelect from "./FormSelect";
import { FormProvider, useForm } from "react-hook-form";
import userEvent from "@testing-library/user-event";
import { sortingTypes } from "../../providers/DevicesProvider/constants";

const WithFormProvider = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({
    defaultValues: {
      input_1: "",
    },
  });
  const onSubmit = (data: any) => {
    console.log("submitting: ", data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
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
