import idolPng from "./asserts/1.png"
import logo from "./asserts/logo.png"
import img2 from "./asserts/2.png"
import img3 from "./asserts/3.png"
function App() {
  const SEGMENTS = [
    "CHEMICALS & PROCESS ",
    "POWER",
    " WATER & WASTE ",
    "WATER",
    "OILS & GAS",
    " PHARMA ",
    "SUGARS & DISTILLERIES",
    " PAPER & PULP  ",
    "MARINE & DEFENCE",
    "METAL & MINING ",
    " FOOD & BEVERAGE PETROCHEMICAL & REFINERIES ",
    "SOLAR ",
    "BUILDING ",
    "HVAC",
    "FIRE",
    "FIGHTING",
    "AGRICULTURE & RESIDENTIAL",

  ]

  
  return (
    <div className=" p-4 bg-gradient-to-b from-yellow-50  to-yellow-200 ">
     
      {/* Hero section  */}
       <section className=" flex  md:flex-row flex-col mx-auto gap-5 justify-between  items-center">
          <img src={idolPng} className=" w-[350px] h-[600px] object-cover" alt="img" />
          <div className=" md:w-[900px]">
           <img src={logo} className=" w-[250px]" alt="img" />
           <p className=" font-bold  text-[14px] m-4"> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
           <ul className=" text-sm list-disc ml-[60px] m-5 ">
            <li >    C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
           </ul>
           <img  src={img2} alt="img" className="w-full" />
           <p className=" text-sm m-5">Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
       </section>
       <p className=" mt-4">	
INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>

    <img src={img3} className="w-[900px] mx-auto m-5"  alt="img"/>

    <p className=" text-center">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>

    <div className=" bg-red-800 h-[2px] w-full mx-auto m-5"></div>

    <p className=" text-center mb-4">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>

    <p className=" text-center">
     {
      SEGMENTS.map((seg,index)=> ( <span key={index}>{seg} { SEGMENTS.length-1!=index && <span className=" text-red-400 text-xl m-1 ">|</span>}</span> ))
     }
    
     </p>


    <div className=" flex md:flex-row flex-col gap-3 justify-between h-[10%]  bg-red-600 rounded-sm text-white p-5 mt-5">
       <div>
        <p>Toll free <span>1800 200 1234</span></p>
       </div>
       <div>
        <p>ww.facebook.com/cripumps</p>
       </div>
       <div>
        <p>https://www.crigroups.com</p>
       </div>
    </div>
    </div>
  );
}

export default App;
