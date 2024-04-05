import "./Client Max-600px.css";
import './Client Min-600px.css'
import './Client Min-900px.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
function ClientViews() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settingsUser = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          arrows: false,
        },
      }
    ],
  };
  return (
    <div id="clients">
      <div className="layout">
        <div className="client__container--title">
          <div className="client--title">Recent client</div>
          <div className="client--description">
            Glint has been honored to partner up with these clients
          </div>
        </div>
        <div className="client__container--slider--company slider-container">
          <Slider {...settings}>
            <div className="client__box--slicer--img">
              <img
                width={"100%"}
                height={"150rem"}
                src="./logo/logo company's (1).png"
                alt=""
              />
            </div>
            <div className="client__box--slicer--img">
              <img
                width={"100%"}
                height={"150rem"}
                src="./logo/logo company's (2).png"
                alt=""
              />
            </div>
            <div className="client__box--slicer--img">
              <img
                width={"100%"}
                height={"150rem"}
                src="./logo/logo company's (3).png"
                alt=""
              />
            </div>
            <div className="client__box--slicer--img">
              <img
                width={"100%"}
                height={"150rem"}
                src="./logo/logo company's (4).png"
                alt=""
              />
            </div>
            <div className="client__box--slicer--img">
              <img
                width={"100%"}
                height={"150rem"}
                src="./logo/logo company's (5).png"
                alt=""
              />
            </div>
            <div className="client__box--slicer--img">
              <img
                width={"100%"}
                height={"150rem"}
                src="./logo/logo company's (6).png"
                alt=""
              />
            </div>
            <div className="client__box--slicer--img">
              <img
                width={"100%"}
                height={"150rem"}
                src="./logo/logo company's (7).png"
                alt=""
              />
            </div>
            <div className="client__box--slicer--img">
              <img
                width={"100%"}
                height={"150rem"}
                src="./logo/logo company's (8).png"
                alt=""
              />
            </div>
          </Slider>
        </div>
        <hr className="client__container--bar" />
        <div className="client__container--slider--users">
          <Slider {...settingsUser}>
            <div className="client__box--slider--users">
              <div className="client__box--slider--users--description">
                Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio
                nam accusantium ipsum. Laudantium quia consequatur molestias
                delectus culpa facere hic dolores aperiam. Accusantium quos qui
                praesentium corpori. Excepturi nam cupiditate culpa doloremque
                deleniti repellat.
              </div>
              <div className="client__box--slider--users--img">
                <div className="client_slider--users--img">
                  <img width={"100%"} src="./user/user-01.png" alt="" />
                </div>
              </div>
              <div className="client__box--slider--users--profile">
                <div className="client__box--slider--users--name">Tim Cook</div>
                <div className="client__box--slider--users--role">
                  CEO, Apple
                </div>
              </div>
            </div>
            <div className="client__box--slider--users">
              <div className="client__box--slider--users--description">
                Excepturi nam cupiditate culpa doloremque deleniti repellat.
                Veniam quos repellat voluptas animi adipisci. Nisi eaque
                consequatur. Quasi voluptas eius distinctio. Atque eos maxime.
                Qui ipsam temporibus quisquam vel.
              </div>
              <div className="client__box--slider--users--img">
                <div className="client_slider--users--img">
                  <img width={"100%"} src="./user/user-03.png" alt="" />
                </div>
              </div>
              <div className="client__box--slider--users--profile">
                <div className="client__box--slider--users--name">Tim Cook</div>
                <div className="client__box--slider--users--role">
                  CEO, Apple
                </div>
              </div>
            </div>{" "}
            <div className="client__box--slider--users">
              <div className="client__box--slider--users--description">
                Repellat dignissimos libero. Qui sed at corrupti expedita
                voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                Autem eaque officia cum exercitationem sunt voluptatum
                accusamus. Quasi voluptas eius distinctio.
              </div>
              <div className="client__box--slider--users--img">
                <div className="client_slider--users--img">
                  <img width={"100%"} src="./user/user-02.png" alt="" />
                </div>
              </div>
              <div className="client__box--slider--users--profile">
                <div className="client__box--slider--users--name">Tim Cook</div>
                <div className="client__box--slider--users--role">
                  CEO, Apple
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default ClientViews;
