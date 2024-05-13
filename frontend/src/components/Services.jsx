import React from "react";
function Services() {
  return (
    <div className="services" id="services" >
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
            <h2>Token Generation for EV Bookings</h2>
            <p className="justify">
              Automated token generation mechanism facilitating hassle-free CNG refueling slot bookings.
            </p>
          </div>
          <div className="service-card">
            <div className="img">
              <img
                src="https://e-amrit.niti.gov.in/assets/admin/dist/img/new-fronend-img/tool1.png"
                alt=""
              />
            </div>
            <h2>Token Generation for CNG Bookings</h2>
            <p>
              Digital queue handling to streamline and optimize the process of EV and CNG slot reservations.
            </p>
          </div>
          <div className="service-card">
            <div className="img">
              <img
                src="https://e-amrit.niti.gov.in/assets/admin/dist/img/new-fronend-img/public-charging-tool.png"
                alt=""
              />
            </div>
            <h2>Real-time Slot Availability Updates</h2>
            <p>
              Instant notifications and updates on available slots for timely and convenient EV and CNG bookings.
            </p>
          </div>
        </div>
      </div>
      <style jsx="true">
        {`
        .justify{
          text-align: justify;
          text-justify: inter-word;
        }
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
                transition: all 0.2s ease-in-out;
              }
            }

            .inner-2 {
              display: flex;
              justify-content: center;
              gap: 25px;
            }
          
          .service-card:hover .img img{
            transform: scale(1.1);
          }
        }
        `}
      </style>
    </div>
  );
}

export default Services;
