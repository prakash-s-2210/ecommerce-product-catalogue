import Header from "./components/Header";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";
import { data } from "./constants";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(data.products);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Brands Filter section information
  const brandCounts = {};
  data.products.forEach((product) => {
    const brand = product.brand; 
    brandCounts[brand] = (brandCounts[brand] || 0) + 1;
  });

  
  const uniqueBrandsWithCounts = Object.keys(brandCounts).map((brand) => ({
    brand,
    length: brandCounts[brand],
  }));


  // Filter product function

  const handleFilterChange = (filterData) => {
    let filteredProducts = data.products;
  
    if (filterData.brands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        {
          return filterData.brands.includes(product.brand)
        }
      );
    }
  
    if (filterData.price === 'lowToHigh') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (filterData.price === 'highToLow') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(filteredProducts)
  }

  // Add to and remove from the cart function 

  const handleAddToCart = (product) => {
    let cartProducts = cart;
    if(cart.some((cartProduct) => cartProduct.slug === product.slug)){
      cartProducts = cart.filter((cartProduct) => cartProduct.slug !== product.slug);
    }

    else{
      cartProducts = [...cart, product];
    }
    setCart(cartProducts);
  }

  return (
    <main>
      <Header cartLength={cart.length} setIsSidebarOpen = {setIsSidebarOpen} isSidebarOpen = {isSidebarOpen} />

      <div className="w-full flex items-start gap-8 sm:p-8 p-4">
        <Sidebar onFilterChange = {handleFilterChange} brands = {uniqueBrandsWithCounts} isSidebarOpen = {isSidebarOpen} />

        <Products products = {products} onAddCartChange = {handleAddToCart} cartProducts = {cart}/>
      </div>
    </main>
  );
}

export default App;
