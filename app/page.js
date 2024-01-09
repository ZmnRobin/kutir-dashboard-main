import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='text-center mt-20'>
      <h1 className='text-3xl'>Kutir IT Homepage</h1>
      <Link href='/dashboard' className='mt-10'>Go To dashboard</Link>
    </div>
  )
}
