import React, { useState } from 'react';
import { FaSearch, FaUserMd, FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const doctors = [
  { name: "Dr. Vivek Gupta", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUNBIL0_hJu7hxnyfJpFl8yzjxp6Q7zHUJMw&s", degree: "MD, MBBS", text: "Preventive healthcare expert." },
  { name: "Dr. Anjali Sharma", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDz4ooWq1gmfTSE4-4jHzHaSPM_8_f4h_qQQ&s", degree: "MD, Nutrition", text: "Specialist in nutrition and lifestyle." },
  { name: "Dr. Rajesh Kumar", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn=9GcRbS9oQS-5J8RcHMkBW5EktnFh9FX_pkAtrFQ&s", degree: "PhD, Psychology", text: "Mental health and stress management." },
  { name: "Dr. Priya Singh", img: "https://www.indiraivf.com/sites/default/files/styles/wide/public/2025-05/Dr-Priya-Singh-%28Bareilly%29.jpg.webp?VersionId=bxPkVVZdNZ60mQHWWboy0F3JB4ZMbR2B", degree: "MBBS, PT", text: "Physical fitness and holistic care." },
  { name: "Dr. Neha Verma", img: "https://rajeye.com/wp-content/uploads/2024/01/19__2_-removebg-preview.png", degree: "MD Pediatrics", text: "Pediatric healthcare expert." },
  { name: "Dr. Mohan Das", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn=9GcTmpQTr0veD8booyvh23izIqevPNxQni0UBVw&s", degree: "MD Cardiology", text: "Heart specialist." },
  { name: "Dr. Suresh Yadav", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn=9GcRSzpzZySfBOQTECWvbo3JZZktS7dyDpkGkUA&s", degree: "MS Orthopedic", text: "Bone & joint care." },
  { name: "Dr. Kavita Sharma", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcTujyKfP6ZbVaMZaefmBwgJ3pKVMuGxLAWpQw&s", degree: "MD Dermatology", text: "Skin specialist." },
  { name: "Dr. Rohit Mehra", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcTR0NMLUY9aj6dGGjC58mClzeGL8MTAjbhlKA&s", degree: "MD Ophthalmology", text: "Eye care specialist." },
  { name: "Dr. Ananya Roy", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcSGBvDuC8XrE4yh3KVG1c09_DU0uhGou7cXsQ&s", degree: "BDS, MDS", text: "Dental health expert." },
  { name: "Dr. Amit Jain", img: "https://d35oenyzp35321.cloudfront.net/Best_20_Laparoscopic_20_Surgeon_20_20_Delhi_9399e13194.jpg", degree: "MBBS, MD", text: "General medicine specialist." },
  { name: "Dr. Priya Kapoor", img: "https://cdn.prod.website-files.com/659c9d2768dc328628d30423/6837125092bc801defdca2f8_Dr%20Priya%20Kapoor.png", degree: "MD Gynecology", text: "Women health expert." },
  { name: "Dr. Neeraj Sharma", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcTb-JoorI7i9WFXUO6U3NiU9u2ZA3o05LuNeA&s", degree: "MD Cardiology", text: "Heart care specialist." },
  { name: "Dr. Priya Desai", img: "https://media.licdn.com/dms/image/v2/C4E03AQE8CrGBdYJ-uw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1562115549772?e=2147483647&v=beta&t=4Sm2V4pWrjvHUiUA9z0IOD2hjmf0CP7tEWQ3f49t9Ys", degree: "MD Nutrition", text: "Nutrition and wellness." },
  { name: "Dr. Raj Malhotra", img: "https://media.licdn.com/dms/image/v2/D4E03AQFnwtci9QiqPQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721218187441?e=2147483647&v=beta&t=5s0W2Pvrt4iufTd0wnbko_q2C3HRCzUnamhFgy-cS0k", degree: "PhD Psychology", text: "Mental health guidance." },
  { name: "Dr. Sunil Kumar", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcRG0J2fePJD1yhwJJiyapCBzzAVekYX7ripPA&s", degree: "MBBS, MD", text: "Internal medicine specialist." },
  { name: "Dr. Shweta Singh", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcS6kHZVfsduFxgEHKM85aEREomEjBao9Ct-DQ&s", degree: "MD Pediatrics", text: "Child healthcare expert." },
  { name: "Dr. Manoj Verma", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcSZrBKjn6I7gEXYIeQystyMKZsy3g8XAYASJQ&s", degree: "MD Neurology", text: "Brain & nerve specialist." },
  { name: "Dr. Ritu Sharma", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcRGBLr6gR4_K87mVMkw0olnUGzsQic7d78rQA&s", degree: "MD Endocrinology", text: "Hormonal health expert." },
  { name: "Dr. Vikram Singh", img: "https://assets.lybrate.com/img/documents/doctor/dp/7d6ee13f8c56c25e1e6a2e0c8e606903/Neurosurgery-VikramSingh-Ranchi-6062c6.jpg", degree: "MD Pulmonology", text: "Respiratory health." },
  { name: "Dr. Anil Gupta", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcTJoDueHzAejzVhP92L5p36CCCqDPz9O-nZ4A&s", degree: "MS ENT", text: "Ear, nose & throat specialist." },
  { name: "Dr. Meena Rao", img: "https://media.licdn.com/dms/image/v2/D5603AQG01B-sXShgDw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711038299411?e=2147483647&v=beta&t=jYNxJ3alsPA7CfydVm8wDOE-HIibPXKT6X7TihWdvKM", degree: "MD Psychiatry", text: "Mental wellness expert." },
  { name: "Dr. Rajeev Malhotra", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcQsb4VYg0r0_By0bqbIwSI-sCj_ireqKOPHrQ&s", degree: "MD Cardiology", text: "Heart disease specialist." },
  { name: "Dr. Pooja Sharma", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcQSkRnbCWi6oULW3IuKHvG6xEcSwNwhzizdLA&s", degree: "MD Dermatology", text: "Skin care specialist." },
  { name: "Dr. Sanjay Kapoor", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcTtnIzcPrOkWfLzQxje-jwGzGBDg2CETsXY-Q&s", degree: "MD Gastroenterology", text: "Digestive health expert." },
  { name: "Dr. Nisha Verma", img: "https://media.licdn.com/dms/image/v2/C5603AQEgIPaQLRG2vQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1631112469052?e=2147483647&v=beta&t=Zx_Pwl7vQf_cfpgBrk1n3bveyqIumilkF3n2ZlI5mOU", degree: "MD Pediatrics", text: "Childcare expert." },
  { name: "Dr. Arjun Mehta", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcQCH3MA4J2AfjgnOHBeYDC4d0qyg-djqeMw7A&s", degree: "MD Orthopedic", text: "Bone & joint specialist." },
  { name: "Dr. Shilpa Gupta", img: "https://assets.kimshospitals.com/images/doctors/dr-shilpa-gupta_1749667688.jpg", degree: "MD Neurology", text: "Brain & nervous system care." },
  { name: "Dr. Karan Singh", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcREl63zPoxnBNiSB01rdFNCbCiabgDwYf05Nw&s", degree: "MD Cardiology", text: "Heart health expert." },
  { name: "Dr. Neetu Sharma", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcQsLVxRUdDY4qotJsM0G_uZ3i1vTuQvikjtVA&s", degree: "MD Nutrition", text: "Diet and wellness guidance." },
  { name: "Dr. Anil Mehra", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcRGLtULdA8ZOzRSmR82_HnU9hoIGSNu-nu1kg&s", degree: "MD Oncology", text: "Cancer specialist." },
  { name: "Dr. Rina Kapoor", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcQkKcnpdDMHBR_mEiLUz_DuDVlmT-f2hqUnnw&s", degree: "MD Pediatrics", text: "Child growth & care expert." },
  { name: "Dr. Deepak Verma", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcR0zrfG0CTFTog5l1S28LKU7iD9dZ1880aK4A&s", degree: "MBBS, MD", text: "General medicine." },
  { name: "Dr. Suman Singh", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcRUgzy6g4MPRZaLfR0MFGMK2qNQg83Q1lVK7A&s", degree: "MS Orthopedic", text: "Musculoskeletal specialist." },
  { name: "Dr. Priya Yadav", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcSBOjsjiuMe_-KPESLmV2r_DOXl06MJ53VGiA&s", degree: "MD Dermatology", text: "Skin & beauty specialist." },
  { name: "Dr. Rohit Sharma", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcQFSamxxRwA0NquSTdqt6CkOn4Lb-edO91Yiw&s", degree: "MD Ophthalmology", text: "Eye & vision care." },
  { name: "Dr. Ananya Yadav", img: "https://media.licdn.com/dms/image/v2/C4E03AQEFF2HTlK0mhg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1653686531900?e=2147483647&v=beta&t=f9yKCsfDFc8wenLtt-07bWi0ZToWacRMZwOHNbv4hOE", degree: "BDS, MDS", text: "Dental & oral care." },
  { name: "Dr. Amit Verma", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcQRa0xTv7ZpoPQ2PhSmyuvh2eluCr3D42QwPQ&s", degree: "MBBS, MD", text: "Internal medicine." },
  { name: "Dr. Priya Yadav", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcQmYtjBwru_J_gb9WDsj3ejfJszlPm6ppzigw&s", degree: "MD Gynecology", text: "Women & reproductive health." },
  { name: "Dr. Neeraj Malhotra", img: "https://content.jdmagicbox.com/comp/amritsar/p8/0183px183.x183.170316001237.q5p8/catalogue/dr-neeraj-malhotra-lawrence-road-amritsar-ah9ye2brmt.jpg", degree: "MD Cardiology", text: "Heart & vascular health." },
  { name: "Dr. Rajesh Kapoor", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcSVxvp0n1_YYTQ0QyZp_FsfjH0SlO79W24YLQ&s", degree: "MD Nutrition", text: "Diet & wellness coach." },
  { name: "Dr. Sunita Yadav", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcTMR_5ABBQXDwShp2Zln60fwb2IcktpQNXwVA&s", degree: "MD Pediatrics", text: "Child health specialist." },
  { name: "Dr. Manoj Singh", img: "https://media.licdn.com/dms/image/v2/D4D03AQHBwkvl2BAcfw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1668539214396?e=2147483647&v=beta&t=dj0aExVV_av-77vxTWOoWLkZZn1_fqkLO_iclDxuNlI", degree: "MD Neurology", text: "Neurological care." },
  { name: "Dr. Ritu Verma", img: "https://max-website20-images.s3.ap-south-1.amazonaws.com/Whats_App_Image_2024_10_21_at_16_30_55_efb9d738de.jpeg", degree: "MD Endocrinology", text: "Hormone specialist." },
  { name: "Dr. Vikram Kapoor", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcQIINIsuv4W2norYlj5aG15FTdxSqgdOp6CXQ&s", degree: "MD Pulmonology", text: "Lung & breathing specialist." },
  { name: "Dr. Anil Sharma", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcTqMGkrbTN27HZHAEssDqmJsSjtKbyMhguStQ&s", degree: "MS ENT", text: "Ear, nose & throat care." },
  { name: "Dr. Meena Singh", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcQiOKGt2P-8q61Bww--CIjO68bgA5H7Mnge3w&s", degree: "MD Psychiatry", text: "Mental wellness." },
  { name: "Dr. Rajeev Kapoor", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcQyKzA71YdmTrvQfln9TIZDZ89GBGiTa8gdug&s", degree: "MD Cardiology", text: "Heart disease expert." },
  { name: "Dr. Pooja Yadav", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcT6hZTnYcV01XV03zCr7qc3mCL1jTcNb1VUDA&s", degree: "MD Dermatology", text: "Skin & hair care." },
  { name: "Dr. Sanjay Mehra", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcSYQBXj5FPOJRH3Gm2uGzYPn9Ivr89OhwFZZA&s", degree: "MD Gastroenterology", text: "Digestive system specialist." },
  { name: "Dr. Kiran Joshi", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcQKfoLA5gfSnqvv2Gpc9bO84yBtRXa-D23hBA&s", degree: "MD Cardiology", text: "Heart health specialist." },
  { name: "Dr. Ayesha Khan", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcT5Y3xSlpmlRSOsvO4LJ_uD-CbVBZhIDN4gEg&s", degree: "MD Neurology", text: "Brain and nervous system care." },
  { name: "Dr. Ramesh Bhat", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcTzVIU9zdvipE7-6J-jnF6SQcWVW3SsJcbNVw&s", degree: "MD Endocrinology", text: "Hormone & metabolism expert." },
  { name: "Dr. Seema Patel", img: "https://doximity-res.cloudinary.com/images/f_auto,q_auto,t_profile_photo_320x320/zccxprhw125oaabvh35d/seema-patel-md-kenneth-city-fl.jpg", degree: "MD Pediatrics", text: "Child healthcare specialist." },
  { name: "Dr. Vikram Mehta", img: "https://www.ceoinsightsindia.com/uploaded_images/company_logos/00hm1.VIKRAM.jpg", degree: "MD Pulmonology", text: "Respiratory system expert." },
  { name: "Dr. Nandini Rao", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcS9f0PFKjOUV5_1ccCiQOwMp3OTZZdR7uTLCg&s", degree: "MS Orthopedic", text: "Bone & joint care specialist." },
  { name: "Dr. Rajiv Chopra", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcSL7sZLjwh8vu8JzRX4YIHBOo0wvjKenngHTw&s", degree: "MD Dermatology", text: "Skin & cosmetic care." },
  { name: "Dr. Anushka Malhotra", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcS4mXwU5T-UiCXoYo6QpOIHdZHbT5xMuVrGXA&s", degree: "MD Gynecology", text: "Women’s health specialist." },
  { name: "Dr. Deepak Sharma", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcRfIylQmFKctlVaSivpKnDvG9X3audBdJlj5w&s", degree: "MBBS, MD", text: "General medicine expert." },
  { name: "Dr. Poonam Yadav", img: "https://encrypted-tbn0.gstatic.com/images?q=9GcQHHjkToVTwu4BwToCjyhv_5xiJtOkzFKp3ww&s", degree: "PhD Nutrition", text: "Diet & wellness guidance." }
];

const Doctor = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');

  const specialties = [...new Set(doctors.map(doc => {
    const degreeParts = doc.degree.split(', ');
    return degreeParts[degreeParts.length - 1].replace('MD ', '').replace('MS ', '');
  }))].sort();

  const cardsPerPageMap = {
    1: 12,
    2: 10,
    3: 9,
    4: 8,
    5: 7,
    6: 6,
    7: 5,
    8: 4
  };

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.degree.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialtyFilter === 'all' ||
      doctor.degree.toLowerCase().includes(specialtyFilter.toLowerCase());
    return matchesSearch && matchesSpecialty;
  });

  const itemsPerPage = cardsPerPageMap[page] || 4;
  const startIndex = Object.keys(cardsPerPageMap)
    .slice(0, page - 1)
    .reduce((acc, key) => acc + cardsPerPageMap[key], 0);

  const currentDoctors = filteredDoctors.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Object.keys(cardsPerPageMap).length;

  const handleNext = () => page < totalPages && setPage(page + 1);
  const handlePrev = () => page > 1 && setPage(page - 1);

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center justify-center">
            <FaUserMd className="mr-2 text-purple-500" /> Meet Our Expert Doctors
          </h1>
          <p className="text-lg">Find the right specialist for your healthcare needs</p>
        </div>

        {/* Search and Filter Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex items-center border border-gray-300 rounded-lg shadow-sm">
            <span className="p-3 text-purple-500">
              <FaSearch />
            </span>
            <input
              type="text"
              className="w-full p-3 border-0 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-r-lg"
              placeholder="Search doctors by name, specialty or keywords..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
            />
          </div>
          <select
            className="p-3 border border-purple-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={specialtyFilter}
            onChange={(e) => {
              setSpecialtyFilter(e.target.value);
              setPage(1);
            }}
          >
            <option value="all">All Specialties</option>
            {specialties.map((spec, index) => (
              <option key={index} value={spec}>{spec}</option>
            ))}
          </select>
        </div>

        {/* Doctors Grid */}
        {currentDoctors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentDoctors.map((doc, index) => (
              <div
                key={index}
                className="flex flex-col border-2 border-purple-500 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-center mt-4">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-28 h-28 rounded-full object-cover border-[3px] border-purple-500"
                  />
                </div>
                <div className="text-center p-4 flex-grow">
                  <h5 className="text-lg font-bold mb-1">{doc.name}</h5>
                  <p className="text-sm mb-3">{doc.degree}</p>
                  <p className="text-sm">{doc.text}</p>
                </div>
                <div className="p-4">
                  <button
                    className="w-full mb-2 py-2 text-sm font-medium border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                  >
                    <FaUserMd className="inline mr-2" /> View Profile
                  </button>
                  <button
                    className="w-full py-2 text-sm font-medium text-white bg-purple-500 border border-purple-500 rounded-lg hover:bg-white hover:text-purple-500 transition-all duration-300"
                  >
                    <FaCalendarAlt className="inline mr-2" /> Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <FaUserMd className="text-5xl mb-4 text-purple-500" />
            <h3 className="text-2xl font-bold mb-2">No doctors found</h3>
            <p className="text-base">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Pagination */}
        {filteredDoctors.length > 0 && (
          <nav className="my-8 flex justify-center">
            <ul className="flex gap-5 flex-wrap items-center space-x-2 justify-center">
              <li>
                <button
                  className={`p-2 rounded-lg ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-500 hover:text-white'}`}
                  onClick={handlePrev}
                  disabled={page === 1}
                  aria-label="Previous"
                >
                  <FaChevronLeft />
                </button>
              </li>
              {Object.keys(cardsPerPageMap).map((num) => (
                <li key={num}>
                  <button
                    className={`px-4 py-2 rounded-lg ${page === Number(num) ? 'bg-purple-500 text-white' : 'hover:bg-purple-500 hover:text-white'}`}
                    onClick={() => setPage(Number(num))}
                  >
                    {num}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className={`p-2 rounded-lg ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-500 hover:text-white'}`}
                  onClick={handleNext}
                  disabled={page === totalPages}
                  aria-label="Next"
                >
                  <FaChevronRight />
                </button>
              </li>
            </ul>
          </nav >
        )}
      </div >
    </div >
  );
};

export default Doctor;
