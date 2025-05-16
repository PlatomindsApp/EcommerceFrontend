
import "../styles/OrderHistory.scss";

const OrderHistory = () => {
  const orderHistory = [
    {
      id: "ORD123456",
      date: "2025-04-25",
      items: [
        { name: "Denim Jacket", quantity: 1 },
        { name: "Floral Dress", quantity: 2 }
      ],
      total: 3797,
    },
    {
      id: "ORD123457",
      date: "2025-04-15",
      items: [
        { name: "Cotton Kurti", quantity: 3 }
      ],
      total: 2397,
    },
    // Add more orders here
  ];

  return (
    <div className="order-history-page">
      <h2>Order History</h2>
      <div className="order-list">
        {orderHistory.map((order) => (
          <div className="order-card" key={order.id}>
            <h3>Order ID: {order.id}</h3>
            <p>Date: {order.date}</p>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.name} × {item.quantity}
                </li>
              ))}
            </ul>
            <h4>Total: ₹{order.total}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
