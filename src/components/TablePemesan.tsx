import { Order } from "@/interface/Oder";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface TablePemesanProps {
  orders: Order[];
}

const TablePemesan: React.FC<TablePemesanProps> = ({ orders }) => {
  return (
    <Table>
      {orders.length > 0 ? (
        <TableCaption>List Pemesan Roti</TableCaption>
      ) : (
        <TableCaption>Tidak ada pesanan</TableCaption>
      )}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nama</TableHead>
          <TableHead>Sumber Pesanan</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="">HP</TableHead>
          <TableHead className="">Jumlah Roti</TableHead>
          <TableHead className="">Keterangan</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.length > 0 ? (
          orders.map((data) => (
            <TableRow key={data.nama}>
              <TableCell className="font-medium">{data?.nama}</TableCell>
              <TableCell>{data.sumber}</TableCell>
              <TableCell>{data?.email}</TableCell>
              <TableCell className="">{data?.hp}</TableCell>
              <TableCell className="">{data?.jumlah}</TableCell>
              <TableCell className="">{data?.keterangan}</TableCell>
            </TableRow>
          ))
        ) : (
          <></>
        )}
      </TableBody>
    </Table>
  );
};

export default TablePemesan;
