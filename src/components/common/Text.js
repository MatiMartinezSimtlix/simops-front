import React from "react";
import styled from "styled-components";

import { Typography } from "@material-ui/core";

const Text = (props) => {
  const { fontSize, fontWeight, textTransform, textColor } = props;

  return (
    <CustomTypography
      fontSize={fontSize}
      fontWeight={fontWeight}
      textTransform={textTransform}
      textColor={textColor}
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
  text-transform: ${(p) => p.textTransform};
  color: ${(p) => p.color};
`;
