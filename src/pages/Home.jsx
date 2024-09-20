import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../components/Loader'

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
        <div className="">
            {/* Popup to be done */}
            <Canvas className='w-full h-screen bg-transparent' camera={{near: 0.1, far : 1000}}>
                <Suspense fallback={ <Loader/> }>

                </Suspense>
            </Canvas>
        </div>
    </section>
  )
}

export default Home