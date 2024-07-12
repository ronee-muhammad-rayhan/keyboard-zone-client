import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { useGetAllProductsQuery } from "@/redux/api/api";
import { TProduct } from "@/types";
export default function Home() {
  // const { data, isLoading } = useGetAllProductsQuery(null);
  const { data: products, isLoading } = useGetAllProductsQuery(null);
  // const { data, error, isLoading } = useGetAllProductsQuery(null);
  // console.log(data);
  console.log(products?.data);
  // const { data: products, error, isLoading } = useGetAllProductsQuery(null);
  // console.log(products);
  if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  const ProductCardCl = () => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-48 object-cover"
          src="https://www.startech.com.bd/image/cache/catalog/keyboard/redragon/a101w/a101w-1-500x500.jpg"
          alt="Sample Product2"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Sample Product2</div>
          <p className="text-gray-700 text-base mb-2">Brand: BrandName</p>
          <p className="text-gray-700 text-base mb-2">Available: 313</p>
          <p className="text-green-600 font-bold text-lg mb-2">$29.99</p>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-gray-700">4.5</span>
          </div>
          <p className="text-gray-700 text-base">
            This is a sample product description.
          </p>
        </div>
      </div>
    );
  };

  const product1 = {
    image:
      "https://www.startech.com.bd/image/cache/catalog/keyboard/redragon/a101w/a101w-1-500x500.jpg",
    title: "Sample Product",
    brand: "BrandName",
    availableQuantity: 313,
    price: 29.99,
    rating: 4.5,
    description: "This is a sample product description.",
  };

  const ProductCardCG = ({ product }: { product: TProduct }) => {
    const {
      image,
      title,
      brand,
      availableQuantity,
      price,
      rating,
      description,
    } = product;
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{brand}</p>
          <p className="text-gray-700 text-base">
            Available Quantity: {availableQuantity}
          </p>
          <p className="text-gray-700 text-base">Price: ${price}</p>
          <p className="text-gray-700 text-base">Rating: {rating} / 5</p>
          <p className="text-gray-700 text-base mt-2">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto container">
      <HeroSection />
      <ProductCard product={product1} />
      <ProductCardCl />
      <ProductCardCG product={product1} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(products, null, 2)}</pre>
      <FeaturedProducts />
    </div>
  );
}
