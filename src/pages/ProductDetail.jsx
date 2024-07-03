import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Sample Product {id}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Price: $499.99</p>
          <p>Description: This is a detailed description of Sample Product {id}.</p>
          <Button>Add to Cart</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;