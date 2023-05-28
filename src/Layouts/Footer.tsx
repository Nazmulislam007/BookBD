import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CallIcon from "@mui/icons-material/Call";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Box, Container, List, ListItem, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box bgcolor="#171d1d">
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "15px",
          py: 8,
        }}
      >
        {/* contact us */}
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <ListItem disablePadding>
            <Typography
              component="p"
              fontSize="13px"
              sx={{
                pl: "12px",
                color: "white",
                textTransform: "uppercase",
                fontWeight: "600",
                ml: "-6px",
                letterSpacing: "1px",
              }}
            >
              contact us
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <AddLocationAltIcon sx={{ color: "#63422d", fontSize: "17px" }} />
            <Typography
              component="p"
              sx={{ pl: "12px", color: "white", fontSize: "16px" }}
            >
              Uttara, Dhaka 1230
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <CallIcon sx={{ color: "#63422d", fontSize: "17px" }} />
            <Typography
              component="p"
              sx={{ pl: "12px", color: "white", fontSize: "16px" }}
            >
              +880 17349 97789
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <EmailOutlinedIcon sx={{ color: "#63422d", fontSize: "17px" }} />
            <Typography
              component="p"
              sx={{ pl: "12px", color: "white", fontSize: "16px" }}
            >
              nazmulislam.ni897@gmail.com
            </Typography>
          </ListItem>
        </List>
        {/* contact us */}
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <ListItem disablePadding>
            <Typography
              component="p"
              fontSize="13px"
              sx={{
                pl: "12px",
                color: "white",
                textTransform: "uppercase",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              contact
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <Typography
              component="p"
              sx={{
                pl: "12px",
                color: "white",
                fontSize: "16px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Who We Are
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <Typography
              component="p"
              sx={{
                pl: "12px",
                color: "white",
                fontSize: "16px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Our Stories
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <Typography
              component="p"
              sx={{
                pl: "12px",
                color: "white",
                fontSize: "16px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Investor Corner
            </Typography>
          </ListItem>
        </List>
        {/* legal */}
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <ListItem disablePadding>
            <Typography
              component="p"
              fontSize="13px"
              sx={{
                pl: "12px",
                color: "white",
                textTransform: "uppercase",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              legal
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <Typography
              component="p"
              sx={{
                pl: "12px",
                color: "white",
                fontSize: "16px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Terms & conditions
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <Typography
              component="p"
              sx={{
                pl: "12px",
                color: "white",
                fontSize: "16px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Privacy Policy
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <Typography
              component="p"
              sx={{
                pl: "12px",
                color: "white",
                fontSize: "16px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Return Policy
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <Typography
              component="p"
              sx={{
                pl: "12px",
                color: "white",
                fontSize: "16px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Security
            </Typography>
          </ListItem>
        </List>
        {/* help */}
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <ListItem disablePadding>
            <Typography
              component="p"
              fontSize="13px"
              sx={{
                pl: "12px",
                color: "white",
                textTransform: "uppercase",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              help
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <Typography
              component="p"
              sx={{
                pl: "12px",
                color: "white",
                fontSize: "16px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Track Orders
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <Typography
              component="p"
              sx={{
                pl: "12px",
                color: "white",
                fontSize: "16px",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Contact Us
            </Typography>
          </ListItem>
        </List>
      </Container>
      <Typography component="p" textAlign="center" py={3} color="white">
        Copyright 2023 © BookBD.
      </Typography>
    </Box>
  );
}
