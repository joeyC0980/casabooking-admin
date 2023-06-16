import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 5555555,
      product: "Hotel 1",
      img: "data:image/png;base64,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",
      customer: "A'Guy",
      date: "1 June",
      amount: 400,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 6666666,
      product: "Hotel 2",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZE5YiaJ8G2EcrUaAn4GZymnR8PGW8QAw8uw&usqp=CAU",
      customer: "Laugh Person",
      date: "5 June",
      amount: 500,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 7777777,
      product: "Hotel 3",
      img: "https://im.indiatimes.in/content/itimes/blog/2014/Jul/9/1404917161-best-cartoon-character.jpg",
      customer: "Cat Person",
      date: "10 June",
      amount: 1035,
      method: "Online Payment",
      status: "Approved",
    },

  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Booking</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;