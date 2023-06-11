import { useParams } from "react-router-dom";
import useCourses from "../../hooks/useCourses";
import PageCover from "../../shared/PageCovers/PageCovers";


const CourseDetails = () => {
    const [courses] = useCourses();
    const params = useParams();
    console.log(params)

    return (
        <div>
           <PageCover img></PageCover>
        </div>
    );
};

export default CourseDetails;