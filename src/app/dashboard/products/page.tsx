
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Products | Next Route",
  description: "Manage and view all your products",
  openGraph: {
    title: "Products | Next Route",
    description: "Manage and view all your products",
  },
}

export default function ProductsInDashboard() {
  return (
    <div className='p-6'>page product dashboard</div>
  )
}
