import { List, ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import CustomizedBadges from "./CartBadge";

export default function AccountAction() {
  return (
    <List sx={{ display: "flex", alignItems: "center" }}>
      <ListItem sx={{ px: 0, pr: 1 }}>
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
