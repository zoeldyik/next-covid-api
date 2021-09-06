import axios from "axios"
import {formatDataHarian} from "../../utils/utils.js"

export default async function handler(req, res){
  try {
    let { data } = await axios.get("https://data.covid19.go.id/public/api/update.json")
    data = formatDataHarian(data);
    
    res.status(200).json(data)
  
  } catch (e) {
    console.log(e)
    res.status(500).json({message:"server error"})
  }
}