export interface Order {
  nama: string;
  sumber: string;
  email: string;
  hp: string;
  jumlah: number;
  keterangan?: string;
}

export interface OrderStore {
  pesanan: Order[];
  addOrder: (newOrder: Order) => void;
}
