import { useBooks } from "@/context/BooksProvider/BooksProvider";
import { List, ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import CustomizedBadges from "./CartBadge";

export default function AccountAction() {
  const { setOpenRegister } = useBooks();

  return (
    <List sx={{ display: "flex", alignItems: "center" }}>
      <ListItem sx={{ px: 0, pr: 1, display: { xs: "none", md: "block" } }}>
        <Typography
          component="button"
          sx={{
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: 700,
            textDecoration: "none",
            color: "gray",
            whiteSpace: "nowrap",
          }}
          onClick={() => setOpenRegister(true)}
        >
          login / register
        </Typography>
      </ListItem>
      <ListItem sx={{ px: 0 }}>
        <CustomizedBadges />
      </ListItem>
    </List>
  );
}
