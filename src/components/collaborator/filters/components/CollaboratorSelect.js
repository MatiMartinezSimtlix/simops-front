import styled from "styled-components";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

function CollaboratorSelect(props) {
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
        <MenuItem value={true}>TRUE</MenuItem>
        <MenuItem value={false}>FALSE</MenuItem>
      </Select>
    </FormControlCustom>
  );
}

export default CollaboratorSelect;

const FormControlCustom = styled(FormControl)`
  width: 125px;
`;
