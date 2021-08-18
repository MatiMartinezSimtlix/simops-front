import React from "react";

import Text from "../../../common/Text";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { ExpandMoreRounded } from "@material-ui/icons";

const CustomAccordion = ({ children, title }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreRounded />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Text fontSize="1rem" fontWeight="700">
          {title}
        </Text>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
