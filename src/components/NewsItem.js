import React, { Component } from "react";

export class NewsItem extends Component {
  defaultUrl =
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fresize.indiatvnews.com%2Fen%2Fresize%2Fnewbucket%2F400_-%2F2020%2F11%2Fbreaking-1603159815-1606179737.jpg&tbnid=7YGU2SLnvzrlhM&vet=12ahUKEwiPhYGdq52BAxXzpekKHb0ZByMQMygMegUIARCXAQ..i&imgrefurl=https%3A%2F%2Fwww.indiatvnews.com%2Fnews%2Findia%2Fbreaking-news-live-updates-coronavirus-case-ahmed-patel-death-latest-news-sonia-gandhi-pm-modi-667209&docid=BD81QdWH8AMV-M&w=400&h=224&q=top%20news%20jpg&ved=2ahUKEwiPhYGdq52BAxXzpekKHb0ZByMQMygMegUIARCXAQ";

  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={!imgUrl ? this.defaultUrl : imgUrl}
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
  }
}

export default NewsItem;
