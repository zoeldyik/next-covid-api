import axios from "axios"
import {formatDataProvinsi} from "../../utils/utils.js"

export default async function handler(req, res){
  try {
    let {data} = await axios.get("https://data.covid19.go.id/public/api/prov.json")
    const last_update = data.last_date;
    let list_data = data.list_data;
  
    list_data = formatDataProvinsi(list_data)
    console.log(list_data.length)
    
    res.status(200).json({last_update, data:list_data})
  } catch (e) {
    console.log(e);
    res.status(500).json({message:"server error"})
  }
}