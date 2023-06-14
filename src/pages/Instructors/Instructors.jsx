import { useState } from "react";
import { useEffect } from "react";
import PageCover from "../../shared/PageCovers/PageCovers";
import { Helmet } from "react-helmet-async";
import { FaPhone, FaVoicemail } from "react-icons/fa";
import {FiMail } from "react-icons/fi";
const img = "/cover.svg";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://last-assignment-server-iota.vercel.app/users/instructor")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Kiddos | Instructors</title>
      </Helmet>
      <PageCover img={img} title={"All Instructors"}></PageCover>
      <div className="grid grid-cols-3 gap-4 py-5">
        {instructors.map((instructor) => (
          <div key={instructor._id}>
            <div className="card glass">
              <figure>
                <img
                  src={instructor.photoURL}
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{instructor.displayName}</h2>
                <p className="flex items-center gap-3"><span><FiMail></FiMail></span> <span>{instructor.email}</span> </p>
                <div className="card-actions justify-end">
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
