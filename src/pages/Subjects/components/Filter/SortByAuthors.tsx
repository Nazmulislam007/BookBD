import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

export default function SortByAuthors({ authors }: { authors: string[] }) {
  return (
    <FormGroup>
      {authors.map((author, i) => (
        <FormControlLabel
          key={i}
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
          label={author}
        />
      ))}
    </FormGroup>
  );
}
