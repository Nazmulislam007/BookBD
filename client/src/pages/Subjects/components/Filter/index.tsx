import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@/assets/theme/Accordion";
import { useBooks } from "@/context/BooksProvider/BooksProvider";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import { UseQueryResult } from "react-query";
import PriceRangeSlider from "./PriceRange";
import SortByAuthors from "./SortByAuthors";
import ShortByCatagory from "./SortByCatagory";
import SortByRatting from "./SortByRating";

type FilterItems = {
  categories: string[];
  sub_categories: string[];
  authors: string[];
  price: number[];
  refetch: () => Promise<UseQueryResult>;
};

export default function FilterBooks({
  authors,
  categories,
  price,
  sub_categories,
  refetch,
}: FilterItems) {
  const matches = useMediaQuery("(min-width:600px)");
  const { sortedBooks } = useBooks();
  const [expanded, setExpanded] = React.useState({
    panel1: matches,
    panel2: matches,
    panel3: matches,
    panel4: matches,
  });

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded({
        ...expanded,
        [panel]: newExpanded,
      });
    };

  const isSelectedCategroies = sortedBooks.filterByCategories.length > 0;

  return (
    <>
      <Accordion expanded={expanded.panel1} onChange={handleChange("panel1")}>
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
        <AccordionDetails sx={{ maxHeight: "300px", overflow: "auto" }}>
          <ShortByCatagory
            totalCatagory={categories.sort()}
            cate
            refetch={refetch}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded.panel2}
        onChange={handleChange("panel1")}
        sx={{
          display: isSelectedCategroies ? "block" : "none",
        }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography
            component="p"
            fontSize="13px"
            fontWeight="600"
            letterSpacing="0.3"
          >
            FILTER BY SUB-CATAGRORY
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ maxHeight: "300px", overflow: "auto" }}>
          <ShortByCatagory
            totalCatagory={sub_categories.sort()}
            cate={false}
            refetch={refetch}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded.panel3} onChange={handleChange("panel2")}>
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
        <AccordionDetails sx={{ maxHeight: "300px", overflow: "auto" }}>
          <SortByAuthors authors={authors.sort()} />
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
          <PriceRangeSlider price={price} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded.panel4} onChange={handleChange("panel3")}>
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
        <AccordionDetails sx={{ p: "10px 6px" }}>
          <SortByRatting />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
