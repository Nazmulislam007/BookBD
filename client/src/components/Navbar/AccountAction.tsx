import { useAuth } from "@/context/AuthProvider/AuthProvider";
import { useBooks } from "@/context/BooksProvider/BooksProvider";
import { List, ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import AccountAvatar from "./AccountAvatar/AccountAvatar";
import CustomizedBadges from "./CartBadge";

export default function AccountAction() {
  const { setOpenRegister } = useBooks();
  const { user } = useAuth() || {};

  return (
    <List
      sx={{
        display: "flex",
        alignItems: "center",
        padding: { xs: "0", sm: "8px 0px" },
      }}
    >
      {!user.status && (
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
      )}
      <ListItem sx={{ px: 0, width: "fit-content" }}>
        <CustomizedBadges />
      </ListItem>
      {user.status && (
        <ListItem sx={{ px: 0 }}>
          <AccountAvatar user={user} />
        </ListItem>
      )}
    </List>
  );
}
