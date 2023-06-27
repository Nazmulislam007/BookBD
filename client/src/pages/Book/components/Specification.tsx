import { Books } from "@/Types/Books";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

function createData(title: string, value: string) {
  return { title, value };
}

export default function Specification({ book }: { book: Partial<Books> }) {
  const rows = [
    createData("Title", book.title || ""),
    createData("Author", book.authors?.join(", ") || ""),
    createData("Country", book.saleInfo?.country || ""),
    createData("Language", book.language || ""),
    createData("Publish Date", book.publishedDate || ""),
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.title} sx={{ "&:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
