import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import FormModal from "./FormModal";
import React, { useState } from "react";
import { OrderSchema } from "@/schema/OrderSchema";

interface InputSelectProps {
  addOrder: (newOrder: OrderSchema) => void;
  searchTerm: string;
  setSearchTerm: (seacrhTerm: string) => void;
}

const InputSelect: React.FC<InputSelectProps> = ({
  addOrder,
  searchTerm,
  setSearchTerm,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };
  return (
    <div className="mx-20 py-10">
      <div className="flex sm:flex-row sm:justify-between flex-col gap-3">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <div className="flex h-full p-2.5 rounded-lg bg-gray-800">
            <DialogTrigger asChild>
              <button
                className="text-white text-sm"
                onClick={() => setIsDialogOpen(true)}
              >
                Tambah Pemesan
              </button>
            </DialogTrigger>
          </div>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Sumber Pesanan</DialogTitle>
              <FormModal addOrder={addOrder} onClose={handleDialogClose} />
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <div className="flex h-full p-2.5 rounded-lg bg-gray-800">
          <input
            type="text"
            placeholder="Cari Nama Pemesan"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-white text-sm bg-transparent outline-none"
          />
        </div>

        {/* <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Nama Pemesan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Joko</SelectItem>
            <SelectItem value="dark">Andi</SelectItem>
            <SelectItem value="system">Syahrul</SelectItem>
          </SelectContent>
        </Select> */}
      </div>
    </div>
  );
};

export default InputSelect;
