import axios from "axios";
const OPENCAGEAPI = process.env.OPENCAGE;

const URL_ADDRESS_SEARCH = `https://api.opencagedata.com/geocode/v1/json?q=`;
// ${location}&key=${OPENCAGEAPI}

// Get stores
export async function getCoordinates(address) {
  try {
    const response = await axios.get(
      URL_ADDRESS_SEARCH + `"${address + " australia"}"&key=${OPENCAGEAPI}`
    );

    return response.data.results[0].geometry;
  } catch (err) {
    return err;
  }
}
