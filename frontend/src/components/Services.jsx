import React from "react";
function Services() {
  return (
    <div className="services">
      <div className="inner-services">
        <div className="inner-1">
          <h1>Explore Our Services</h1>
        </div>
        <div className="inner-2">
          <div className="service-card">
            <div className="img">
              <img
                src="https://e-amrit.niti.gov.in/assets/admin/dist/img/new-fronend-img/tool2.png"
                alt=""
              />
            </div>
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id iure
              impedit, beatae explicabo possimus nemo.
            </p>
          </div>
          <div className="service-card">
            <div className="img">
              <img
                src="https://e-amrit.niti.gov.in/assets/admin/dist/img/new-fronend-img/tool1.png"
                alt=""
              />
            </div>
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id iure
              impedit, beatae explicabo possimus nemo.
            </p>
          </div>
          <div className="service-card">
            <div className="img">
              <img
                src="https://e-amrit.niti.gov.in/assets/admin/dist/img/new-fronend-img/public-charging-tool.png"
                alt=""
              />
            </div>
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id iure
              impedit, beatae explicabo possimus nemo.
            </p>
          </div>
        </div>
      </div>
      <style jsx="true">
        {`
          .services {
            color: #112d4e;
            background: url(https://e-amrit.niti.gov.in/assets/admin/dist/img/new-fronend-img/ourtoolsbg.jpg);
            background-repeat: no-repeat;
            background-size: 50%;
            background-position: left;
            height: 600px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            .inner-services {
              height: 470px;
              background: #f9f7f7;
              width: 70%;
              border-radius: 16px;
              margin-right: 20px;
              display: flex;
              align-items: center;
              flex-direction: column;
              padding: 30px;
              gap: 40px;
              filter: drop-shadow(0 3px 96px rgba(0, 0, 0, 0.07));
              box-shadow: 0 3px 96px rgba(0, 0, 0, 0.07);
              h1,
              h2,
              p {
                margin: 0;
              }
            }
            .img {
              width: 200px;
              height: 200px;
              margin-bottom: 40px;
              img {
                width: 120%;
                height: 120%;
                object-fit: contain;
                aspect-ratio: 1;
              }
            }

            .inner-2 {
              display: flex;
              justify-content: center;
              gap: 25px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Services;
