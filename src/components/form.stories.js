import React from "react";
import { storiesOf } from "@storybook/react";

import { Helper, Input, Label, Select } from "./";

const defaultInputProps = {
  onChange: console.log,
};

const formProps = {
  onSubmit: e => e.preventDefault(),
};

const renderContent = ({
  inputProps = {},
  withHelper = false,
  withLabel = false,
} = {}) => (
  <form {...formProps}>
    <div>
      {withLabel && <Label htmlFor="first-name-input-id">First name</Label>}
      <Input
        {...defaultInputProps}
        {...inputProps}
        id="first-name-input-id"
        placeholder="First name"
      />
      {withHelper && <Helper>First name helper</Helper>}
    </div>

    <div>
      {withLabel && <Label htmlFor="last-name-input-id">Last name</Label>}
      <Input
        {...defaultInputProps}
        {...inputProps}
        id="last-name-input-id"
        placeholder="Last name"
      />
      {withHelper && <Helper>Last name helper</Helper>}
    </div>

    <div>
      {withLabel && <Label htmlFor="city-select-id">City</Label>}
      <Select
        {...defaultInputProps}
        {...inputProps}
        id="city-select-id"
        options={[
          {
            label: "Paris",
            value: "PRS",
          },
          {
            label: "Bruxelles",
            value: "BXL",
          },
        ]}
      />
      {withHelper && <Helper>City helper</Helper>}
    </div>

    <div>
      {withLabel && <Label htmlFor="email-input-id">Email</Label>}
      <Input
        {...defaultInputProps}
        {...inputProps}
        id="email-input-id"
        type="email"
        placeholder="Email"
      />
      {withHelper && <Helper>Email helper</Helper>}
    </div>
  </form>
);

storiesOf("Form", module)
  .add("Default", () => renderContent())
  .add("With helper", () => renderContent({ withHelper: true }))
  .add("With label", () => renderContent({ withLabel: true }))
  .add("With helper and label", () =>
    renderContent({ withHelper: true, withLabel: true })
  )
  .add("With valid state", () =>
    renderContent({
      withHelper: true,
      withLabel: true,
      inputProps: { valid: true },
    })
  )
  .add("With invalid state", () =>
    renderContent({
      withHelper: true,
      withLabel: true,
      inputProps: { invalid: true },
    })
  )
  .add("With disable state", () =>
    renderContent({
      withHelper: true,
      withLabel: true,
      inputProps: { disabled: true },
    })
  );
