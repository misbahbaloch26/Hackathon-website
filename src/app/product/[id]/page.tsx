import { client } from "@/sanity/lib/client";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface Productpageprops {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Productpageprops) {
  const { id } = await params;
  // const product = await getProduct(slug);
  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    productName,
    _type,
    image,
    price,
    description
  }`;

  const data = await client.fetch(query, { id });
  console.log("data ", data);
  console.log("hello ");
  

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={urlFor(data.image).url()}
            width={1344}
            height={700}
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {data.productName}
            </h1>

            <p className="leading-relaxed mt-5">
             {data.description}
            </p>

            <div className="flex justify-between mt-7">
              <span>
                <p className=" font-bold text-black">₹ {data.price}</p>
              </span>


              <Link href={'/cart'}>
              <button className="flex ml-auto  text-white text-center  bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full">
                <MdOutlineShoppingCart />
                Add to Cart
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
