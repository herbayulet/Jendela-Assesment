import { Order } from "@/interface/Oder";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface CardPesananProps {
  orders: Order[];
}

const CardPesanan: React.FC<CardPesananProps> = ({ orders }) => {
  return (
    <>
      {orders.length > 0 ? (
        orders.map((data) => (
          <div>
            <Card key={data.nama}>
              <CardHeader>
                <CardTitle>{data?.sumber}</CardTitle>
                <CardDescription>Total Pesanan: {data?.jumlah}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))
      ) : (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Whatsapp</CardTitle>
              <CardDescription>Total Pesanan: 0</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Call</CardTitle>
              <CardDescription>Total Pesanan: 0</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Heru</CardTitle>
              <CardDescription>Total Pesanan: 0</CardDescription>
            </CardHeader>
          </Card>
        </>
      )}
    </>
  );
};

export default CardPesanan;
