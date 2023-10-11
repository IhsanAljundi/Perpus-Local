import React from 'react'
import Link from 'next/link'


const index = () => {
    return (
        <div className='bg-white border-t-8 border-[#FFA01A] pt-10 pb-8'>

            <div className='py-auto flex flex-col h-full justify-center items-center py-20'>

                <div className="relative mt-2 p-5 bg-[#1a409a] rounded-lg">
                    <div className="p-5 mt-5 flex flex-col justify-center items-center">
                        <h1 className="text-4xl mb-10 text-white font-regular font">Masuk</h1>
                        <div className="flex flex-col space-y-4 max-w-xl text-black">
                            <input
                                type="text"
                                placeholder="NIP/NIM/No Induk"
                                className="border p-2 rounded w-96"
                            />
                            <button
                                className="bg-[#ff9600] hover:bg-[#bc7005] hover:shadow-inner text-white font-bold py-2 px-4 rounded"
                            >
                                Cari
                            </button>
                        </div>
                        <p className='text-regular mt-7'>
                            Belum punya akun? {' '}
                            <Link href="/regis">
                               Daftar
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index