import { BiError } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <section className="ErrorPage">
      <div className="ErrorTextBox">
        <h1>
          <span>
            <BiError /> 404&nbsp;
          </span>
          Sorry, The page you have entered does not exists.
        </h1>
        <p>
          <Link to="/">Click here</Link> visit Home page
        </p>
      </div>
    </section>
  );
}
