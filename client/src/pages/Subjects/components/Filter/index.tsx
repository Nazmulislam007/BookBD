import { Books } from "@/Types/Books";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@/assets/theme/Accordion";
import { useAllBooks } from "@/hooks/useBooks";
import Typography from "@mui/material/Typography";
import * as React from "react";
import PriceRangeSlider from "./PriceRange";
import SortByAuthors from "./SortByAuthors";
import ShortByCatagory from "./SortByCatagory";
import SortByRatting from "./SortByRating";

export default function FilterBooks() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const { data, isLoading, isError } = useAllBooks();

  const newData: Partial<Books>[] = data;

  // concat all nested arrray catagory in a simple array
  const catagory = [
    ...new Set(
      newData?.reduce((acc, curr) => acc.concat(curr.catagories as []), [])
    ),
  ];
  // concat all nested arrray subCatagory in a simple array
  const subCatagory = [
    ...new Set(
      newData?.reduce((acc, curr) => acc.concat(curr.subCatagory as []), [])
    ),
  ];
  // concat all nested arrray authors in a simple array
  const authors: string[] = [
    ...new Set(
      newData?.reduce((acc, curr) => acc.concat(curr.authors as []), [])
    ),
  ].sort();

  const totalCatagory: string[] = catagory.concat(subCatagory).sort();

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error...</span>;

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
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
            FILTER BY CATAGRORY
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ height: "300px", overflow: "auto" }}>
          <ShortByCatagory totalCatagory={totalCatagory} />
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
        <AccordionDetails sx={{ height: "300px", overflow: "auto" }}>
          <SortByAuthors authors={authors} />
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
