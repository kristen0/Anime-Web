import React from "react";
import "./Home.css";
import { Navbar, Nav, Form } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div className="body">
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand
          style={{ color: "crimson", fontWeight: "bold" }}
          href="#home"
        >
          ANIME GO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              style={{ color: "white", fontWeight: "bold" }}
              href="https://www.viz.com/"
            >
              MANGA
            </Nav.Link>
            <Nav.Link
              style={{ color: "white", fontWeight: "bold" }}
              href="https://yourcountdown.to/everything?search=&tags=Anime&tag_match_type=any&confirmed_status=any&order=most_popular"
            >
              COUNTDOWNS
            </Nav.Link>
            <Nav.Link
              style={{ color: "white", fontWeight: "bold" }}
              href="https://wall.alphacoders.com/by_category.php?id=3&name=Anime+Wallpapers&filter=4K+Ultra+HD"
            >
              WALLAPERS
            </Nav.Link>
          </Nav>
          <Form inline>
            <Nav.Link style={{ color: "crimson", fontWeight: "bold" }} href="/">
              LOGIN
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div
        style={{
          marginLeft: "0.25rem",
          marginRight: "0.25rem",
          marginTop: "0.25rem",
        }}
      >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpapercave.com/wp/wp2301625.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{color:"OrangeRed"}}>Shonen</h3>
              <p>
                Sports, fantasy, science fiction, and even horror stories are
                found beneath this umbrella.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpapercave.com/wp/wp2301703.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 style={{color:"lightblue"}}>Seinen</h3>
              <p> Violent, sexual, satirical, or psychologically intense.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpapercave.com/wp/wp2301709.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 style={{color:"aqua"}}>Shoujo</h3>
              <p>Dramatic, adventure, comedy and action.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images2.alphacoders.com/955/thumb-1920-955301.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 style={{color:"red"}}>Josei</h3>
              <p> Erotic, intense, and dark subjects than other genres</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images7.alphacoders.com/742/thumb-1920-742760.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 style={{color:"pink"}}>Kodomomuke</h3>
              <p>
                {" "}
                super cute, imaginative, and creative, as well as has a moral
                message.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container-fluid" style={{borderstyle: "solid"}} >
        <div className="row">
          <div className="col-sm-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <img
                src="https://images3.alphacoders.com/653/thumbbig-653529.webp"
                alt=""
              />
              <h4 id="tit"> Atttack on Titans </h4>{" "}
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <a href="https://www1.gogoanime.ai/category/shingeki-no-kyojin">
                  {" "}
                  <input type="button" className="btn" value="Season 1" />
                </a>
                <a href="https://www1.gogoanime.ai/category/shingeki-no-kyojin-season-2">
                  {" "}
                  <input type="button" className="btn" value="Season 2" />
                </a>
                <a href="https://www1.gogoanime.ai/category/shingeki-no-kyojin-season-3">
                  {" "}
                  <input type="button" className="btn" value="Season 3.1" />
                </a>
                <a href="https://www1.gogoanime.ai/category/shingeki-no-kyojin-season-3-part-2">
                  {" "}
                  <input type="button" className="btn" value="Season 3.2" />
                </a>
                <a href="https://www1.gogoanime.ai/category/shingeki-no-kyojin-the-final-season">
                  {" "}
                  <input type="button" className="btn" value="Season 4" />
                </a>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-sm-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <img
                src="https://images.alphacoders.com/667/thumbbig-667209.webp"
                alt=""
                // height="253px"
              />
              <h4 id="tit"> death note </h4>{" "}
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <a href="https://www1.gogoanime.ai/category/death-note">
                  {" "}
                  <input type="button" className="btn" value="Death Note" />
                </a>
              </div>{" "}
            </div>
          </div>{" "}
          <div className="col-sm-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <img
                src="https://images4.alphacoders.com/744/thumbbig-744192.webp"
                alt=""
              />
              <h4 id="tit"> food wars </h4>{" "}
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <a href="https://www1.gogoanime.ai/category/shokugeki-no-souma">
                  {" "}
                  <input type="button" className="btn" value="Season 1" />
                </a>
                <a href="https://www1.gogoanime.ai/category/shokugeki-no-souma-ni-no-sara">
                  {" "}
                  <input type="button" className="btn" value="Season 2" />
                </a>
                <a href="https://www1.gogoanime.ai/category/shokugeki-no-souma-san-no-sara">
                  {" "}
                  <input type="button" className="btn" value="Season 3.1" />
                </a>
                <a href="https://www1.gogoanime.ai/category/shokugeki-no-souma-shin-no-sara">
                  {" "}
                  <input type="button" className="btn" value="Season 3.2" />
                </a>
                <a href="https://www1.gogoanime.ai/category/shokugeki-no-souma-gou-no-sara">
                  {" "}
                  <input type="button" className="btn" value="Season 3.3" />
                </a>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-sm-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <img
                src="https://images8.alphacoders.com/568/thumbbig-568709.webp"
                alt=""
              />
              <h4 id="tit"> tokyo ghoul </h4>{" "}
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <a href="https://www1.gogoanime.ai/category/tokyo-ghoul">
                  {" "}
                  <input type="button" className="btn" value="Season 1" />
                </a>
                <a href="https://www1.gogoanime.ai/category/tokyo-ghoulre">
                  {" "}
                  <input type="button" className="btn" value="Season 2" />
                </a>
                <a href="https://www1.gogoanime.ai/category/tokyo-ghoul-a">
                  {" "}
                  <input type="button" className="btn" value="Season 3" />
                </a>
                <a href="https://www1.gogoanime.ai/category/tokyo-ghoulre-2nd-season">
                  {" "}
                  <input type="button" className="btn" value="Season 4" />
                </a>
              </div>{" "}
            </div>
          </div>{" "}
          <div className="col-sm-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <img
                src="https://images4.alphacoders.com/679/thumbbig-679753.webp"
                alt=""
              />
              <h4 id="tit"> code geass </h4>{" "}
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <a href="https://www1.gogoanime.ai/category/code-geass-lelouch-of-the-rebellion">
                  {" "}
                  <input type="button" className="btn" value="Season 1" />
                </a>{" "}
                <a href="https://www1.gogoanime.ai/category/-code-geass-lelouch-of-the-rebellion-r2">
                  {" "}
                  <input type="button" className="btn" value="Season 2" />
                </a>
              </div>{" "}
            </div>
          </div>{" "}
          <div className="col-sm-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <img
                src="https://images3.alphacoders.com/103/thumbbig-1038708.webp"
                alt=""
              />
              <h4 id="tit"> fire force </h4>{" "}
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <a href="https://www1.gogoanime.ai/category/enen-no-shouboutai">
                  {" "}
                  <input type="button" className="btn" value="Season 1" />
                </a>
                <a href="https://www1.gogoanime.ai/category/enen-no-shouboutai-ni-no-shou">
                  {" "}
                  <input type="button" className="btn" value="Season 2" />
                </a>
              </div>{" "}
            </div>
          </div>{" "}
          <div className="col-sm-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px;",
              }}
            >
              <img
                src="https://images3.alphacoders.com/103/thumbbig-1031845.webp"
                alt=""
              />
              <h4 id="tit"> vinland saga </h4>{" "}
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <a href="https://www1.gogoanime.ai/category/vinland-saga">
                  {" "}
                  <input type="button" className="btn" value="Season 1" />
                </a>
              </div>{" "}
            </div>
          </div>{" "}
          <div className="col-sm-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px;",
              }}
            >
              <img
                src="https://images3.alphacoders.com/660/thumbbig-660725.webp"
                alt=""
              />
              <h4 id="tit"> one punch man </h4>{" "}
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <a href="https://www1.gogoanime.ai/category/one-punch-man">
                  {" "}
                  <input type="button" className="btn" value="Season 1" />
                </a>
                <a href="https://www1.gogoanime.ai/category/one-punch-man-2nd-season">
                  {" "}
                  <input type="button" className="btn" value="Season 2" />
                </a>
              </div>{" "}
            </div>
          </div>{" "}
          <div className="col-sm-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px;",
              }}
            >
              <img
                src="https://images4.alphacoders.com/100/thumbbig-1000962.webp"
                alt=""
              />
              <h4 id="tit"> Promised neverland </h4>{" "}
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <a href="https://www1.gogoanime.ai/category/yakusoku-no-neverland">
                  {" "}
                  <input type="button" className="btn" value="Season 1" />
                </a>
                <a href="https://www1.gogoanime.ai/category/yakusoku-no-neverland-2nd-season">
                  {" "}
                  <input type="button" className="btn" value="Season 2" />
                </a>
              </div>{" "}
            </div>
          </div>{" "}
          <div className="col-sm-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <img
                src="https://images3.alphacoders.com/123/thumbbig-123037.webp"
                alt=""
              />
              <h4 id="tit"> one piece </h4>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <a href="https://www1.gogoanime.ai/category/one-piece">
                  {" "}
                  <input type="button" className="btn" value="One Piece" />
                </a>
              </div>{" "}
            </div>{" "}
          </div>
          <div class="col-sm-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <img
                src="https://images7.alphacoders.com/703/thumbbig-703704.webp"
                alt=""
              />
              <h4 id="tit"> Naruto </h4>{" "}
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <a href="https://ww.gogoanimes.org/category/naruto">
                  {" "}
                  <input type="button" className="btn" value="Naruto" />
                </a>
                <a href="https://ww.gogoanimes.org/category/naruto-shippuden'">
                  {" "}
                  <input
                    type="button"
                    className="btn"
                    value="Naruto Shippuden"
                  />
                </a>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div class="col-sm-4">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <img
                src="https://images4.alphacoders.com/566/thumbbig-566163.webp"
                alt=""
              />
              <h4 id="tit"> Hunter x hunter </h4>{" "}
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <a href="https://www1.gogoanime.ai/category/hunter-x-hunter-2011">
                  {" "}
                  <input type="button" className="btn" value="Season 1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
