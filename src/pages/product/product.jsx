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
    <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1  gap-4'>
      {loader &&
        <div className='xl:col-span-3 lg:col-span-3 md:col-span-2 sm:col-span-1 xs:col-span-1'>
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