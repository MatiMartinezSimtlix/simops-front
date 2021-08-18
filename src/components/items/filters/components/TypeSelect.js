import styled from "styled-components";

import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { itemEnums } from "../../../../utils/enums";

function TypeSelect(props) {
  return (
    <FormControlCustom>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      >
        <MenuItem value="">ALL</MenuItem>
        {itemEnums.map((item) => (
          <MenuItem value={item.id}>{item.id}</MenuItem>
        ))}
      </Select>
    </FormControlCustom>
  );
}

export default TypeSelect;

const FormControlCustom = styled(FormControl)`
  width: 125px;
`;
