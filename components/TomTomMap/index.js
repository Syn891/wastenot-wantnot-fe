 import { useRef, useEffect, useState } from "react";
import * as tt from "@tomtom-international/web-sdk-maps";
import * as ttapi from "@tomtom-international/web-sdk-services";
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import {Col, Container, FormControl, InputGroup, Row} from 'react-bootstrap'
import { IoIosArrowBack } from "react-icons/io";
import Navbar from "../Navbar";
import css from '../../styles/DonationPoints.module.css'
import Link from "next/link";
import {BsSearch} from 'react-icons/bs'
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { useFetch } from "../../hooks/useFetch";


const TomTomMap = () => {
  const [map, setMap] = useState({});
  const mapElement = useRef();
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [foodBanks, setFoodBanks] = useState([]) 
  const [searchInput, setSearchInput] = useState("")
  const [fave, setFave] = useState([]) 
  const [isClicked, setIsClicked] = useState(false)
  const router = useRouter()

  let user = useUser();

  function renderHearts(position) {
    
    if(fave[position] === true) {
     return <AiTwotoneHeart color="red" onClick={()=> addToFavourites(position)} className={css.heart} size={25}/>

    } else {
      return <AiOutlineHeart onClick={()=> addToFavourites(position)} className={css.heart} size={25}/>

    }
  }

  async function addToFavourites(position) {
    let tempState  = [...fave]
    tempState[position] = !tempState[position]
    setFave(tempState)

    let donationsfaves = await useFetch('donationbank', 'GET', null, `/?user_id=${user.user.sub}`)
    
    if(donationsfaves.payload.length < 1 && tempState[position] === true){

      let object = {
        user_id: user.user.sub,
        donation_banks: [{
          ...foodBanks[position]
        }]
      }
        await useFetch('donationbank', 'POST', object, '' )
     } else if (tempState[position] === true) {

      var containing = donationsfaves.payload[0].donation_banks.find(function(ele) {
        return ele.name === foodBanks[position].name;
      });
      
       if(containing === undefined) {
              
        let query = {donation_banks: foodBanks[position]}
        useFetch('donationbank', 'PUT', query,`/update/?user_id=${user.user.sub}` )
       }

    } else if (tempState[position] === false ){
      var containing = donationsfaves.payload[0].donation_banks.find(function(ele) {
        return ele.name === foodBanks[position].name;
      });
              const remove = {donation_banks: {_id:containing._id}}
        let data = useFetch('donationbank', 'DELETE', remove, `/?user_id=${user.user.sub}`)
        data = await Promise.resolve(data)
    }
  }

  // useEffect(async()=> {
  //   let donationsfaves = await useFetch('donationbank', 'GET', null, `/?user_id=${user.user.sub}`)

  //     if(donationsfaves.payload.length < 1 && fave[position] === true){
  //       let data = await useFetch('donationbanks', 'POST', fave[position], '' )
  //     } else if (fave[position]===true) {
  //       let query = {donation_banks: fave[position]}
  //       let data = useFetch('donationbanks', 'PUT', query,`/update/?user_id=${userId}` )
  //     } else {
  //       let data = await useFetch('donationbanks', 'DELETE', {donation_banks: {id:fave[position._id]}})
  //     }
    
    

  // }, [isClicked])
    
  function handleChange(event) {
    setSearchInput(event.target.value)
  }

  async function searchLoc(query) {

    try {
      const fetchData = await fetch(`https://api.postcodes.io/postcodes/${query}`)
      let res = await fetchData.json()
      setFoodBanks([])
      setLongitude(res.result.longitude)
      setLatitude(res.result.latitude)
    } catch(err) {
        alert('Invalid postcode. Please try again')
        setSearchInput("")
     }
  }

  useEffect(()=> {
    if(searchInput === "") {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          });
      }
  }, [searchInput])

  useEffect( () => {
    if(latitude !== 0 && longitude !== 0) {
        const origin = {
            lng: longitude,
            lat: latitude
          }
          let map = tt.map({
            key: 'VNXLbtBj2rKw0C10r8BxYCHVAPWYKo3q',
            container: mapElement.current,
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
              // onclick: displayInfo()
            })
              .setLngLat([long, lat])
              .addTo(map)
      
              marker.setPopup(popup).togglePopup();
          };
      
          async function fetchFoodBank() {
              const fetchFromFoodBank = await fetch(`https://www.givefood.org.uk/api/2/foodbanks/search/?lat_lng=${latitude},${longitude}`)
              const bankData = await fetchFromFoodBank.json()
              bankData.map((bank)=> {
                  let latLng = bank.lat_lng.split(",");
                  latLng[0] = Number(latLng[0])
                  latLng[1] = Number(latLng[1])
      
                  let bankDetails = {
                      name: bank.name,
                      lat: latLng[0],
                      long: latLng[1],
                      distance: bank.distance_mi,
                      email: bank.email,
                      phone: bank.phone,
                      address: bank.address
                  }
                  addMarker(bankDetails.name, bankDetails.long, bankDetails.lat) 
                  setFoodBanks((prev) => [...prev, bankDetails])
              }) 
          }
          addMarker('This is you', longitude, latitude);
          fetchFoodBank()
          
          setMap(map)
    }
    setFave(new Array(foodBanks.length).fill(false))
  }, [longitude, latitude]);

  return (
    <Container>
    <Container className={css.container}>
          <Navbar Icon={GrMapLocation} color="#EF8D4B" title={"Donations Map"}>
         <IoIosArrowBack
         size={'1.5em'}
         style={{marginRight:'0.25em' }} onClick={()=> router.back()}/>
         </Navbar>
         </Container>
     {map && (
         <>
         <div ref={mapElement} className={css.map}>
         <InputGroup className="my-2 grp">
           <FormControl
           placeholder="Search"
           aria-label="search recipes"
           aria-describedby="basic-addon2"
           onChange={handleChange}
           value={searchInput}
           className={css.search}
           />
           <InputGroup.Text 
           onClick={()=> {searchLoc(searchInput)}} 
           id="basic-addon2"
           className={css.btn}>
             <BsSearch />
           </InputGroup.Text>
       </InputGroup>
         </div>
         <div className={css.donationsTitle}>Food Bank donation points & info</div>
         <div className={css.charities}>
         {foodBanks.map((f, index)=> {
             const uri = "http://maps.google.com/maps?saddr=" + latitude + "," + longitude + "&daddr=" + f.lat + "," + f.long;
             return <div className={css.charityInfo}>
                 <Row key={f.name}>
                   <div style={{textDecoration: 'underline'}}><strong>Organisation</strong></div>
                 <Col xs={{span: 8}}>
                   <div>{f.name}</div>
                   <div>{f.address}</div>
                   <div onClick={()=> window.open(`tel:${f.phone}`, '_self')}>{f.phone}</div>
                 </Col>
                 <Col style={{fontSize: '85%'}} xs={{span: 4}} className={css.right}>
                 <div>{f.distance} miles</div>
                 <Link href={uri}>Get Directions</Link><br/>
                 {renderHearts(index)}
                 </Col>
                 
                 </Row>
             </div>
       })}

         </div>
       </>
     )}
   </Container>
  );
            }
export default TomTomMap