function CourseItem({ title, description, thumbnail }) {
  const isEmpty = false;
  if (isEmpty) {
    return <p>강의가 없습니다</p>;
  }
  return (
    <article className="course">
      <img className="course__img" src={thumbnail} alt="강의이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
    </article>
  );
}

export default CourseItem;