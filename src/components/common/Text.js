import React from "react";
import styled from "styled-components";

import { Typography } from "@material-ui/core";

const Text = (props) => {
  const { fontSize, fontWeight, texttransform, textcolor } = props;

  return (
    <CustomTypography
      fontSize={fontSize}
      fontWeight={fontWeight}
      texttransform={texttransform}
      textcolor={textcolor}
      {...props}
    >
      {props.children}
    </CustomTypography>
  );
};

export default Text;

const CustomTypography = styled(Typography)`
  font-size: ${(p) => p.fontSize};
  font-weight: ${(p) => p.fontWeight};
  text-transform: ${(p) => p.texttransform};
  color: ${(p) => p.textcolor};
`;
