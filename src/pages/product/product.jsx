import React from 'react'
import Typography from '../../component/common/Typography'
import api from '../../services/api'

const Products = () => {
  React.useEffect(() => {
    api.get("/products").then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div>
      <Typography text="Product Page" fontSize={40} color="red" />
    </div>
  )
}

export default Products