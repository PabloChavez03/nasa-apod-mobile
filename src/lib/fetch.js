import { NASA_API_KEY } from "@env"
import { NASA_URL } from "../config"

export default async (urlParams) => {
  try {
    const response = await fetch(`${NASA_URL}?api_key=${NASA_API_KEY}${urlParams?.length > 0 ? `&${urlParams}` : ''}`)
    const data = await response.json()

    return Promise.resolve(data)
  } catch (error) {
    return Promise.reject(error)
  }
}