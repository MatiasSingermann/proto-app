import Slider from '@/components/Slider'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='flex p-4'>
        <p className='flex'>Hola Mundo</p>
      </div>
      <div>
        <Slider/>
      </div>
    </>
  )
}
