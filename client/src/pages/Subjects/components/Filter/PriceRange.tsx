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
    if (price?.length > 0) setSetFilterPrice(price);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price]);

  const minPrice = Math.floor(price && price[0]);
  const maxPrice = Math.floor(price && price[1]);

  const _2lv = Math.floor(maxPrice * (2 / 5));
  const _3lv = Math.floor(maxPrice / 2);
  const _4lv = Math.floor(maxPrice * (4 / 5));

  const marks = [
    {
      value: minPrice,
      label: `$${minPrice}`,
    },
    {
      value: _2lv,
      label: `$${_2lv}`,
    },
    {
      value: _3lv,
      label: `$${_3lv}`,
    },
    {
      value: _4lv,
      label: `$${_4lv}`,
    },
    {
      value: maxPrice,
      label: `$${maxPrice}`,
    },
  ];

  return (
    <Box sx={{ width: 280 }}>
      <Slider
        min={price && price[0]}
        max={price && price[1]}
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
