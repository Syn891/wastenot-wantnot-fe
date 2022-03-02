import { useRef, useEffect, useState } from "react";
import {Container} from 'react-bootstrap'
import { IoIosArrowBack } from "react-icons/io";
import Navbar from "../components/Navbar";
import css from '../styles/DonationPoints.module.css';
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  ()=> import('../components/TomTomMap/index.js'),
  { ssr: false}
)


const DonationPoints = () => {
  
  return (
  <DynamicComponent/>
  );
            }
export default DonationPoints