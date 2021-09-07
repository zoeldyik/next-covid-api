import {useState} from "react"
import {formatDataHarian, formatDataProvinsi} from "../utils/utils.js"

//dataprovinsi = {last_update, data}
//dataHarian = [{}]


export const getStaticProps = async () =>{
  const res1 = await fetch("https://data.covid19.go.id/public/api/update.json");
  const res2 = await fetch("https://data.covid19.go.id/public/api/prov.json")

  let dataHarian = await res1.json();
  let dataProvinsi = await res2.json();
  const last_update = dataProvinsi.last_date;
  let list_data = dataProvinsi.list_data;
  
  dataHarian = formatDataHarian(dataHarian).slice(-2);
  list_data = formatDataProvinsi(list_data).slice(0,2);
  
  return {
    props:{ 
      dataHarian,
      dataProvinsi:{
        last_update, list_data
      }
    }
  }
}


export default function Home({dataProvinsi, dataHarian}) {
  const [linkApi, setLinkApi] = useState({
    harian: "https://data.covid19.go.id/public/api/update.json",
    provinsi: "https://data.covid19.go.id/public/api/prov.json"
  })
  
  return (
    <div className="container">
      <header className="py-5 mb-3">
        <h1 className="text-center mb-4">Covid Api Indonesia</h1>
        <p>
          api ini dibuat untuk tujuan pembelajaran, 
          data berasal dari api yang di sediakan oleh pemerintah indonesia
        </p>
        <a className="btn btn-sm btn-dark me-2" target="blank" href={linkApi.harian}>
          sumber api harian
        </a>
        <a className="btn btn-sm btn-dark" target="blank" href={linkApi.provinsi}>
          sumber api provinsi
        </a>
      </header>
      
      <main>
        <h5 className="pt-1 fw-light">
          url: api/provinsi 
          <a target="_blank" href="/api/provinsi" className="text-white badge bg-dark rounded-pill ms-3 text-decoration-none">check</a>
        </h5>
        <article className="mb-5 card">
          <code className="bg-light p-2">{JSON.stringify(dataProvinsi)}</code>
        </article>
        
        <h5 className="pt-1 fw-light">
          url: api/harian
            <a target="_blank" href="/api/harian" className="text-white badge bg-dark rounded-pill ms-3 text-decoration-none">check</a>
        </h5>
        <article className="card">
          <code className="bg-light p-2">{JSON.stringify(dataHarian)}</code>
        </article>
      </main>
      
      <footer className="text-center mt-5 py-3">&lt;/&gt; code in tegal &copy; 2021</footer>
  
    </div>
  )
}

