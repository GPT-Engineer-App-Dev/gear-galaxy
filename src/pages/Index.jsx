import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      <section className="hero bg-gray-200 p-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to ElectroMart</h1>
        <p className="text-lg mb-6">Your one-stop shop for all electronics</p>
        <Button onClick={() => navigate("/categories")}>Shop Now</Button>
      </section>

      <section className="featured-products">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Sample featured products */}
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
      </section>

      <section className="categories">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Sample categories */}
          <Card>
            <CardHeader>
              <CardTitle>Laptops</CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={() => navigate("/categories/laptops")}>Shop Laptops</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Smartphones</CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={() => navigate("/categories/smartphones")}>Shop Smartphones</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Accessories</CardTitle>
            </CardHeader>
            <CardContent>
              <Button onClick={() => navigate("/categories/accessories")}>Shop Accessories</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;