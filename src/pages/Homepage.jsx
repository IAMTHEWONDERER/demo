import React from 'react'
import Header from '../components/Header'

const Homepage = () => {
  return (
    <>
    <div className="sticky top-0 z-20">
                {/* Absolute container */}
                <div className="absolute w-full z-20">
                    {/* {!isNotFoundPage && <Header />} */}
                    <Header />
                </div>
            </div>
    </>
  )
}

export default Homepage