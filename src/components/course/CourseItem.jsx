function HeartIconBtn({ onClick, isFavorite = false }) {
  return (
    <button className="btn" onClick={(e) => onClick(e)}>
      <img
        className="btn__img"
        src={isFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"}
        alt=""
      />
    </button>
  );
}

function LinkIconBtn({ link }) {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      <img className="btn__img" src="/img/link-icon.svg" alt="" />
    </a>
  );
}
function CourseItem({
  id,
  title,
  description,
  thumbnail,
  isFavorite,
  link,
  onFavorite,
}) {
  function handleFavorite(e) {
    e.stopPropagation();
    onFavorite(id, !isFavorite);
  }

  function handleItemClick() {
    alert("item click~!");
    open(link, "_blank");
  }
  return (
    <article className="course" onClick={handleItemClick}>
      <img className="course__img" src={thumbnail} alt="강의이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course_icons">
        <HeartIconBtn isFavorite={isFavorite} onClick={handleFavorite} />
        {link && <LinkIconBtn link={link} />}
      </div>
    </article>
  );
}

export default CourseItem;
