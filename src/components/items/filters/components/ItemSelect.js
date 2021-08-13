import styled from "styled-components";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

function ItemSelect(props) {
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
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControlCustom>
  );
}

export default ItemSelect;

const FormControlCustom = styled(FormControl)`
  width: 125px;
`;
