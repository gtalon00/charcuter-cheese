import axios from "axios"

const api_key = process.env.REACT_APP_AIRTABLE_KEY;
const cheeseURL = 'https://api.airtable.com/v0/appTNZJOJVjRbR8nS/Cheese'
const userOpinionURL = 'https://api.airtable.com/v0/appTNZJOJVjRbR8nS/User%20Opinion?view=Grid%20view'
const config = {
  headers: {
    Authorization: `Bearer ${api_key}`
  }
}

export const GetCheeses = async () => {
  try {
    const res = await axios.get(cheeseURL, config)
    return res.data.records
  } catch (error) {
    throw error
  }
}

export const GetUserOpinion = async () => {
  try {
    const res = await axios.get(userOpinionURL, config)
    return res.data.records
  } catch (error) {
    throw error
  }
}

export const PostUserOpinion = async (form) => {
  try {
    const res = await axios.post(userOpinionURL, {fields: form}, config)
    return res.data
  } catch (error) {
    throw error
  }
}