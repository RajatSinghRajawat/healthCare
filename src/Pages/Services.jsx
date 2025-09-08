import React from 'react'
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();

    const navigatingData = () => {
        navigate("/services/detail-page")
    } 

    const services = [
        {
            title: "Gynaecology",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://html.vikinglab.agency/medicax/assets/img/all-images/service/service-img19.png",
        },
        {
            title: "Dermatology",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://charlestondermatology.com/wp-content/uploads/2023/03/skin-care.png",
        },
        {
            title: "Orthopedics",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://wp05.cdn.ihealthspot.com/wp-content/uploads/sites/30/2023/06/istockphoto-804154084-612x612-1.jpeg.webp",
        },
        {
            title: "Cardiology",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://welcarehospital.net/wp-content/uploads/2025/07/Cardiology-1.jpg",
        },
        {
            title: "Pediatrics",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://divahospitals.com/images/service/pediatrics-img.jpg",
        },
        {
            title: "Neurology",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://regionalneurological.com/wp-content/uploads/2019/12/AdobeStock_172813720.jpeg",
        },
        {
            title: "Oncology",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWh46eZ0Y0cNkd1doTfXdsyhkrxyaTe9_SQ&s",
        },
        {
            title: "Nephrology",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://www.omegahospitals.com/_next/image?url=https%3A%2F%2Fomegafilesstore.s3.ap-south-1.amazonaws.com%2Fwebsite%2Fspecializations%2Fnephrology.png&w=3840&q=75",
        },
        {
            title: "Rheumatology",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://www.sgvpholistichospital.org/wp-content/uploads/elementor/thumbs/rheumatology-qyap1u19jtfl1ot3mnybuisy4qrw5td6shy5kppcms.jpg",
        },
        {
            title: "Hematology",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6qjs_pxz3E18i8KSKB7jzG6AbOt9vNeZjA&s",
        },
        {
            title: "Neonatology",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://media.licdn.com/dms/image/v2/D4D12AQHp89dPFu85Zg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1655878789030?e=2147483647&v=beta&t=2f1P8WmNTF0sSSJygfaEbbC9Av40Q3Haeg7V9uzDuwM",
        },
        {
            title: "Gastroenterology",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://suvidhahospital.com/wp-content/uploads/2023/12/Gastroenterology-Big-Image.jpg",
        },
    ];


    return (
        <div>

            <section>
                <div className='bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white text-center p-[3rem]'>
                    <h1 className='text-5xl font-semibold'>Our Services</h1>
                    <p className='text-lg py-3'>Home <span className='text-xl'>⇨</span> Our Services</p>
                </div>

                <div className='flex justify-evenly flex-wrap gap-5 px-12 py-7'>
                    {
                        services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md min-w-[250px] max-w-[280px] flex-shrink-0 hover:shadow-xl transition"
                            >
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-purple-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-2">{service.desc}</p>
                                    <a
                                        onClick={navigatingData}
                                        className="text-blue-600 text-sm font-medium mt-3 inline-block hover:underline"
                                    >
                                        Learn More →
                                    </a>
                                </div>
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-66 object-cover rounded-b-2xl"
                                />
                            </div>
                        ))
                    }
                </div>
            </section>

        </div>
    )
}

export default Services
