import React from 'react'

const index = () => {
    return (
        <nav className="bg-[#3153A4] px-10 py-5">
            <div className="container mx-auto flex items-center justify-between">
                <div className='flex display-column items-center gap-5'>
                    <img src='/logo.png'></img>
                    <p>Sistem Katalog Informasi <br />Universitas Negeri Padang</p>
                </div>
                <ul className="flex gap-20">
                    <button>Login</button>
                    <button className='bg-[#FFA01A] py-2 px-12 rounded-2xl'>Sign Up</button>
                </ul>
            </div>
        </nav>
    );
};

export default index

