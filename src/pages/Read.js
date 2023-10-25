import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../services/productAction";

export default function Read() {
  // get id from browser
  const {id} = useParams()
  // declare state
  const [product, setProduct] = useState({
    title: "title",
    description: "description",
    price: 900,
    images: ["https://eduport.webestica.com/assets/images/courses/4by3/04.jpg"],
    category: {
      name: "Electronics"
    }
  })
  useEffect(() => {
    console.log(id)
    getOneProduct(id)
    .then(res => res.json())
    .then(response => setProduct(response))
  }, [])

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {product.title}
          </h2>
          <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            {
              product.description
            }
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              {
                product.price
              }
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              <img 
                src={product.images[0]}
              />
            </a>
            {
              product.category.name
            }
          </div>
        </div>
      </div>
    </section>
  );
}
