import { useBooks } from "@/context/BooksProvider/BooksProvider";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect } from "react";

function valuetext(value: number) {
  return `${value}°C`;
}

export default function PriceRangeSlider({ price }: { price: number[] }) {
  const { filterPrice, setSetFilterPrice } = useBooks();

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setSetFilterPrice(newValue as number[]);
  };

  useEffect(() => {
    setSetFilterPrice(price);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price]);

  const marks = [
    {
      value: 0,
      label: "$0",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 40,
      label: "40",
    },
    {
      value: 60,
      label: "60",
    },
    {
      value: 80,
      label: "80",
    },
    {
      value: 100,
      label: "100",
    },
  ];

  return (
    <Box sx={{ width: 280, margin: "auto" }}>
      <Slider
        getAriaLabel={() => "Price range"}
        value={filterPrice}
        onChange={handleChange}
        valueLabelDisplay="auto"
        marks={marks}
        getAriaValueText={valuetext}
        sx={{
          "& .MuiSlider-rail": {
            backgroundColor: "#63422d",
            opacity: ".5",
          },
          "& .MuiSlider-track": {
            backgroundColor: "#63422d",
            border: "transparent",
          },

          "& .MuiSlider-mark": {
            backgroundColor: "#63422d",
            "&.MuiSlider-markActive": {
              opacity: 1,
              backgroundColor: "#63422d",
            },
          },

          "& .MuiSlider-thumb": {
            backgroundColor: "#fff",
            border: "2px solid #63422d",
            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
              boxShadow: "0 0 0 8px #63422d30",
            },
            "&:before": {
              display: "none",
            },
          },
        }}
      />
    </Box>
  );
}
