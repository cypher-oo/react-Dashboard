import {
  Box,
  Card,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { FC } from "react";
import ScrollBar from "simplebar-react";
import { Theme } from "@mui/material/styles";


interface Order {
  customerName: string;
  customerImage: string;
  orderNo: string;
  amount: string;
  status: string;
}


const orders: Order[] = [
  {
    customerName: "John Doe",
    customerImage: "https://randomuser.me/api/portraits/women/0.jpg",
    orderNo: "#ORD1234",
    amount: "$100",
    status: "Delivered",
  },
  {
    customerName: "Jane Smith",
    customerImage: "https://randomuser.me/api/portraits/men/78.jpg",
    orderNo: "#ORD1235",
    amount: "$200",
    status: "Canceled",
  },
  {
    customerName: "John Doe",
    customerImage: "http://t.ly/wSity",
    orderNo: "#ORD1234",
    amount: "$100",
    status: "Delivered",
  },
  {
    customerName: "Jane Smith",
    customerImage: "https://randomuser.me/api/portraits/men/20.jpg",
    orderNo: "#ORD1235",
    amount: "$200",
    status: "Canceled",
  },
  {
    customerName: "John Doe",
    customerImage: "http://t.ly/nXJHm",
    orderNo: "#ORD1234",
    amount: "$100",
    status: "Delivered",
  },
  {
    customerName: "Jane Smith",
    customerImage: "http://t.ly/s8m8t",
    orderNo: "#ORD1235",
    amount: "$200",
    status: "Canceled",
  },
];


const HeadTableCell = styled(TableCell)(({ theme }: { theme: Theme }) => ({
  fontSize: 14,
  fontWeight: 600,
  color: theme.palette.text.primary,
  borderBottom: "2px solid gray", 
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
}));

const BodyTableCell = styled(TableCell)(({ theme }: { theme: Theme }) => ({
  fontSize: 14,
  padding: "0.8rem", 
  borderBottom: "1px solid #ddd",
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    padding: "0.6rem", 
  },
}));

const StatusText = styled(Box)<{ status: string }>(({ status }) => ({
  display: "inline-block",
  padding: "5px 9px",
  borderRadius: "1rem",
  backgroundColor:
    status === "Delivered"
      ? "green"
      : status === "Canceled"
      ? "red"
      : "transparent",
  color: "white",
}));

const ResponsiveTable: FC = () => {
  return (
    <Card
      sx={{
        padding: "2rem",
        overflowX: "auto",
        backgroundColor: "#1E293B",
        color: "white",
        border: 0,
      }}
    >
      <Box mb={2}>
        <h3>Recent Orders</h3>
      </Box>

      <ScrollBar>
        <Table sx={{ backgroundColor: "#1E293B", color: "white" }}>
          <TableHead>
            <TableRow>
              <HeadTableCell sx={{ color: "white" }}>Customer</HeadTableCell>
              <HeadTableCell sx={{ color: "white" }}>Order No</HeadTableCell>
              <HeadTableCell sx={{ color: "white" }}>Amount</HeadTableCell>
              <HeadTableCell sx={{ color: "white" }}>Status</HeadTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <BodyTableCell sx={{ color: "white" }}>
                  <Box display="flex" alignItems="center">
                    <img
                      src={order.customerImage}
                      alt={order.customerName}
                      width="40px"
                      style={{ borderRadius: "50%" }}
                    />
                    <Box ml={2}>{order.customerName}</Box>
                  </Box>
                </BodyTableCell>
                <BodyTableCell sx={{ color: "white" }}>
                  {order.orderNo}
                </BodyTableCell>
                <BodyTableCell sx={{ color: "white" }}>
                  {order.amount}
                </BodyTableCell>
                <BodyTableCell>
                  <StatusText status={order.status}>{order.status}</StatusText>
                </BodyTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollBar>
    </Card>
  );
};

export default ResponsiveTable;
