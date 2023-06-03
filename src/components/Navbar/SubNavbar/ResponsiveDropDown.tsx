import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ListItem } from "@mui/material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

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
  padding: theme.spacing(1),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function ResponsiveDropDown() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontSize="14px">TOP RATED</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListItem>Profile</ListItem>
          <ListItem>My account</ListItem>
          <ListItem>Logout</ListItem>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography fontSize="14px">TOP RATED</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListItem>Profile</ListItem>
          <ListItem>My account</ListItem>
          <ListItem>Logout</ListItem>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography fontSize="14px">TOP RATED</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListItem>Profile</ListItem>
          <ListItem>My account</ListItem>
          <ListItem>Logout</ListItem>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
