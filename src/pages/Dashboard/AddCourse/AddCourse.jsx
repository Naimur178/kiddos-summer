
import { useForm } from 'react-hook-form';

import Swal from "sweetalert2";
import SectionTItle from '../../../components/SectionTitle/SectionTItle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import PageCover from '../../../shared/PageCovers/PageCovers';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
const img = 'https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?w=1380&t=st=1686397129~exp=1686397729~hmac=c4e3f9767de16b0c146257ab67c23c4956c9ecb372106b47ef83ff772915304a'

const title = 'Add A Course';

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddCourse = () => {
    const {user} = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

  

    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const courseImage = imgResponse.data.display_url;
                const {courseTitle, price, outline, category, description, seats} = data;
                const availableSeats =seats;
                const enrolled = 0;

                const curriculum =outline.split(/[.?!]+/);
                const status = 'pending';
                const email = user.email;
                const instructorName = user.displayName;

                const newItem = {instructorName, courseTitle, price: parseFloat(price), category, courseImage, curriculum, status, email, description, availableSeats, enrolled }
                console.log(newItem)
                axiosSecure.post('/courses', newItem)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

    };
    
    
    return (
        <div className="w-full px-10">
            <PageCover img={img} title={title}></PageCover>
            <SectionTItle subHeading="What's new" heading="Add A New Course" ></SectionTItle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Course Title</span>
                    </label>
                    <input type="text" placeholder="Course Title"
                        {...register("courseTitle", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Painting</option>
                            <option>Sculpture</option>
                            <option>Textile and Fiber Arts</option>
                            <option>Jewelry Making</option>
                            <option>Paper Crafts and Origami</option>
                            
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Accomodation Seats*</span>
                        </label>
                        <input type="number" {...register("seats", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Course Descriptions</span>
                    </label>
                    <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Descriptions"></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Course Outline</span>
                    </label>
                    <textarea  {...register("outline", { required: true })} className="textarea textarea-bordered h-24" placeholder="Course Curriculum"></textarea>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input  type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddCourse;