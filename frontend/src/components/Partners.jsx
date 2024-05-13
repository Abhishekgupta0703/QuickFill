import React from "react";

const images = [
    "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/ongc.jpg",
    "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/bharat-petroleum.jpg",
    "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/indian-oil-corporation.jpg",
    "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/reliance-petroleum.jpg",
    "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/cairn-india.jpg",
    "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/oil-india-limited.jpg",
    "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/tata-petrodyne.jpg",
    "https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/adani-welspun.jpg"
].map(image => ({
    id: crypto.randomUUID(),
    image
}));
const Banner = ({images, speed = 10000}) => {
    return (
        <div className="inner">
            <div className="wrapper">
                <section style={{"--speed": `${speed}ms`}}>
                    {images.map(({id, image}) =>
                        <div className=" part-image" key={id}>
                            <img src={image} alt={id} />
                        </div>
                    )}
                </section>
                <section style={{"--speed": `${speed}ms`}}>
                    {images.map(({id, image}) =>
                        <div className="image" key={id}>
                            <img src={image} alt={id} />
                        </div>
                    )}
                </section>
                <section style={{"--speed": `${speed}ms`}}>
                    {images.map(({id, image}) =>
                        <div className="image" key={id}>
                            <img src={image} alt={id} />
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};
function Partners() {
    return (
        <div className="partners" id="partners">
            <h1>Our Partners</h1>
            <Banner images={images} speed={10000} />
            <style jsx="true">
                {`
          .partners {
           
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC") repeat 0 0;
            -webkit-animation: bg-scrolling-reverse 0.92s infinite;
            -moz-animation: bg-scrolling-reverse 0.92s infinite;            
            -o-animation: bg-scrolling-reverse 0.92s infinite;            
            animation: bg-scrolling-reverse 0.92s infinite;           
            -webkit-animation-timing-function: linear;
            -moz-animation-timing-function: linear;
            -o-animation-timing-function: linear;
            animation-timing-function: linear;

            height: 60vh;
            padding:1px 0 60px;
            text-align:center;
            h1 {
              font-size: 45px;
              font-weight: 800;
              color: #112d4e;
              margin:50px auto;
            }
          }
          .inner {
            position: relative;
            width: 100%;
            overflow: hidden;
            height: 12rem;
          }
          .wrapper {
            position: absolute;
            display: flex;
          }
          section {
            display: flex;
            animation: swipe var(--speed) linear infinite backwards;
            img {
              max-width: 250px;
              height: 12rem;
              padding: 0 45px;
              object-fit: cover;
            }
            img:last-of-type {
              padding-left: 0;
            }
          }
          @keyframes swipe {
            0% {
              transform: translate(0);
            }

            100% {
              transform: translate(-100%);
            }
          }

          
        `}
            </style>
        </div>
    );
}

export default Partners;
