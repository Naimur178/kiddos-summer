import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: courses = [], refetch } = useQuery(['courses'], async () => {
        const res = await axiosSecure.get('/courses')
        return res.data;
    })

    const handleDelete = course => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/courses/${course._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    const handleApprove = (course) =>{
        axiosSecure.patch(`/courses/approved/${course._id}`)
                    .then(res => {
                        console.log('update res', res.data);
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire(
                                'Updated!',
                                'Course has been Approved',
                                'success'
                            )
                        }
                    })
    }

    const handleReject = (course) =>{
        axiosSecure.patch(`/courses/deny/${course._id}`)
                    .then(res => {
                        console.log('update res', res.data);
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire(
                                'Updated!',
                                'Course has been Denied',
                                'success'
                            )
                        }
                    })
    }


    return (
        <div className="w-full">
            <Helmet>
                <title>Kiddos | All Classes</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total Classes: {courses.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((course, index) =>
                             <tr key={course._id}>
                                <th>{index + 1}</th>
                                <td>{course.courseTitle}</td>
                                <td>{course.instructorName}</td>
                                <td>{course.status}
                                    </td>
                                <td className="flex items-center gap-2">
                                <button onClick={()=>handleReject(course)} className="btn btn-outline btn-xs bg-red-500 text-white">Reject</button>
                                <button onClick={()=>handleApprove(course)} className="bg-green-500 text-white btn btn-outline btn-xs">Approve</button>
                                
                                    <button onClick={() => handleDelete(course)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;