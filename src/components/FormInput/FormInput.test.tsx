import { render, screen, waitFor } from "@testing-library/react";
import FormInput from "./FormInput";
import { FormProvider, useForm } from "react-hook-form";
import userEvent from "@testing-library/user-event";

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

describe("Input component", () => {
  it("renders label and input element", () => {
    render(
      <WithFormProvider>
        <FormInput label="Name" type="text" name="input_1" />
      </WithFormProvider>
    );

    const labelElement = screen.getByText("Name");
    const inputElement = screen.getByRole("textbox", { name: "" });
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    // const inputElement = screen.getByRole("textbox", { name: "Name" });
    // screen.debug();
    // expect(labelElement).toBeInTheDocument();
    // expect(inputElement).toBeInTheDocument();
  });

  it("displays error message when input is invalid", async () => {
    render(
      <WithFormProvider>
        <FormInput label="Name" type="text" name="input_1" />
        <button type="submit">submit</button>
      </WithFormProvider>
    );
    const inputElement = screen.getByRole("textbox", { name: "" });
    expect(inputElement).toBeInTheDocument();
    await userEvent.type(inputElement, "");
    await userEvent.click(screen.getByText("submit"));

    await waitFor(() => {
      const errorMessage = screen.getByText("This field is required");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
