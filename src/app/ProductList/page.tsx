"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "../actions/actions";
import Swal from 'sweetalert2';



const Shoes = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchproduct() {
      const quey = `*[_type == "product"]{
    _id,
    productName, 
    image,
    price,
    description
  }`;
      const fetchedProduct = await client.fetch(quey);
      setProduct(fetchedProduct);
    }
    fetchproduct();
  }, []);


  const handleAddToCart = (e:React.MouseEvent , product:Product) => {
    e.preventDefault()
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.productName} added to cart!`,
      showConfirmButton: false,
      timer: 1000
    })

    addToCart(product)
    console.log(handleAddToCart)
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
          marginBottom: "20px",
          marginLeft: "15px",
        }}
      >
        
        {/* Sidebar */}
        <div
          style={{
            width: "250px",
            flexShrink: 0,
            marginTop: "20px",
            marginBottom: "20px",
            padding: "20px",
            backgroundColor: "white",
          }}
        >
          <h1 className="text-lg">NEW(500)</h1>
          <h3>Shoes</h3>
          <p>sports bras</p>
          <p>Tops and T-shirts</p>
          <p>hoodies and sweatshirts</p>
          <p>Jackets</p>
          <p>Traousers and tights</p>
          <p>shorts</p>
          <p>Trackshoes</p>
          <p>jumpsuits and rompers</p>
          <p>skirets and Dreases</p>
          <p>Socks</p>
          <p>
            Eaccessories <br />
            and equipment
          </p>

          <hr />

          <form className="mt-6">
            <label htmlFor="Gender">Gender</label>
            <select id="gender" name="gender"></select>

            <div>
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male" className="ml-2">
                {" "}
                Male{" "}
              </label>
            </div>

            <div>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female" className="ml-2">
                {" "}
                Female{" "}
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                className=""
              />
              <label htmlFor="other" className="ml-2">
                {" "}
                Other{" "}
              </label>
            </div>
          </form>

          <hr />
          <form className="mt-6">
            <label htmlFor="kids">kids</label>
            <select id="kids" name="kids"></select>

            <div>
              <input type="radio" id="Boys" name="Boys" value="Boys" />
              <label htmlFor="Boys" className="ml-2">
                {" "}
                Boys{" "}
              </label>
            </div>

            <div>
              <input type="radio" id=" Girls " name=" Girls " value=" Girls " />
              <label htmlFor=" Girls " className="ml-2">
                {" "}
                Girls{" "}
              </label>
            </div>
          </form>

          <hr />
          <form className="mt-6">
            <label htmlFor="kids">Shops by Price</label>
            <select id="kids" name="kids"></select>

            <div>
              <input type="radio" id="Boys" name="Boys" value="Boys" />
              <label htmlFor="Boys" className="ml-2">
                {" "}
                Under ₹ 2 500.00{" "}
              </label>
            </div>

            <div>
              <input type="radio" id=" Girls " name=" Girls " value=" Girls " />
              <label htmlFor=" Girls " className="ml-2">
                {" "}
                ₹ 2 501.00 - ₹ 7 500.00{" "}
              </label>
            </div>
          </form>
        </div>

        {/* * Main Content Area */}
        <div style={{ flex: 1, padding: "20px", marginLeft: "20px" }}>
          {/* Business Cards Grid */}
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {product.map((product) => (
                <div
                  key={product._id}
                  className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 text-center
        transition-transform transform hover:scale-105"
                >
                  <Link href={`/product/${product._id}`}>
                    {product.image && (
                      <Image
                        src={urlFor(product.image).url()}
                        alt="image"
                        width={200}
                        height={200}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                    )}

                    <h3 className="text-xl font-semibold mb-2">
                      {" "}
                      {product.productName}
                    </h3>
                    <p className="text-lg text-gray-700 mb-4">
                     price:  ${product.price}
                    </p>
                 

                  <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
                  onClick={(e)=> handleAddToCart(e,product)}
                  >
                    add to cart
                  </button>
                  <Link href={`/product/${product._id}`}>
                  <button className="bg-black text-white py-2 ml-4 px-4 rounded-md hover:bg-green-600 transition"
                
                  >
                    product detail
                  </button>
                  </Link>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Shoes;
