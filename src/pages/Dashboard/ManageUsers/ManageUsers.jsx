import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";




const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user =>{
        fetch(`https://last-assignment-server-iota.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.displayName} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleMakeInstructor = user =>{
        fetch(`https://last-assignment-server-iota.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.displayName} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | All users</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td className="decoration-orange-500">{ user.role === 'admin' ? 'admin' : user.role==="instructor"? 'instructor': "student"
                                     
                                    }</td>
                                <td>
                                    { user.role=='user'? <button onClick={()=>handleMakeInstructor(user)} className="btn btn-outline btn-xs" >make Instructor</button>: user.role=='instructor'?
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-outline btn-xs" >
                                        Make Admin
                                    </button>
                                    :
                                    <></>

                                    }

                                </td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;