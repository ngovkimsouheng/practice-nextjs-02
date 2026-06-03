
import { Metadata } from 'next'


export async function generateMetadata({
  params,
}: {
  params: { uuid: string }
}): Promise<Metadata> {
  return {
    title: `Product ${params.uuid} | Next Route`,
    description: `View details for product ${params.uuid}`,
    openGraph: {
      title: `Product ${params.uuid} | Next Route`,
      description: `View details for product ${params.uuid}`,
    },
  }
}

export default function Page({
 params,
}:{
 params:{uuid:string}
}){

 return (
    <div>{params.uuid}</div>
 )
}