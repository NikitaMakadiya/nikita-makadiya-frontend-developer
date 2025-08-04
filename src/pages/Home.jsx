import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import ProductListView from "../component/ProductListView";
import ProductGridView from "../component/ProductGridView";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <main
        className="p-6 max-w-7xl mx-auto "
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <h1 className="text-3xl font-bold mb-4 flex justify-center  text-center md:text-left">
          Our Products
        </h1>

        {theme === "colorful" ? (
          <ProductGridView products={products} />
        ) : (
          <ProductListView products={products} />
        )}
      </main>
    </>
  );
};

export default Home;
