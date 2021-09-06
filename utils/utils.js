const formatDataHarian = (data) => {
  return data.update.harian.map(d => {
      return {
        date: d.key_as_string,
        positif: d.jumlah_positif.value,
        sembuh: d.jumlah_sembuh.value,
        dirawat: d.jumlah_dirawat.value,
        meninggal: d.jumlah_meninggal.value
      }
    })
}

const formatDataProvinsi = (list_provinsi) => {
  return list_provinsi.map(data=>{
    return {
      provinsi: data.key,
      positif: data.jumlah_kasus,
      sembuh: data.jumlah_sembuh,
      meninggal: data.jumlah_meninggal,
      dirawat: data.jumlah_dirawat
    }
  }).filter(data=> data.provinsi != 'PROVINSI JAWA TENGAH')
  
}

export {formatDataHarian, formatDataProvinsi}