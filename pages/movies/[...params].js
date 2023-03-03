import { useRouter } from 'next/router'
import React from 'react'

const Detail = ({params}) => {

    const router = useRouter()
    const [title, id] = params 
  return (
    <div>{title}</div>
  )
}

export default Detail

//좀 더 빠르게 서버 쪽에서 params를 받아와서 html로 그려주기 위해서 (seo에 최적화 )
export function getServerSideProps({params:{params}}){  
  console.log(params)
  return{
    props:{
      params
    }
  }
}

// 