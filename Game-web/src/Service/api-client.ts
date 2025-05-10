//this is an import from axios to fetch the API from the web we got our own API key to fetch the data...

import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "cb37369b48f7487d8ac2db7c5e9ce82f"
    }
})