import React from 'react'
import { Button } from 'pds'

// dom components goes here
const DOM = () => {
  return (
    <>
      <Button />
    </>
  )
}

// canvas components goes here
const R3F = () => {
  return <></>
}

const Page = () => {
  return (
    <>
      <DOM />
      {/* @ts-ignore */}
      <R3F r3f />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
