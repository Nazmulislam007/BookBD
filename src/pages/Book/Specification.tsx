import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

function createData(title: string, value: string) {
  return { title, value };
}

const rows = [
  createData("Title", "The 7 habits of highly effective poeple"),
  createData("Author", "Steven R. Convey"),
  createData("Publisher", "England"),
  createData("Country", "Bangladesh"),
  createData("Language", "English"),
];

export default function Specification() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
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
