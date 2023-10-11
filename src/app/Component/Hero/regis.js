import React from 'react'
import Link from 'next/link'

const regis = () => {
    return (
        <div className='bg-white border-t-8 border-[#FFA01A]'>

            <div className='py-auto flex flex-col h-full justify-center items-center py-20'>

                <div className="relative mt-2 p-5 bg-[#1a409a] rounded-lg">
                    <div className="p-5 flex flex-col justify-center items-center">
                        <h1 className="text-2xl mb-5 text-white font-bold">Register</h1>
                        <div className="flex flex-col space-y-4 max-w-xl text-black">
                            <input
                                type="text"
                                placeholder="NIP/NIM/No Induk"
                                className="border p-2 rounded w-96"
                            />
                            <input
                                type="text"
                                placeholder="Nama"
                                className="border p-2 rounded w-96"
                            />
                            <select className='border p-2 rounded w-96'>
                                <option >...</option>
                                <option>Fakultas Teknik</option>
                                <option>Fakultas Ekonomi Bisnis
                                </option>
                                <option>Fakultas Pariwisata & Perhotelan
                                </option>
                                <option>Fakultas Ilmu Sosial
                                </option>
                                <option>Fakultas Ilmu Pendidikan
                                </option>
                                <option>Fakultas Bahasa & Seni
                                </option>
                                <option>Fakultas Ilmu Keolahragaan
                                </option>
                                <option>Fakultas Matematika Ilmu Pengetahuan Alam
                                </option>
                                <option>Pascasarjana
                                </option>
                                <option>Tamu
                                </option>
                            </select>
                            <input
                                type="text"
                                placeholder="Perguruan Tinggi"
                                className="border p-2 rounded w-96"
                            />
                            <button
                                className="bg-[#ff9600] hover:bg-[#bc7005] hover:shadow-inner text-white font-bold py-2 px-4 rounded"
                            >
                                Cari
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default regis