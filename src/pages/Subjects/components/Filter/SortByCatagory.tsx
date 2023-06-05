import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import * as React from "react";

export default function ShortByCatagory() {
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
      <FormControlLabel
        value="female"
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
        label="Female"
      />
      <FormControlLabel
        value="male"
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
        label="Male"
      />
      <FormControlLabel
        value="male"
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
        label="Male"
      />
    </RadioGroup>
  );
}
