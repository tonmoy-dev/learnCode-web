import { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaShoppingBag } from 'react-icons/fa'


const ProductDetails4 = () => {

  const product = {
    name: "Glass Teapot Master",
    price: 199,
    rating: 4.4,
    reviews: 96,
    hrefReviews: "#link",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id tenetur consectetur, rem vel repudiandae, obcaecati autem corporis maxime laborum debitis ullam. Similique nisi, porro perspiciatis vel ipsam aliquam repudiandae. Facilis dolorem incidunt nobis quaerat exercitationem quos eaque ducimus aut possimus, aperiam, enim nulla provident! Ad necessitatibus atque pariatur, iste dignissimos ex.",
    features: [
      { name: 'Materials', details:'Bamboo, Glass' },
      { name: 'Teapot', details:'7"L x 4.5"W x 4.5"H' },
      { name: 'Capacity', details:'650 ml.' },
      { name: 'Cleaning', details:'Hand Wash' }
    ],
    colors: [
      { name: 'Black', class: 'bg-black' },
      { name: 'White', class: 'bg-white' },
      { name: 'Blue', class: 'bg-sky-400' },
    ],
    sizes: [
      { name: 'Size 1', inStock: true },
      { name: 'Size 2', inStock: true },
      { name: 'Size 3', inStock: false }
    ],
    pictures: [
      { src: "https://fancytailwind.com/static/teapot1-e0cd61cf4337f086df22de4c2f646db0.webp", alt:"Teapot model"  },
      { src: "https://fancytailwind.com/static/teapot2-9482ecf0cb04a9cbeacd01c7c869c970.webp", alt:"Teapot to pour water"  },
      { src: "https://fancytailwind.com/static/teapot3-0596668cb1f92d4f0463e37d3ee69b36.webp", alt:"Teapot for breakfast"  },
      { src: "https://fancytailwind.com/static/teapot4-73239d591549fa281e07e14a5e9939fb.webp", alt:"Teapot on warming machine"  },
    ]
  }

  const [mainPicture, setMainPicture] = useState(0);

  const starsNumber = Math.floor(product.rating)
  const isHalfStar = !Number.isInteger(product.rating)
  const emptyStars = 5 - Math.ceil(product.rating)


  return (
    <div className="mx-auto px-4 w-full max-w-7xl bg-white text-gray-700">
      <div className="flex flex-col lg:flex-row">

        {/* :PICTURES CONTAINER */}
        <div className="py-8 w-full lg:w-1/2 flex flex-col items-center">
          {/* ::Like Button */}
          <span className="self-start ml-10">
            <button className="text-gray-300 hover:text-red-500">
              <AiFillHeart className="w-10 h-10" />
            </button>
          </span>
          {/* ::Main Picture */}
          <div className="w-auto h-56 sm:h-72 lg:h-full max-h-96 overflow-hidden">
            <img src={product.pictures[mainPicture].src} alt={product.pictures[mainPicture].alt} className="object-contain w-full h-full" />
          </div>
        </div>



        {/* :PRODUCT DETAILS */}
        <div className="lg:py-8 w-full lg:w-1/2 flex flex-col lg:border-l-2 border-gray-200">

          {/* ::Description Container */}
          <div className="order-3 lg:order-1 pb-5 sm:px-6 lg:border-b-2 border-gray-200">
            {/* :::Name */}
            <h1 className="hidden lg:block text-4xl text-gray-700 font-light tracking-wide">{product.name}</h1>
            {/* :::Description */}
            <p className="mt-10 text-base text-gray-500">{product.description}</p>
            {/* :::Features */}
            <ul className="my-5 flex flex-col space-y-2">
              {product.features.map(feature => (
                <li key={feature.name} className="inline-flex items-center space-x-2 text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                  <span className="text-sm font-semibold">{feature.name}:</span>
                  <span className="text-sm font-normal">{feature.details}</span>
                </li>
              ))
              }
            </ul>
          </div>

          {/* ::Customization Container */}
          <div className="order-1 lg:order-2 py-8 sm:px-6 border-b-2 border-gray-200">
              {/* :::Name */}
            <h1 className="mb-5 block lg:hidden text-3xl sm:text-4xl text-gray-700 font-light tracking-wide">{product.name}</h1>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              {/* :::Quantity */}
              <label htmlFor="quantity" className="sr-only">Select the quantity</label>
              <input type="number" defaultValue="1" min="1" className="form-input py-1 pl-2 w-20 rounded border-2 border-gray-300 bg-gray-100 focus:border-yellow-600 focus:ring-0" />
              {/* :::Color */}
              <label htmlFor="color" className="sr-only">Select your color</label>
              <select name="color" id="color" className="form-select py-1 pl-2 w-full max-w-xs rounded border-2 border-gray-300 bg-gray-100 text-gray-500 focus:border-yellow-600 focus:ring-0">
                <option value="">Color</option>
                {product.colors.map(color => (
                  <option value={color.name}>{color.name}</option>
                ))
                }
              </select>
              {/* :::Size */}
              <label htmlFor="size" className="sr-only">Select your size</label>
              <select name="size" id="size" className="form-select py-1 pl-2 w-full max-w-xs rounded border-2 border-gray-300 bg-gray-100 text-gray-500 focus:border-yellow-600 focus:ring-0">
                <option value="">Size</option>
                {product.sizes.map(size => (
                  <option value={size.name}>{size.name}</option>
                ))
                }
              </select>
            </div>
          </div>

          {/* ::Actions Container */} 
          <div className="order-2 lg:order-3 pt-8 sm:px-6 flex flex-wrap lg:flex-nowrap justify-around items-center border-b-2 lg:border-none border-gray-200">
            {/* :::Price */}
            <span className="m-2.5 text-4xl text-gray-500 font-extrabold">
              <span className="font-normal">$</span>
              {product.price}
            </span>
            {/* :::Add to cart button */}
            <button type="button" className="m-2.5 py-1.5 px-5 inline-flex items-center rounded-md bg-yellow-500 text-base text-white font-semibold uppercase whitespace-nowrap hover:bg-yellow-600">
              <FaShoppingBag className="mr-3 w-6 h-6" />
              Add to cart
            </button>
            {/* :::Reviews */}
            <div className="m-2.5 flex items-center">
              {/* ::::rating stars */}
              <div className="flex items-center space-x-1">
                {/* full stars */}
                {[...Array(starsNumber)].map((star, index) =>(
                  <span key={index} className="flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                  </span>
                ))
                }
                {/* half star */}
                {isHalfStar &&
                  <span className="flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>
                  </span>
                }
                {/* empty stars */}
                {[...Array(emptyStars)].map((star, index) =>(
                  <span key={index} className="flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/>
                    </svg>
                  </span>
                ))
                }
              </div>
              {/* ::::all reviews */}
              <a href={product.hrefReviews} className="ml-2 text-sm text-sky-400 font-medium tracking-wide hover:text-sky-500 hover:underline">{`${product.reviews} reviews`}</a>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ProductDetails4
