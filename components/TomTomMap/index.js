import { useRef, useEffect, useState } from "react";
import * as tt from "@tomtom-international/web-sdk-maps";
import * as ttapi from "@tomtom-international/web-sdk-services";
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import {Container} from 'react-bootstrap'
import { IoIosArrowBack } from "react-icons/io";
import Navbar from "/components/Navbar/index";
import css from '../../styles/DonationPoints.module.css';


const DonationTest = () => {
  const [map, setMap] = useState({});
  const mapElement = useRef();
  const [longitude, setLongitude] = useState(-0.112869);
  const [latitude, setLatitude] = useState(51.504);
  const [foodBanks, setFoodBanks] = useState([]) 
  const [click, setClick] = useState(false)

  navigator.geolocation.getCurrentPosition(function(position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  useEffect( () => {
    const origin = {
      lng: longitude,
      lat: latitude
    }

    const destinations = [];

    let map = tt.map({
      key: 'VNXLbtBj2rKw0C10r8BxYCHVAPWYKo3q',
      container: mapElement.current,
      stylesVisibility: {
      
      },
      center: [longitude, latitude],
      zoom: 10,
    });

    const addMarker = (text, long, lat) => {

      const popupOffset = {
        bottom: [0, -25]
      }

      const popup = new tt.Popup({ offset:popupOffset, closeOnClick: false}).setHTML(text);
      const element = document.createElement("div");
      element.className = "marker";

      const marker = new tt.Marker({
        draggable: true,
        element: element,
        className: css.marker,
      })
        .setLngLat([long, lat])
        .addTo(map)

        marker.setPopup(popup).togglePopup();
    };

    async function fetchFoodBank() {
        const fetchFromFoodBank = await fetch(`https://www.givefood.org.uk/api/2/foodbanks/search/?lat_lng=${latitude},${longitude}`)
        const bankData = await fetchFromFoodBank.json()
        bankData.map((bank)=> {
            console.log(bank)
            let latLng = bank.lat_lng.split(",");
            latLng[0] = Number(latLng[0])
            latLng[1] = Number(latLng[1])

            let bankDetails = {
                name: bank.name,
                lat: latLng[0],
                long: latLng[1],
                address: bank.name,
                distance: bank.distance_mi,
                email: bank.email,
                phone: bank.phone,
                address: bank.address
            }
            addMarker(bankDetails.name, bankDetails.long, bankDetails.lat) 
            setFoodBanks((prev) => [...prev, bankDetails])
        }) 
    }
console.log(foodBanks)
    addMarker('This is you', longitude, latitude);

    fetchFoodBank()


    // Use API to get Lat and Long of Local Food Banks
    //Store as an array of arrays
    // map over arrays and use addMarker
    // pass name, longitude and latitude

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
          </Container>
      {map && (

          <div ref={mapElement} className={css.map} />
    
      )}
    </>
  );
            }
export default DonationTest