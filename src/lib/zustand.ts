import { OrderStore } from "@/interface/Oder";
import { create } from "zustand";

export const useOrderStore = create<OrderStore>((set) => ({
  pesanan: JSON.parse(localStorage.getItem("pesanan") || "[]"),
  addOrder: (newOrder) =>
    set((state) => {
      const updatedPesanan = [...state.pesanan, newOrder];
      localStorage.setItem("pesanan", JSON.stringify(updatedPesanan)); // Menyimpan pesanan ke localStorage
      return { pesanan: updatedPesanan };
    }),
}));
