import React, { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setProducts, addToCart, removeFromCart, confirmWishlist, reserCart } from "../../store/slices/productSlice"
import { getAllProducts } from "../../lib/swr/productSWR"
import { getAllCategories } from "../../lib/swr/categorySWR"
import ButtonQuantity from "../../components/ButtonQuantity"
import { BeatLoader } from "react-spinners"

function Home() {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.products)
  const [query, setQuery] = useState(null)
  const [sort, setSort] = useState(null)
  const [category, setCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState("");
  

  useEffect(() => {
    // console.log(query)
    // console.log(sort)
    // console.log(category)
  }, [cart, sort, category, searchQuery])

  const { data: productData, isLoading, isError } = getAllProducts(searchQuery, sort, category)

  const { data: categoriesData } = getAllCategories()

  const handleSortChange = (event) => {
    setSort(event.target.value)
  }

  const handleAddToCart = (item) => {
    const payload = {
      ...item,
      qty: 1,
    }
    dispatch(addToCart(payload))
  }

  const handleConfirmWishlist = () => {
    alert("Produk berhasil di order")
    dispatch(reserCart())
  }
  const handleDeleteProduct = (id) => {
    dispatch(removeFromCart(id))
  }

  if (isError) return <div>Error...</div>

  // const [searchQuery, setSearchQuery] = useState("");


  return (
    <div className="flex justify-between">
      <div className="w-2/3 flex flex-col gap-7">
        <h1 className="text-2xl font-bold mt-6">Daftar Produk</h1>
        <div className="flex gap-3 ">
          <button
            onClick={() => {
              setSort(null)
              setQuery(null)
              setCategory(null)
            }}
            className="bg-primary text-white p-3 rounded-lg text-sm w-32"
          >
            Semua Produk
          </button>
          {categoriesData?.map((Categories) => (
            <button
              key={Categories.id}
              onClick={() => {
                setCategory(Categories.id)
              }}
              className="bg-primary text-white p-3 rounded-lg text-sm w-32"
            >
              {Categories.name}
            </button>
          ))}
        </div>
        <div>
          <div className="flex">
            <input type="text" placeholder="Search..." className="flex rounded-full border border-gray-500 px-5 py-2 md:w-96 md:flex-initial"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <select onChange={handleSortChange} className="ml-auto rounded-full border border-gray-500 p-2">
              <option value="nameDesc">Name: High to Low</option>
              <option value="nameAsc">Name: Low to High</option>
              <option value="priceDesc">Price: Low to High</option>
              <option value="priceAsc">Price: Low to High</option>
            </select>
          </div>
          <div className="w-fit grid grid-cols-3 gap-10 mt-8 ">
            {isLoading ? (
              <BeatLoader color="#4959b6" size={10} />
            ) : (
              productData.map((product) => (
                <div key={product.id} className="flex flex-col gap-3 p-2 rounded-xl shadow-xl bg-slate-100">
                  <div className="flex gap-3 items-center">
                    <img src={product.image} alt={product.image} className="w-28 h-28 object-cover rounded-md" />
                    <div className="w-full">
                      <h3 className="font-semibold justify-center text-[15px]">{product.title}</h3>
                      <p className="font-semibold text-[15px]">Rp. {product.price.toLocaleString("Id-id")}</p>
                    </div>
                  </div>
                  <button onClick={() => handleAddToCart(product)} className="bg-primary text-white py-1 rounded-full">
                    Add to Cart
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="w-3/12 h-fit rounded-2xl flex flex-col gap-1 overflow-hidden">
        <div className="bg-slate-200 p-5 w-full flex flex-col gap-5 ">
          <h1 className="text-lg font-semibold">Daftar Pesanan</h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-5">
              {cart?.map((list) => (
                <div className="flex justify-between" key={list.id}>
                  <div className="flex gap-3">
                    <img src={list.image} alt="Gambar Produk" className="w-16 rounded-lg" />
                    <div>
                      <h1 className="text-sm font-semibold ">{list.title}</h1>
                      <h1 className="text-sm">Rp. {list.price.toLocaleString("ID-id")}</h1>
                    </div>
                  </div>
                  <ButtonQuantity productId={list.id} quantity={list.qty} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 bg-slate-200 p-5">
          <div className="flex justify-between">
            <h1 className="font-semibold tex-sm">Total</h1>
            <h1 className="font-semibold tex-sm">Rp. {cart.reduce((accumulator, product) => accumulator + product.price * product.qty, 0)}</h1>
          </div>
          <h1 className="text-lg font-semibold">Payment Method</h1>
          <div className="flex justify-around">
            <button>
              <img src="https://pbs.twimg.com/profile_images/966253495547342848/_bjmYta5_400x400.jpg" alt="Dana" className="w-16 rounded-2xl" />
            </button>
            <button>
              <img src="https://seeklogo.com/images/B/bank-transfer-logo-291DE7CDB2-seeklogo.com.png" alt="Transfer Bank" className="w-16 h-16 rounded-2xl" />
            </button>
            <button>
              <img src="https://fintech.id/storage/files/shares/logo/logofi2/gopay-1.jpg" alt="Gopay" className="w-16 h-16 rounded-2xl" />
            </button>
          </div>
          <button onClick={handleConfirmWishlist} className="bg-primary text-white p-2 rounded-xl">
            Confirm Buy
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
