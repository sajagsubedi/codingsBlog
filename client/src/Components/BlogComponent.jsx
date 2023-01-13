import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function BlogComponent({ blogData }) {
  let { Title, SubTitle, Description, imgUrl, publishedAt, urlToBlog } =
    blogData;
  return (
    <div className="BlogComponentBox">
      <div className="imgSection">
        <img src={imgUrl} alt="img" />
      </div>
      <div className="BlogBody">
        <div className="titleSection">
          <h1 className="BlogTitle">
            {Title}
            <span className="blogSubTitle">-{SubTitle}</span>
          </h1>
        </div>
        <div className="paragraphSection">
          <p className="BlogDescription">
            {Description.length > 250
              ? Description.slice(0, 250).concat("...")
              : Description}
          </p>
          <Link className="linkToBlog" to={urlToBlog}>
            Read More <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
