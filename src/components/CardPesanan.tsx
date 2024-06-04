import { Order } from "@/interface/Oder";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface CardPesananProps {
  orders: Order[];
}

const CardPesanan: React.FC<CardPesananProps> = ({ orders }) => {
  const groupedOrders = orders.reduce((acc, curr) => {
    const existingOrder = acc.find((order) => order.sumber === curr.sumber);

    if (existingOrder) {
      existingOrder.jumlah += curr.jumlah;
    } else {
      acc.push(curr);
    }

    return acc;
  }, [] as Order[]);

  return (
    <>
      {groupedOrders.length > 0 ? (
        groupedOrders.map((data) => (
          <div className="w-full sm:w-44  max-w-sm mx-auto mb-4">
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
          <div className="w-full max-w-sm mx-auto mb-4">
            <Card>
              <CardHeader>
                <CardTitle>Whatsapp</CardTitle>
                <CardDescription>Total Pesanan: 0</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="w-full max-w-sm mx-auto mb-4">
            <Card>
              <CardHeader>
                <CardTitle>Call</CardTitle>
                <CardDescription>Total Pesanan: 0</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="w-full max-w-sm mx-auto mb-4">
            <Card>
              <CardHeader>
                <CardTitle>Heru</CardTitle>
                <CardDescription>Total Pesanan: 0</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </>
      )}
    </>
  );
};

export default CardPesanan;
