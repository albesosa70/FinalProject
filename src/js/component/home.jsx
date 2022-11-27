import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import finallogo from "../../img/finallogo.png";

//create your first component
const Home = () => {
  return (
    <div className="body">
      <nav className="navbar navbar-expand-lg bg-info navbar-dark">
        <div className="container-fluid">
          <img
            className="navbar-brand"
            src="finallogo.png"
            style={{ width: 150, height: 150 }}
          ></img>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>{" "}
      {/*Aqui termina el Navbar  */}
      <div className="banner">
        <img
          src="https://mypropertyplanblog.files.wordpress.com/2017/09/miles-for-pets-banner-e1504804322625.jpg"
          alt="We love Pets"
        ></img>
      </div>
      {/*Aqui termina el Banner  */}
      <div className="MainProducts">
        <h1 className="featured" style={{ marginLeft: 30, marginTop: 10 }}>
          {" "}
          Featured
        </h1>

        <div className="row">
          <div className="col-md-3 p-3">
            <div
              className="card"
              style={{ marginLeft: 30, width: 300, height: 430 }}
            >
              <img
                src="https://ae01.alicdn.com/kf/HTB17AEhbifrK1RjSspbq6A4pFXaY/Fashion-Pet-Cat-Costume-Summer-Cat-Vest-Hoodie-Cozy-Mascoats-Gotos-Clothes-for-Cats-Katten-Coat.jpg_580x580.jpg"
                alt=""
                style={{ width: 298, height: 299 }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">
                  Fashion Pet Cat Hoodie-Sullivan Costume
                </h5>
                <a href="#" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div className="card" style={{ width: 300, height: 430 }}>
              <img
                src="https://ae01.alicdn.com/kf/HTB1Vw7nbovrK1RjSszfq6xJNVXaq/Fashion-Pet-Cat-Costume-Summer-Cat-Vest-Hoodie-Cozy-Mascoats-Gotos-Clothes-for-Cats-Katten-Coat.jpg_640x620.jpg"
                alt=""
                style={{ width: 298, height: 300 }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Fashion Pet Cat Pikachu Costume</h5>

                <a href="#" className="btn btn-primary text-center">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div className="card" style={{ width: 300, height: 430 }}>
              <img
                src="https://ae01.alicdn.com/kf/H8b0f024ef0dc4a168cedfa576e70caa7e/Bathroom-Puppy-Big-Dog-Cat-Bath-Massage-Gloves-Brush-Soft-Safety-Silicone-Pet-Accessories-for-Dogs.jpg_640x640.jpg"
                alt=""
                style={{ width: 280, height: 300 }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">
                  Brush soft safety silicone for dogs and cats
                </h5>
                <a href="#" className="btn btn-primary text-center">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div className="card" style={{ width: 300, height: 430 }}>
              <img
                src="https://ae01.alicdn.com/kf/H2322325f6d4a4968b85bd3f6df5d7ca4b/Cute-Puppy-Dog-Cat-Squeaky-Toy-Bite-Resistant-Pet-Chew-Toys-for-Small-Dogs-Animals-Shape.jpg_640x620.jpg"
                alt=""
                style={{ width: 290, height: 300 }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">
                  Cute duck toy bite resistant for small dogs and cats
                </h5>
                <a href="#" className="btn btn-primary text-center">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/*Aqui termina el  MainProducts  */}
      <footer
        className="text-center bg-info text-white"
        style={{ backgroundColor: "white" }}
      >
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i ClassName="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook"></i>
            </a>

            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </section>
        </div>

        <div className="text-center text-dark p-3">
          © 2022 Copyright:
          <a className="text-dark" href="https://">
            serviciosS&Gpetshop.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
