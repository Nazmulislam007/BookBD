import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import PriceRangeSlider from "./PriceRange";
import SortByAuthors from "./SortByAuthors";
import ShortByCatagory from "./SortByCatagory";
import SortByRatting from "./SortByRating";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography
            component="p"
            fontSize="13px"
            fontWeight="600"
            letterSpacing="0.3"
          >
            SROT BY CATAGRORY
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ShortByCatagory />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography
            component="p"
            fontSize="13px"
            fontWeight="600"
            letterSpacing="0.3"
          >
            AUTHORS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SortByAuthors />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionDetails>
          <Typography
            component="p"
            fontSize="13px"
            fontWeight="600"
            letterSpacing="0.3"
            mb={1}
          >
            PRICE RANGE
          </Typography>
          <PriceRangeSlider />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography
            component="p"
            fontSize="13px"
            fontWeight="600"
            letterSpacing="0.3"
          >
            RATINGS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SortByRatting />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
