import CardPesanan from "@/components/CardPesanan";
import InputSelect from "@/components/InputSelect";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TablePemesan from "@/components/TablePemesan";
import { useOrderStore } from "@/lib/zustand";
import { useState } from "react";

const MainDashboard = () => {
  const pesanan = useOrderStore((state) => state.pesanan);
  const addOrder = useOrderStore((state) => state.addOrder);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filter orders based on search term
  const filteredOrders = pesanan.filter((order) =>
    order.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex sm:flex-row flex-col sm:justify-evenly gap-3 mt-6">
          <CardPesanan orders={pesanan} />
        </div>
        <InputSelect
          addOrder={addOrder}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <TablePemesan orders={filteredOrders} />
      </div>
    </div>
  );
};

export default MainDashboard;
