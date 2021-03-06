import React from "react";
import Fade from "react-reveal/Fade";

import { InputText } from "components/UI/Form/Form";

import "./BookingInformation.scss";

export default function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 hotel-booking">
            <Fade delay={300}>
              <div className="card">
                <figure className="img-wrapper" style={{ height: 270 }}>
                  <img
                    className="img-cover"
                    src={`${process.env.REACT_APP_HOST}/${ItemDetails.imageId[0].imageUrl}`}
                    alt={ItemDetails.title}
                  />
                </figure>
                <div className="row align-items-center">
                  <div className="col">
                    <div className="meta-wrapper">
                      <h5>{ItemDetails.title}</h5>
                      <span className="text-gray-500">
                        {ItemDetails.city}, {ItemDetails.country}
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span style={{ fontWeight: 500 }}>
                      ${+checkout.duration * ItemDetails.price} USD
                      <span
                        className="text-gray-500"
                        style={{ fontWeight: 300 }}
                      >
                        {" "}
                        per{" "}
                      </span>
                      {checkout.duration} {ItemDetails.unit}
                      {+checkout.duration > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 booking-form">
            <Fade delay={600}>
              <label htmlFor="firstName">First Name</label>
              <InputText
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={props.onChange}
                placeholder="Firstname"
              />

              <label htmlFor="lastName">Username</label>
              <InputText
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={props.onChange}
                placeholder="Username"
              />

              <label htmlFor="email">Email Address</label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={props.onChange}
                placeholder="Email Address"
              />

              <label htmlFor="phone">Phone Number</label>
              <InputText
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={props.onChange}
                placeholder="Phone Number"
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
