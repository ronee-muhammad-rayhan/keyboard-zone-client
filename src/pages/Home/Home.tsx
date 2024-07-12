import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { useGetAllProductsQuery } from "@/redux/api/api";
export default function Home() {
  const { data, isLoading } = useGetAllProductsQuery(null);
  // const { data, error, isLoading } = useGetAllProductsQuery(null);
  console.log(data);
  // const { data: products, error, isLoading } = useGetAllProductsQuery(null);
  // console.log(products);
  if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="mx-auto container">
      <HeroSection />
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <FeaturedProducts />
    </div>
  );
}
