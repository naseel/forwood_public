
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
}

const ProductCard = ({ title, description, image, tags }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image || "/placeholder.svg"} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-accent">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="bg-secondary text-accent-light font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
