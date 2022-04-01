import { Input, InputNumber } from "antd";
import React from "react";

function FieldModal() {
  return (
    <div class="field-group">
      <Input label="input-label" name="input-name" required></Input>
      <InputNumber
        label="ipnumber-label"
        name="inpnumber-name"
        required
      ></InputNumber>
    </div>
  );
}
//<Dropdown label = "dp-label" name ="dr-name" required></Dropdown>
export default FieldModal;
