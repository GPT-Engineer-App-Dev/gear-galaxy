import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Cart = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="grid grid-cols-1 gap-4">
        {/* Sample cart items */}
        <Card>
          <CardHeader>
            <CardTitle>Sample Product 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Price: $499.99</p>
            <p>Quantity: 1</p>
            <Button>Remove</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sample Product 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Price: $299.99</p>
            <p>Quantity: 2</p>
            <Button>Remove</Button>
          </CardContent>
        </Card>
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export default Cart;