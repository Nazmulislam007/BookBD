import { Books } from "@/Types/Books";
import { useBooks } from "@/context/BooksProvider/BooksProvider";
import { useSearchedBooks } from "@/hooks/useBooks";
import { debounce } from "@/lib";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase, Stack, Typography, styled } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: "#f2f2f6",
  border: "1px solid #dfdfdf",
  "&:hover": {
    border: "1px solid gray",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export default function SearchBox() {
  const { search, setSearch } = useBooks();
  const { isLoading, isError, data } = useSearchedBooks({
    search,
  });

  const handleSearch = debounce(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSearch(e.target.value);
    },
    500
  );

  let content = null;

  if (!isLoading && !isError && data.books.length > 0)
    content = (data.books as Partial<Books[]>).map((book) => (
      <Stack key={book?._id} direction="row" gap="10px">
        <Box sx={{ maxWidth: "45px" }}>
          <img
            src={book?.imageLinks.thumbnail}
            alt="img"
            style={{ display: "block", maxWidth: "100%" }}
          />
        </Box>
        <Box>
          <Typography component="p" fontSize="17px" className="single-ellipsis">
            {book?.title}
          </Typography>
          <Typography component="p" fontSize="13px">
            {book?.authors[0]}
          </Typography>
        </Box>
      </Stack>
    ));

  if (!isLoading && !isError && data.books.length === 0)
    content = <Typography component="p">No books founded</Typography>;

  return (
    <Search sx={{ display: { xs: "none", sm: "block", position: "relative" } }}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        onChange={(e) => handleSearch(e)}
        inputProps={{ "aria-label": "search" }}
      />
      {/* search result */}
      {search !== "" && (
        <Stack
          direction="column"
          sx={{
            position: "absolute",
            gap: "15px",
            top: "110%",
            width: "100%",
            maxHeight: "400px",
            overflow: "auto",
            left: 0,
            background: "white",
            boxShadow: 1,
            borderRadius: "5px",
            padding: "15px",
            zIndex: 100,
          }}
        >
          {content}
        </Stack>
      )}
    </Search>
  );
}
