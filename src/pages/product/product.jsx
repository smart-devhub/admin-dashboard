import React from 'react'
import ProductCard from './productCard'
import Loader from '../../component/common/Loader'
import { httpCalls } from './apicall'

const Products = () => {
  const [productdata, setProductData] = React.useState([])
  const [loader, setLoader] = React.useState(false)

  React.useEffect(() => {

    setLoader(true)
    httpCalls.getProducts().then(res => {
      if (res.data) {
        setProductData(res.data.products)

      }
      setLoader(false)

    }).catch(err => {
      setLoader(false)
    })
  }, [])
  return (
    <div className='grid grid-cols-3 gap-2'>
      {loader &&
        <div className='col-span-3'>
          <Loader />
        </div>}
      {!loader && productdata && productdata.length > 0 && productdata.map((x) => (
        <div className='col-span-1'>
          <ProductCard product={x} key={x.id} />
        </div>
      ))}
    </div>
  )
}

export default Products