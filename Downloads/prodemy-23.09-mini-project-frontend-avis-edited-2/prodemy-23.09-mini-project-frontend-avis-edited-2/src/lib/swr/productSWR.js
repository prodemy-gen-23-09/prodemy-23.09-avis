import useSWR from "swr"
import { fetchProducts } from "../axios/productAxios"

export const getAllProducts = (query, sort, category) => {
  let url = "http://localhost:8083/products"
  // let url = "http://localhost:8083/products"

  if (query) {
    url = `${url}?q=${query}`

    if (sort) {
      url += `&sortBy=${sort}`
    }

    if (category) {
      url += `&category=${category}`
    }
  } else if (sort) {
    url = `${url}?=${sort}`

    if (category) {
      url += `&category=${category}`
    }
  } else if (category) {
    url = `${url}?=${category}`
  }

  const { data, isLoading, error } = useSWR(url, fetchProducts)

  return {
    data,
    isLoading,
    isError: error,
  }
}
