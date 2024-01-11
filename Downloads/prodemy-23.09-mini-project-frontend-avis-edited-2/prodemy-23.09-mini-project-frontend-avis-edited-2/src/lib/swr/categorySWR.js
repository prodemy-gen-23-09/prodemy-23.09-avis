import useSWR from "swr"
import { fetchCategories } from "../axios/categoryAxios"

export const getAllCategories = () => {
  const { data, isLoading, error } = useSWR("http://localhost:8083/categories", fetchCategories)
  // const { data, isLoading, error } = useSWR("http://localhost:8083/categories", fetchCategories)

  return {
    data,
    isLoading,
    error,
  }
}
