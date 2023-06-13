import { Helmet } from "react-helmet-async";

import useAuth from "../../../hooks/useAuth";
import useInstructorCourses from "../../../hooks/useInstructorCourses";


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
        <p><span className="bg-green-400 px-2 rounded">{user.email}</span>
        </p>
        <p className="">Instructor in {classes?.length} Classes</p>

        <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Name</th>
                            <th>Available Seats</th>
                            <th>status</th>
                            <th>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((course, index) =>
                             <tr key={course._id}>
                                <th>{index + 1}</th>
                                <td>{course.courseTitle}</td>
                                <td>{course.availableSeats}</td>
                                <td>{
                                  course.status == 'pending'?
                                  <span className="px-2 bg-yellow-400 rounded-xl">{course.status}</span>: course.status == 'approved'?
                                  <span className="px-2 bg-green-400 rounded-xl">{course.status}</span>
                                  :
                                  <span className="px-2 bg-red-400 rounded-xl">{course.status}</span>
                                  }
                                    </td>
                                <td className="">
                                {course.feedback}
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
