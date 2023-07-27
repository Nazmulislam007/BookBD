import { UserType } from "@/Types/Books";
import { useAuth } from "@/context/AuthProvider/AuthProvider";
import { useBooks } from "@/context/BooksProvider/BooksProvider";
import { List, ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import AccountAvatar from "./AccountAvatar";
import CustomizedBadges from "./CartBadge";

export default function AccountAction() {
  const { setOpenRegister } = useBooks();
  const { user } = useAuth() || {};

  const isEmpty = Object.keys(user).length === 0;

  return (
    <List sx={{ display: "flex", alignItems: "center" }}>
      {isEmpty && (
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
      {!isEmpty && (
        <ListItem sx={{ px: 0 }}>
          <AccountAvatar user={user as UserType} />
        </ListItem>
      )}
    </List>
  );
}
