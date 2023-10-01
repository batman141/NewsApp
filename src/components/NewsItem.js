import React from "react";

const NewsItem = (props) => {
  let defaultUrl =
    "https://static.toiimg.com/thumb/imgsize-81916,msid-65191600,width-400,resizemode-4/65191600.jpg";

  let { title, description, imgUrl, newsUrl, author, date, source } = props; //destructuring
  return (
    <div className="my-3">
      <div className="card">
        <img
          src={imgUrl ? imgUrl : defaultUrl}
          className="card-img-top"
          alt="..."
          height="150px"
        />
        <div className="card-body">
          <h5 className="card-title">
            {title.length < 40 ? title : title + "..."}
          </h5>

          <span
            className="badge"
            style={{ backgroundColor: "#e9ecef", color: "black" }}
          >
            {source}
          </span>

          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} on{" "}
              {date ? new Date(date).toGMTString() : "___"}
            </small>
          </p>

          <p className="card-text">{description}...</p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
