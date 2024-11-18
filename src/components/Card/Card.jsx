import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";
import PropTypes from "prop-types";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";
import { Link } from "react-router-dom";

export default function Card({ product }) {
  return (
    <Link
      to={product?.slug ? `/products/${product.slug}` : "/"}
      className="flex flex-col max-w-[370px] p-[2px] mb-1 border border-red-100 rounded-lg bg-white ring-[#DB4444] hover:ring-opacity-90 active:ring-5 active:ring-[#DB4444] hover:ring-2 active:ring-2 active:ring-opacity-90 transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
    >
      <div className="flex flex-col flex-wrap p-[16px] rounded-lg ">
        <img src="./public/assets/img/nikelogo.png" alt="Nike Logo" className="w-10 h-5" />
        <div className="relative w-full">
          <img src={product.imageUrl ?? "/path/to/default-image.jpg"} alt={product.name ?? "No name"} className="block max-h-[500px] shadow-2xl object-cover bg-[#ffffff]" />
          {product.stock <= 0 && <span className="absolute top-1 right-0 bg-red-400 text-white font-serif text-sm font-semibold py-1 px-3 rounded-sm ">Out of Stock</span>}{" "}
          {product.stock > 0 && product.stock <= 25 && <span className="absolute top-1 right-0 font-serif text-sm font-semibold bg-red-400 text-white py-1 px-3 rounded-sm">Almost Sold Out</span>}
        </div>
        <div className="flex flex-col gap-2 px-2 py-3 font-serif bg-[#ffffff]">
          <h5 className="font-medium text-[18px] text-black">{product.name ?? "No Name"}</h5>
          <span className="block font-medium text-[12px] text-[#000000]">{product.style ?? "Uncatagorized"}</span>
          <span className="block font-medium text-[12px] text-[#000000]]">{product.color ?? "Uncatagorized"}</span>
          <span className="block font-medium text-[12px] text-[#000000]]">{product.category ?? "Uncatagorized"}</span>
          <span className="block font-medium text-[20px] text-black">{formatToIDRCurrency(product.price) ?? "Not for sale"}</span>
          <div>
            {
              // product.stock <= 0 ? (
              //   <p className="text-xl font-semibold text-center text-[12px] pt-1 font-serif text-red-500">Out of Stock</p>
              // ) :

              product.stock <= 25 && product.stock !== 0 ? (
                <>
                  <Button type="button" className="inline-flex items-center justify-center gap-2 p-2 rounded-sm px-8 bg-[#DB4444] font-serif text-center hover:bg-[#5969cf] text-white active:bg-[#4956ab]">
                    <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                    <span>Add to cart</span>
                  </Button>
                </>
              ) : (
                <Button type="button" className="inline-flex items-center justify-center gap-2 p-2 px-8 py-2 rounded-sm bg-[#DB4444] font-serif text-center hover:bg-[#5969cf] text-white active:bg-[#4956ab]">
                  <FontAwesomeIcon icon={faCartShopping} className="mb-0" />
                  <span>Add to cart</span>
                </Button>
              )
            }
          </div>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  product: PropTypes.object,
};
