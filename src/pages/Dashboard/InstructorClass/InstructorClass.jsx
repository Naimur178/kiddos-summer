import { Helmet } from "react-helmet-async";

import useAuth from "../../../hooks/useAuth";
import useInstructorCourses from "../../../hooks/useInstructorCourses";
import { FaTrashAlt } from "react-icons/fa";

const InstructorClass = () => {
  const { user } = useAuth();
  const [classes] = useInstructorCourses();
  console.log(classes);

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="text-center mt-5">
        <h1 className="text-3xl font-semibold">{user.displayName}</h1>
        <p className="">Instructor in {classes?.length} Classes</p>

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
                            classes.map((course, index) =>
                             <tr key={course._id}>
                                <th>{index + 1}</th>
                                <td>{course.courseTitle}</td>
                                <td>{course.instructorName}</td>
                                <td>{course.status}
                                    </td>
                                <td className="flex items-center gap-2">
                                <button className="btn btn-outline btn-xs bg-red-500 text-white">Reject</button>
                                <button className="bg-green-500 text-white btn btn-outline btn-xs">Approve</button>
                                
                                    <button  className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
      </div>
    </div>
  );
};

export default InstructorClass;
