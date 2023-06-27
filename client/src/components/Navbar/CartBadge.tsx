import { useGetCartBooks } from "@/hooks/useAddtoCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge, { BadgeProps } from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "#63422d",
  },
}));

export default function CustomizedBadges() {
  const { data } = useGetCartBooks();

  return (
    <Link to="/shopping-cart">
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={data?.length} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Link>
  );
}
