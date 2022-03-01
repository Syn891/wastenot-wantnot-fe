import { useRef, useEffect, useState } from "react";
import * as tt from "@tomtom-international/web-sdk-maps";
import * as ttapi from "@tomtom-international/web-sdk-services";
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import {Container} from 'react-bootstrap'
import { IoIosArrowBack } from "react-icons/io";
import Navbar from "../components/Navbar";
import css from '../styles/DonationPoints.module.css'

const DonationPoints = () => {
  const [map, setMap] = useState({});
  const mapElement = useRef();
  const [longitude, setLongitude] = useState(-0.112869);
  const [latitude, setLatitude] = useState(51.504);
  const [trus, setTrus] = useState(53.41608)
  const [trusLong, setTrusLong] = useState(-2.346269)


  navigator.geolocation.getCurrentPosition(function(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  useEffect(() => {
    const origin = {
      lng: longitude,
      lat: latitude
    }

    const destinations = [];

    let map = tt.map({
      key: 'VNXLbtBj2rKw0C10r8BxYCHVAPWYKo3q',
      container: mapElement.current,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      center: [longitude, latitude],
      zoom: 14,
    });

    const addMarker = (text, long, lat) => {

      const popupOffset = {
        bottom: [0, -25]
      }

      const popup = new tt.Popup({ offset:popupOffset}).setHTML(text);
      const element = document.createElement("div");
      element.className = "marker";

      const marker = new tt.Marker({
        draggable: true,
        element: element,
      })
        .setLngLat([long, lat])
        .addTo(map)

        marker.on('dragend', () => {
          const lngLat = marker.getLngLat();
          setLongitude(lngLat.lng);
          setLatitude(lngLat.lat);
        });

        marker.setPopup(popup).togglePopup();
    };

    addMarker('This is you', longitude, latitude);

    addMarker('trussel trust', trusLong, trus);
    return () => map.remove();
  }, [longitude, latitude]);

  return (
    <>
     <Container className={css.container}>
           <Navbar color="#EF8D4B" title={"My Donations"}>
          <IoIosArrowBack
          size={'1.5em'}
          style={{marginRight:'0.25em' }} onClick={()=> router.back()}/>
          </Navbar>
          <div id="map"></div>
          </Container>
      {map && (
        <div className="App">
          <div ref={mapElement} className="map" style={{height: '60vh'}} />
          <div className="search-bar">
            <h1>Where to?</h1>
            <input
              type="text"
              id="longitude"
              className="longitude"
              placeholder="Put in longitude"
              onChange={(e) => {
                setLongitude(e.target.value);
              }}
            />
            <input
              type="text"
              id="latitude"
              className="latitude"
              placeholder="Put in latitude"
              onChange={(e) => {
                setLatitude(e.target.value);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
            }
export default DonationPoints