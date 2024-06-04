// import { Order } from "@/interface/Oder";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "./ui/table";

// interface TablePemesanProps {
//   orders: Order[];
// }

// const TablePemesan: React.FC<TablePemesanProps> = ({ orders }) => {
//   return (
//     <Table className="w-full table-auto">
//       {orders.length > 0 ? (
//         <TableCaption>List Pemesan Roti</TableCaption>
//       ) : (
//         <TableCaption>Tidak ada pesanan</TableCaption>
//       )}
//       <TableHeader>
//         <TableRow>
//           <TableHead className="w-[100px] text-sm">Nama</TableHead>
//           <TableHead className="text-sm">Sumber Pesanan</TableHead>
//           <TableHead className="text-sm">Email</TableHead>
//           <TableHead className="text-sm whitespace-nowrap">HP</TableHead>
//           <TableHead className="text-sm whitespace-nowrap">
//             Jumlah Roti
//           </TableHead>
//           <TableHead className="text-sm whitespace-nowrap">
//             Keterangan
//           </TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {orders.length > 0 ? (
//           orders.map((data) => (
//             <TableRow key={data.nama}>
//               <TableCell className="font-medium text-sm">
//                 {data?.nama}
//               </TableCell>
//               <TableCell className="text-sm">{data.sumber}</TableCell>
//               <TableCell className="text-sm">{data?.email}</TableCell>
//               <TableCell className="text-sm whitespace-nowrap">
//                 {data?.hp}
//               </TableCell>
//               <TableCell className="text-sm whitespace-nowrap">
//                 {data?.jumlah}
//               </TableCell>
//               <TableCell className="text-sm whitespace-nowrap">
//                 {data?.keterangan}
//               </TableCell>
//             </TableRow>
//           ))
//         ) : (
//           <></>
//         )}
//       </TableBody>
//     </Table>
//   );
// };

// export default TablePemesan;

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
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import React, { useEffect, useState } from "react";

interface TablePemesanProps {
  orders: Order[];
}

const TablePemesan: React.FC<TablePemesanProps> = ({ orders }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 650 });

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(width, "ini lebar");
  console.log(height, "ini tinggi");

  return (
    <>
      {isSmallScreen ? (
        <Card className="w-full">
          <CardHeader className="flex items-center justify-center">
            <CardTitle>List Pemesan Roti</CardTitle>
          </CardHeader>
          <CardContent>
            {orders.length > 0 ? (
              <TableCaption className="flex items-center justify-center">
                List Pemesan Roti
              </TableCaption>
            ) : (
              <TableCaption className="flex items-center justify-center">
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.length > 0 ? (
                orders.map((data) => (
                  <TableRow key={data.nama}>
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
