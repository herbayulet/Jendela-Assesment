import { Order } from "@/interface/Oder";
import { useMediaQuery } from "react-responsive";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Card, CardContent } from "./ui/card";
import { MdDelete } from "react-icons/md";
import React from "react";

interface TablePemesanProps {
  orders: Order[];
}

const TablePemesan: React.FC<TablePemesanProps> = ({ orders }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 650 });

  return (
    <>
      {isSmallScreen ? (
        <Card className="w-full">
          <CardContent>
            {orders.length > 0 ? (
              <TableCaption className="flex items-center justify-center mb-2">
                List Pemesan Roti
              </TableCaption>
            ) : (
              <TableCaption className="flex items-center justify-center mb-2">
                Tidak ada pesanan
              </TableCaption>
            )}
            {orders.map((data) => (
              <div key={data.nama} className="grid grid-cols-2 gap-4">
                <div className="col-span-1">{data?.nama}</div>
                <div className="col-span-1">{data.sumber}</div>
                <div className="col-span-1">{data?.email}</div>
                <div className="col-span-1">{data?.hp}</div>
                <div className="col-span-1">{data?.jumlah}</div>
                <div className="col-span-1">{data?.keterangan}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      ) : (
        <div className={`${isSmallScreen ? "hidden" : ""}`}>
          <Table className="w-full table-auto">
            {orders.length > 0 ? (
              <TableCaption>List Pemesan Roti</TableCaption>
            ) : (
              <TableCaption>Tidak ada pesanan</TableCaption>
            )}
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-sm">Nama</TableHead>
                <TableHead className="text-sm">Sumber Pesanan</TableHead>
                <TableHead className="text-sm">Email</TableHead>
                <TableHead className="text-sm whitespace-nowrap">HP</TableHead>
                <TableHead className="text-sm whitespace-nowrap">
                  Jumlah Roti
                </TableHead>
                <TableHead className="text-sm whitespace-nowrap">
                  Keterangan
                </TableHead>
                <TableHead className="text-sm whitespace-nowrap">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.length > 0 ? (
                orders.map((data, id) => (
                  <TableRow key={id}>
                    <TableCell className="font-medium text-sm">
                      {data?.nama}
                    </TableCell>
                    <TableCell className="text-sm">{data.sumber}</TableCell>
                    <TableCell className="text-sm">{data?.email}</TableCell>
                    <TableCell className="text-sm whitespace-nowrap">
                      {data?.hp}
                    </TableCell>
                    <TableCell className="text-sm whitespace-nowrap">
                      {data?.jumlah}
                    </TableCell>
                    <TableCell className="text-sm whitespace-nowrap">
                      {data?.keterangan}
                    </TableCell>
                    <TableCell className="text-lg whitespace-nowrap cursor-pointer">
                      <MdDelete className="text-rose-500"/>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <></>
              )}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
};
export default TablePemesan;
