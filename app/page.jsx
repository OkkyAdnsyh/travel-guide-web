import Banner from '@/components/blocks/Home/Banner/Banner'
import React from 'react'

const Home = async () => {
  // const data = await fetch('https://dev-wonderful-indonesia-travel-guide.pantheonsite.io/wp-json/wp/v2/province?acf_format=standard', {
  //   method: 'GET',
  //   cache: 'no-store'
  // }).then(res => res.json());

  // console.log(data);
  return (
    <>
      <Banner />
    </>
  )
}

export default Home