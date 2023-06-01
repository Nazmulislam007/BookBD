import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

export default function SortByAuthors() {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 20 },
              "& + .MuiFormControlLabel-label": {
                fontSize: "14px",
              },

              color: "#63422d",
              "&.Mui-checked": {
                color: "#63422d",
              },
            }}
          />
        }
        label="Steven R. Convey"
      />
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 20 },
              "& + .MuiFormControlLabel-label": {
                fontSize: "14px",
              },
              color: "#63422d",
              "&.Mui-checked": {
                color: "#63422d",
              },
            }}
          />
        }
        label="Steven R. Convey"
      />
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 20 },
              "& + .MuiFormControlLabel-label": {
                fontSize: "14px",
              },
              color: "#63422d",
              "&.Mui-checked": {
                color: "#63422d",
              },
            }}
          />
        }
        label="Steven R. Convey"
      />
    </FormGroup>
  );
}
