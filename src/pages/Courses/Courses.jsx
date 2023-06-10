const cover_img = "https://i.ibb.co/Qc4DFX9/1686129966225-removebg-preview.png";
import SectionTItle from "../../components/SectionTitle/SectionTItle";
import useCourses from "../../hooks/useCourses";
import PageCover from "../../shared/PageCovers/PageCovers";

const Courses = () => {
  const [courses]= useCourses();
  console.log(courses)
  return (
    <div>
      <PageCover img={cover_img} title="All cources"></PageCover>
      <SectionTItle heading='A bunch of Great Courses' subHeading='World best courses for kids'></SectionTItle>
      
      <div className="grid grid-cols-3 gap-4">
      {
      courses.map(course => 
        
        <div key={course._id} className="card  bg-base-100 shadow-xl">
          <figure>
            <img
              src={course.courseImage}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{course.courseTitle}</h2>
            <p>{course.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Courses;
