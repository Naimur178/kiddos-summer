const cover_img = "https://i.ibb.co/Qc4DFX9/1686129966225-removebg-preview.png";
import { Link, Navigate } from "react-router-dom";
import SectionTItle from "../../components/SectionTitle/SectionTItle";
import useCourses from "../../hooks/useCourses";
import PageCover from "../../shared/PageCovers/PageCovers";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const Courses = () => {
  
  const [courses] = useCourses();
  const [id, setId] = useState();
  const [, refetch] = useCart();
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const that_course=courses.find(course => course._id=== id )
  const handleAddToCart = item => {
    const { courseTitle, courseImage, price, _id } = item;
    console.log(item);
    if(user && user.email){
        const cartItem = {menuItemId: _id, courseTitle, courseImage, price, email: user.email}
        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                refetch(); // refetch cart to update the number of items in the cart
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Food added on the cart.',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    else{
        Swal.fire({
            title: 'Please login to order the food',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now!'
          }).then((result) => {
            if (result.isConfirmed) {
              Navigate('/login', {state: {from: location}})
            }
          })
    }
}
  console.log(that_course)
  console.log(courses);
  return (
    <div className="mb-5">
      <PageCover img={cover_img} title="All cources"></PageCover>
      <SectionTItle
        heading="A bunch of Great Courses"
        subHeading="World best courses for kids"
      ></SectionTItle>
      <dialog id="my_modal_3" className="modal ">
        <form method="dialog" className="modal-box max-w-4xl">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          {
            <div>
              <img src={that_course?.courseImage} className="p-12 pb-4" alt="" />
              <div className="px-12 pb-5">
              <h2 className="text-3xl font-semibold">{that_course?.courseTitle} </h2>
              <p>Instructor: {that_course?.instructorName}</p>
              <p>Category: {that_course?.category}</p>
              <p>Description: {that_course?.description}</p>
              <p>Price: ${that_course?.price}</p>
              <p>Already Enrolled: {that_course?.studentsCount}</p>
              <h2>Course Outline:</h2>
              <ul className="list list-disc ps-8">
              {
                that_course?.curriculum.map(outline =><li>{outline}</li>)
              }
              </ul>
              </div>
            </div>
            
          }
        </form>
      </dialog>

      <div className="grid grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course._id} className="card  bg-base-100 shadow-xl">
            <figure>
              <img src={course.courseImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course.courseTitle}</h2>
              <p>{course.description}</p>
              <p>Available Seats: {isAdmin? '0':course.available}</p>
              <div className="card-actions justify-between">
                <button className="btn btn-outline" onClick={()=>handleAddToCart(course)} disabled={user? false:true}>Add to Cart</button>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    setId(course._id);
                    window.my_modal_3.showModal();

                  } }
                >
                  view Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
