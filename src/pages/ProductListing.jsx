import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const ProductListing = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6">Product Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Sample products */}
        <Card>
          <CardHeader>
            <CardTitle>Sample Product 1</CardTitle>
          </CardHeader>
          <CardContent>
            <p>$499.99</p>
            <Button onClick={() => navigate("/product/1")}>View Details</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sample Product 2</CardTitle>
          </CardHeader>
          <CardContent>
            <p>$299.99</p>
            <Button onClick={() => navigate("/product/2")}>View Details</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sample Product 3</CardTitle>
          </CardHeader>
          <CardContent>
            <p>$199.99</p>
            <Button onClick={() => navigate("/product/3")}>View Details</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductListing;