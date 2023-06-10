import PageCover from "../../../shared/PageCovers/PageCovers";
const img ="https://img.freepik.com/free-photo/cruel-war-scenes-digital-painting_456031-162.jpg?w=1380&t=st=1686392156~exp=1686392756~hmac=4b1362cf48c7928b5986a7a0a974599a61dd8f725e0c1a5112d2c348b00c90d0"

const MyCourses = () => {
    return (
        <div>
           
            <PageCover img={img} title={'Enrolled Courses'}></PageCover>
            <h2>hello from my course</h2>
        </div>
    );
};

export default MyCourses;