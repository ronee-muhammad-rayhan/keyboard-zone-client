import { Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { RatingModal } from "../RatingModal/RatingModal";
import { TProduct } from "@/types";

export function ProductCard({ product }: { product: TProduct }) {
  return (
    <Card className="bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <Link to={`/movie/${product?.slug}`}>
        <CardHeader className="p-2">
          <img
            src={product?.image}
            className="h-[400px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
            alt={product?.title}
          />
        </CardHeader>
        <CardContent className="grid p-4">
          <div className="flex items-center gap-2">
            <Star color="orange" fill="orange" />
            <p className="text-2xl font-bold">{product?.rating}</p>
          </div>
          <CardTitle className="mt-2 text-3xl font-extrabold">{product?.title}</CardTitle>
          <p className="text-lg mt-4 text-gray-400">{product?.brand}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 border-t border-gray-700">
        <RatingModal name={product?.title} />
      </CardFooter>
    </Card>
  );
}
