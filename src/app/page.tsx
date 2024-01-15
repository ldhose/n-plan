import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen min-w-full bg-slate-900 p-6 justify-center">
      <div className="w-64   bg-slate-800 m-auto p-1
                         md:w-96">
          <input type='text' className='block m-auto bg-slate-800'>

          </input>
      </div>
      <div className='h-64 w-64 bg-slate-800 rounded-full 
                        sm:h-64 sm:w-64 md:h-96 md:w-96 m-auto mt-10'>

        
      </div>
    </main>
  )
}
