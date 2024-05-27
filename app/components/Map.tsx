import React from "react";
import GoogleMapReact from "google-map-react";
import { Location } from "../icons/Location";

const AnyReactComponent = ({ text }: any) => (
  <div>
    <Location />
    <p className="text-xs font-bold">{text}</p>
  </div>
);

export default function SimpleMap() {
  const defaultProps = {
    center: { lat: 6.6351, lng: 3.3573 },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div className="w-full h-[200px]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA0cerOqLskL5lyYFpv6mbjyD9q5U4d5RI" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={6.625108316868475}
          lng={3.3571091031176414}
          text="L.J. Dosumu St"
        />
      </GoogleMapReact>
    </div>
  );
}
