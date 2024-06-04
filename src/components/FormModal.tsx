import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { OrderSchema, schemaOrder } from "@/schema/OrderSchema";

interface FormModalProps {
  addOrder: (newOrder: OrderSchema) => void; //
  onClose: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ addOrder, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderSchema>({
    resolver: zodResolver(schemaOrder),
  });
  const [error, setError] = useState("");

  const onSubmit = async (data: OrderSchema) => {
    try {
      await addOrder(data);
    } catch (error) {
      setError("Gagal menambahkan data");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-slate-200 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl mb-4">Form Order Roti</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="sumber" className="block mb-2">
              Sumber
            </label>
            <select
              id="sumber"
              {...register("sumber")}
              className={`w-full p-2 border ${
                errors.sumber ? "border-red-500" : "border-gray-300"
              } rounded`}
            >
              <option id="#" value="">
                Pilih Sumber
              </option>
              <option value="Whatsapp">Whatsapp</option>
              <option value="Call">Call</option>
              <option value="Heru">Heru</option>
            </select>
            {}
            {errors.sumber && (
              <p className="text-red-500">{errors.sumber.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="nama" className="block mb-2">
              Nama
            </label>
            <input
              id="nama"
              type="nama"
              {...register("nama")}
              className={`w-full p-2 border ${
                errors.nama ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.nama && (
              <p className="text-red-500">{errors.nama.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`w-full p-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="hp" className="block mb-2">
              Nomor HP
            </label>
            <input
              id="hp"
              type="hp"
              {...register("hp")}
              className={`w-full p-2 border ${
                errors.hp ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.hp && <p className="text-red-500">{errors.hp.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="jumlah" className="block mb-2">
              Nomor jumlah
            </label>
            <input
              id="jumlah"
              type="jumlah"
              {...register("jumlah")}
              className={`w-full p-2 border ${
                errors.jumlah ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.jumlah && (
              <p className="text-red-500">{errors.jumlah.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="keterangan" className="block mb-2">
              Keterangan
            </label>
            <textarea
              id="keterangan"
              {...register("keterangan")}
              className={`w-full p-2 border ${
                errors.keterangan ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.keterangan && (
              <p className="text-red-500">{errors.keterangan.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={() => onClose()}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
