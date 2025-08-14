import React from 'react'

const Doctor = () => {
    const Array = [
        {
            img: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
            name: "",
        },
        {
            img: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
            name: "",
        },
        {
            img: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=360",
            name: "",
        },
        {
            img: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
            name: "",
        },
        {
            img: "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip",
            name: "",
        },
        {
            img: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
            name: "",
        },
    ]

    return (
        <>
            {/* {
                Array.map((data) => (
                    <div>
                        <img src={data.img} alt={data.name} className='w-100% h-100%' />
                    </div>
                ))
            } */}

            <div className='flex justify-evenly px-[3rem] border flex-wrap gap-[2rem]'>
                <div className='w-[25vw] border'>
                    <img src='https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg' alt='image' className='w-[70%] h-[90%]' />
                </div>
                <div className='w-[25vw] border'>
                    <img src='https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg' alt='image' className='w-[70%] h-[90%]' />
                </div>
                <div className='w-[25vw] border'>
                    <img src='https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg' alt='image' className='w-[70%] h-[90%]' />
                </div>
                <div className='w-[25vw] border'>
                    <img src='https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg' alt='image' className='w-[70%] h-[90%]' />
                </div>
                <div className='w-[25vw] border'>
                    <img src='https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg' alt='image' className='w-[70%] h-[90%]' />
                </div>
                <div className='w-[25vw] border'>
                    <img src='https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg' alt='image' className='w-[70%] h-[90%]' />
                </div>
            </div>

            {/* <div className='flex justify-between px-7 py-3 my-5 font-semibold'>
                <div className='border-2 border-sky-500 text-sky-500 rounded-lg px-4 py-2 cursor-pointer hover:bg-red-600'>← Previous</div>
                <div className='grid grid-cols-5 gap-1 hidden sm:flex'>
                    <button className='bg-sky-500 text-white rounded-md px-3 cursor-pointer'>1</button>
                    <button className='bg-sky-500 text-white rounded-md px-3 cursor-pointer'>2</button>
                    <button className='bg-sky-500 text-white rounded-md px-3 cursor-text'>...</button>
                    <button className='bg-sky-500 text-white rounded-md px-3 cursor-pointer'>8</button>
                    <button className='bg-sky-500 text-white rounded-md px-3 cursor-pointer'>9</button>
                </div>
                <div className='border-2 border-sky-500 text-sky-500 rounded-lg px-4 py-2 cursor-pointer'>Next →</div>
            </div>


            <div className='flex justify-between px-7 py-3 my-5 font-medium'>
                <div className='bg-sky-500 text-white rounded-lg px-4 py-2 cursor-pointer'>← Previous</div>
                <div className='hidden sm:flex'>
                    <button className='text-sky-500 rounded-md px-4 cursor-pointer'>1</button>
                    <button className='text-sky-500 rounded-md px-4 cursor-pointer'>2</button>
                    <button className='text-sky-500 rounded-md px-4 cursor-text'>...</button>
                    <button className='text-sky-500 rounded-md px-4 cursor-pointer'>8</button>
                    <button className='text-sky-500 rounded-md px-4 cursor-pointer'>9</button>
                </div>
                <div className='bg-sky-500 text-white rounded-lg px-4 py-2 cursor-pointer'>Next →</div>
            </div> */}

        </>
    )
}

export default Doctor
