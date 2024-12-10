function CourseItem({ title, description, thumbnail, isFavorite }) {
  return (
    <article className="course">
      <img className="course__img" src={thumbnail} alt="강의이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course_icons">
        <button className="btn">
          {isFavorite ? (
            <img className="icon-heart" src="/img/heart-fill-icon.svg" alt="" />
          ) : (
            <img className="icon-heart" src="/img/heart-icon.svg" alt="" />
          )}
        </button>
      </div>
    </article>
  );
}

export default CourseItem;
