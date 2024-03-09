import React from "react";
import { Field, ErrorMessage } from "formik";
import { Info } from "./Info";

interface FormFieldProps {
  field: {
    field_id: string;
    field_label: string;
    field_type: string;
    field_options?: { value: string; Label: string }[];
    validations: string[];
    info: string;
  };
}

const FormSection: React.FC<FormFieldProps> = ({ field }: any) => {
  return (
    <div className="mb-4">
      <div
        className={`${
          field.section_name === ""
            ? ""
            : "border-solid border-2 border-black p-5 font-semibold"
        }`}
      >
        {field.section_name}
      </div>
      <div className="mt-2 px-8 grid sm:grid-cols-2 sm:gap-4 items-center ">
        <label
          htmlFor={field.field_id}
          className="block text-sm font-medium text-gray-700"
        >
          {field.field_label}
        </label>
        <div className="flex justify-between items-center">
          {field.field_type === "text" && (
            <Field
              type="text"
              id={field.field_id}
              name={field.field_id}
              className="mt-1 p-2 border border-black w-3/4"
              placeHolder={`Enter ${field.field_label}`}
            />
          )}
          {field.field_type === "radio" &&
            field.field_options &&
            field.field_options.map((option: any) => (
              <div key={option.value} className="flex items-center">
                <Field
                  type="radio"
                  id={option.value}
                  name={field.field_id}
                  value={option.value}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <label
                  htmlFor={option.value}
                  className="ml-2 text-sm text-gray-700"
                >
                  {option.Label}
                </label>
              </div>
            ))}
          {field.field_type === "select" && (
            <Field
              as="select"
              id={field.field_id}
              name={field.field_id}
              className="mt-1 p-2 border border-black w-3/4"
            >
              <option value="">Select</option>
              {field.field_options &&
                field.field_options.map((option: any) => (
                  <option key={option.value} value={option.value}>
                    {option.Label}
                  </option>
                ))}
            </Field>
          )}
          <p className="text-gray-500 text-xs mt-1">
            <Info>
              <p className="p-2">{field.info}</p>
            </Info>
          </p>
        </div>
        <ErrorMessage
          name={field.field_id}
          component="div"
          className="text-red-500 text-sm mt-1"
        />
      </div>
    </div>
  );
};

export default FormSection;
