import React, { useState } from "react";
import styled from "styled-components";

import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Text from "../../../common/Text";

function MoreSpecification({ specification }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        size="small"
        onClick={handleClick}
      >
        Show info
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Container>
          <Text fontSize="0.75rem" fontWeight="700">
            Brand: {specification.brand}
          </Text>
          <Text fontSize="0.75rem" fontWeight="700">
            Model: {specification.model}
          </Text>
          <Text fontSize="0.75rem" fontWeight="700">
            Technical Details:{" "}
            {specification.technicalDetails === "empty"
              ? "?"
              : specification.technicalDetails}
          </Text>
        </Container>
      </Popover>
    </div>
  );
}

export default MoreSpecification;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 1rem;
`;
