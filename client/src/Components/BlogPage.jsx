export default function BlogPage({ blogData }) {
  let { Title, SubTitle, Description, imgUrl, publishedAt, urlToBlog } =
    blogData;
  return (
    <section className="blogPage">
      <div className="blogPageHead">
        <h1>
          {Title}
          <span>-{SubTitle}</span>
        </h1>
      </div>
      <div className="blogPageImgSection">
        <img src={imgUrl} alt="img" />
        <p className="publishedDateText">PublishedAt: {publishedAt}</p>
      </div>
      <div className="blogPageBlogBody">
        <p>{Description}</p>
      </div>
    </section>
  );
}
