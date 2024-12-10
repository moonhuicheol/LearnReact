import Card from "../Card";
import CourseItem from "./CourseItem";

const CourseListCard = ({ items }) => {
  const [course1, course2, course3] = items;
  return (
    <>
      <Card title="강의목록">
        <div className="courses">
          <CourseItem {...course1} />
          <CourseItem {...course2} />
          <CourseItem {...course3} />
        </div>
      </Card>
    </>
  );
};

export default CourseListCard;
