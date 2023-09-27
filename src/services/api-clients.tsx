// 5, fetching games
import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "03b82b74e0454e0f869bee378eb23bee"
    }
})