import { FaTrashAlt } from "react-icons/fa";
import PageCover from "../../../shared/PageCovers/PageCovers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";
const img ="https://img.freepik.com/free-photo/cruel-war-scenes-digital-painting_456031-162.jpg?w=1380&t=st=1686392156~exp=1686392756~hmac=4b1362cf48c7928b5986a7a0a974599a61dd8f725e0c1a5112d2c348b00c90d0"

const MyCourses = () => {
    const [axiosSecure] = useAxiosSecure();
    const [enrolled, setEnrolled] = useState([]);
    const {user} = useAuth();
    const email = user.email;


    useEffect(()=>{
        axiosSecure.get(`/payments/${email}`)
        .then(res => {
            setEnrolled(res.data)
        })
    },[])
    let sum = 0;
    enrolled.map(enroll =>{
        sum= sum+enroll.price;
        
    })
    console.log(sum)

    return (
        <div className="w-full ">
           
            <PageCover img={img} title={'Enrolled Courses'}></PageCover>
            <div className="flex justify-between py-5 text-3xl m-5 px-5">
            <h2 className="bg-green-400 p-3 rounded-xl text-white">Total Enrolled Courses: {enrolled.length}</h2>
            <h2 className="bg-red-400 p-3 rounded-xl text-white">Total Payment ${sum}</h2>
            </div>
            <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Course Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {enrolled.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.courseImage}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.courseTitle}</td>
                <td className="">${item.price}</td>
                <td className="">
                  
                    <button className="btn btn-warning btn-sm">Resume Course</button>
                  
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

        </div>
    );
};

export default MyCourses;