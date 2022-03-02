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