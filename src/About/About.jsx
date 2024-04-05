import "./About Max-600px.css";
import "./About Min-600px.css";
import "./About Min-900px.css";

function AboutViews() {
  return (
    <div id="about">
      <a href="#about" className="about__bar--scroll">
        <div className="about__bar--scroll--title">croll down </div>
      </a>
      <div className=" layout">
        <div className="about__container--content">
          <div className="about__box--title">
            <h3>Hello There</h3>
            <h2>We Are Glint</h2>
            <hr className="about__bar--title" />
          </div>
          <div className="about__box--description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt.
          </div>
          <div className="about__box--achieve ">
            <div className="about__items--achieve">
              <div className="about__items--achieve--number">127</div>
              <div className="about__items--achieve--title">Awards Received</div>
            </div>
            <div className="about__items--achieve">
              <div className="about__items--achieve--number">1505</div>
              <div className="about__items--achieve--title">Cups of Coffee</div>
            </div>
            <div className="about__items--achieve">
              <div className="about__items--achieve--number">109</div>
              <div className="about__items--achieve--title">Projects Completed</div>
            </div>
            <div className="about__items--achieve">
              <div className="about__items--achieve--number">102</div>
              <div className="about__items--achieve--title">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutViews;
