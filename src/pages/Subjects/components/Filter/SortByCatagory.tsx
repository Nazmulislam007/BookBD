import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import * as React from "react";

export default function ShortByCatagory({
  totalCatagory,
}: {
  totalCatagory: string[];
}) {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      value={value}
      onChange={handleChange}
    >
      {totalCatagory.map((cata, i) => (
        <FormControlLabel
          key={i}
          value={cata}
          control={
            <Radio
              sx={{
                "& .MuiSvgIcon-root": {
                  fontSize: "18px",
                },
                "& + .MuiFormControlLabel-label": {
                  fontSize: "14px",
                },
              }}
            />
          }
          label={cata}
        />
      ))}
    </RadioGroup>
  );
}
