import React, { useState } from "react";
import "./Calculate.css";

export default function Calculate() {
  const handleonclick = () => {
    let finalvalues = [
      company,
      model,
      vehicleclass,
      enginesize,
      transmission,
      fueltype,
      mileage,
    ];
    console.log(finalvalues)
    Setuserresult(finalvalues);
  };

  // HOOKS FOR COMPANY

  const handleOnCompanychange = (event) => {
    Setcompany(event.target.value);
  };

  // HOOKS FOR MODEL

  const handleOnModelchange = (event) => {
    Setmodel(event.target.value);
  };

  // HOOKS FOR ENGINE SIZE
  const handleOnEnginechange = (event) => {
    Setenginesize(event.target.value);
  };

  // HOOKS FOR VEHICLE CLASS
  const handleOnVechicleclasschange = (event) => {
    Setvehicleclass(event.target.value);
  };

  // HOOKS FOR TRANSMISSION
  const handleOnTransmissionchange = (event) => {
    Settransmission(event.target.value);
  };

  // HOOKS FOR FUEL TYPE
  const handleOnFuelchange = (event) => {
    Setfueltype(event.target.value);
  };

  //HOOKS FOR MILEAGE
  const handleOnMileagechange = (event) => {
    Setmileage(event.target.value);
  };


  // Declared States for Hooks

  const[userresult,Setuserresult] = useState();
  const [mileage, Setmileage] = useState();
  const [fueltype, Setfueltype] = useState();
  const [transmission, Settransmission] = useState();
  const [vehicleclass, Setvehicleclass] = useState();
  const [model, Setmodel] = useState();
  const [enginesize, Setenginesize] = useState();
  const [company, Setcompany] = useState("");
  return (
    <div className="Calculate-Container">
      <div className="calculate-title">
        <h1>CARBON FOOTPRINT CALCULATOR</h1>
      </div>
      <div className="description-container">
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          congue orci vel nisl aliquet, eu bibendum dui vehicula. Mauris at
          condimentum diam. Curabitur feugiat massa at leo congue molestie.
          Curabitur ultricies vestibulum semper. Pellentesque ac purus mauris.
          Aliquam erat volutpat. Aliquam a rutrum orci, eget placerat tortor.
        </p>
      </div>
      <div className="input-container">
        <div className="input-container-row-1">
          {/* COMPANY */}
          <div>
            <label htmlFor="Company">Company:</label>
            <select
              className="inputfield"
              name="Company"
              placeholder="Select Company..."
              onChange={handleOnCompanychange}
            >
              <option value="">Company of your car...</option>
              <option value="FORD">FORD</option>
              <option value="CHEVROLET">CHEVROLET</option>
              <option value="BMW">BMW</option>
              <option value="MERCEDES-BENZ">MERCEDES-BENZ</option>
              <option value="GMC">GMC</option>
              <option value="AUDI">AUDI</option>
              <option value="TOYOTA">TOYOTA</option>
              <option value="PORSCHE">PORSCHE</option>
              <option value="VOLKSWAGEN">VOLKSWAGEN</option>
              <option value="DODGE">DODGE</option>
              <option value="MINI">MINI</option>
              <option value="NISSAN">NISSAN</option>
              <option value="KIA">KIA</option>
              <option value="CADILLAC">CADILLAC</option>
              <option value="JEEP">JEEP</option>
              <option value="MAZDA">MAZDA</option>
              <option value="HYUNDAI">HYUNDAI</option>
              <option value="SUBARU">SUBARU</option>
              <option value="JAGUAR">JAGUAR</option>
              <option value="LEXUS">LEXUS</option>
              <option value="HONDA">HONDA</option>
              <option value="INFINITI">INFINITI</option>
              <option value="CHRYSLER">CHRYSLER</option>
              <option value="LAND">LAND ROVER</option>
              <option value="MITSUBISHI">MITSUBISHI</option>
              <option value="BUICK">BUICK</option>
              <option value="RAM">RAM</option>
              <option value="ACURA">ACURA</option>
              <option value="VOLVO">VOLVO</option>
              <option value="LINCOLN">LINCOLN</option>
              <option value="FIAT">FIAT</option>
              <option value="SCION">SCION</option>
              <option value="BENTLEY">BENTLEY</option>
              <option value="ROLLS-ROYCE">ROLLS-ROYCE</option>
              <option value="ASTON">ASTON MARTIN</option>
              <option value="MASERATI">MASERATI</option>
              <option value="LAMBORGHINI">LAMBORGHINI</option>
              <option value="SMART">SMART</option>
              <option value="SRT">SRT</option>
              <option value="Other">.Other</option>
            </select>
          </div>
          <br></br>

          {/* MODEL IK ITS BIG  */}
          <div>
            <label htmlFor="Model">Model:</label>
            <select
              className="inputfield"
              name="Model"
              placeholder="Select Model..."
              onChange={handleOnModelchange}
            >
              <option value="">Model of your car...</option>
              <option value="F150 FFV">F150 FFV</option>
              <option value="F150 FFV 4X4">F150 FFV 4X4</option>
              <option value="ACCORD">ACCORD</option>
              <option value="FOCUS FFV">FOCUS FFV</option>
              <option value="BEETLE">BEETLE</option>
              <option value="PASSAT">PASSAT</option>
              <option value="SILVERADO 4WD">SILVERADO 4WD</option>
              <option value="SILVERADO">SILVERADO</option>
              <option value="MUSTANG">MUSTANG</option>
              <option value="SIERRA">SIERRA</option>
              <option value="SIERRA 4WD">SIERRA 4WD</option>
              <option value="FUSION">FUSION</option>
              <option value="PATRIOT">PATRIOT</option>
              <option value="R8 SPYDER">R8 SPYDER</option>
              <option value="FORTE KOUP">FORTE KOUP</option>
              <option value="FORTE 5">FORTE 5</option>
              <option value="ATS">ATS</option>
              <option value="FORTE">FORTE</option>
              <option value="BEETLE CONVERTIBLE">BEETLE CONVERTIBLE</option>
              <option value="TACOMA 4WD">TACOMA 4WD</option>
              <option value="COMPASS">COMPASS</option>
              <option value="COROLLA">COROLLA</option>
              <option value="SONIC 5">SONIC 5</option>
              <option value="SONIC">SONIC</option>
              <option value="JETTA">JETTA</option>
              <option value="IMPREZA AWD">IMPREZA AWD</option>
              <option value="IMPREZA WAGON AWD">IMPREZA WAGON AWD</option>
              <option value="CRUZE">CRUZE</option>
              <option value="R8">R8</option>
              <option value="E150 VAN FFV">E150 VAN FFV</option>
              <option value="CHARGER FFV">CHARGER FFV</option>
              <option value="F150 4X4">F150 4X4</option>
              <option value="MX-5">MX-5</option>
              <option value="SAVANA 3500 PASSENGER">
                SAVANA 3500 PASSENGER
              </option>
              <option value="SAVANA 2500 PASSENGER">
                SAVANA 2500 PASSENGER
              </option>
              <option value="TUCSON">TUCSON</option>
              <option value="IMPALA">IMPALA</option>
              <option value="EXPRESS 3500 PASSENGER">
                EXPRESS 3500 PASSENGER
              </option>
              <option value="EXPRESS 2500 PASSENGER">
                EXPRESS 2500 PASSENGER
              </option>
              <option value="LEGACY AWD">LEGACY AWD</option>
              <option value="TACOMA">TACOMA</option>
              <option value="OUTBACK AWD">OUTBACK AWD</option>
              <option value="EXPRESS 1500 CARGO">EXPRESS 1500 CARGO</option>
              <option value="EQUINOX AWD">EQUINOX AWD</option>
              <option value="EQUINOX">EQUINOX</option>
              <option value="SAVANA 1500 CARGO">SAVANA 1500 CARGO</option>
              <option value="TSX">TSX</option>
              <option value="CX-5">CX-5</option>
              <option value="F150">F150</option>
              <option value="FORESTER AWD">FORESTER AWD</option>
              <option value="MAZDA3 4-DOOR">MAZDA3 4-DOOR</option>
              <option value="MAZDA3 5-DOOR">MAZDA3 5-DOOR</option>
              <option value="CIVIC">CIVIC</option>
              <option value="ESCAPE">ESCAPE</option>
              <option value="SOUL">SOUL</option>
              <option value="A8L">A8L</option>
              <option value="TUNDRA">TUNDRA</option>
              <option value="FRONTIER">FRONTIER</option>
              <option value="VERANO">VERANO</option>
              <option value="DART">DART</option>
              <option value="TERRAIN">TERRAIN</option>
              <option value="TERRAIN AWD">TERRAIN AWD</option>
              <option value="SAVANA 1500 CARGO AWD">
                SAVANA 1500 CARGO AWD
              </option>
              <option value="SENTRA">SENTRA</option>
              <option value="TAURUS FFV">TAURUS FFV</option>
              <option value="TAURUS FFV AWD TRANSIT CONNECT YUKON XL">
                TAURUS FFV AWD TRANSIT CONNECT YUKON XL
              </option>
              <option value="YUKON 4WD">YUKON 4WD</option>
              <option value="YUKON">YUKON</option>
              <option value="YUKON DENALI XL AWD">YUKON DENALI XL AWD</option>
              <option value="SAVANA 1500 CARGO CONV">
                SAVANA 1500 CARGO CONV
              </option>
              <option value="YUKON DENALI AWD">YUKON DENALI AWD</option>
              <option value="SAVANA 1500 PASSENGER AWD">
                SAVANA 1500 PASSENGER AWD
              </option>
              <option value="SAVANA 1500 PASSENGER">
                SAVANA 1500 PASSENGER
              </option>
              <option value="SAVANA 1500 CARGO CONV AWD">
                SAVANA 1500 CARGO CONV AWD
              </option>
              <option value="CAYENNE">CAYENNE</option>
              <option value="EDGE AWD">EDGE AWD</option>
              <option value="FOCUS SFE FFV">FOCUS SFE FFV</option>
              <option value="DART FFV">DART FFV</option>
              <option value="E350 WAGON FFV">E350 WAGON FFV</option>
              <option value="911 CARRERA S">911 CARRERA S</option>
              <option value="ESCAPE AWD">ESCAPE AWD</option>
              <option value="EXPEDITION 4X4 FFV">EXPEDITION 4X4 FFV</option>
              <option value="911 CARRERA CABRIOLET">
                911 CARRERA CABRIOLET
              </option>
              <option value="E150 WAGON FFV">E150 WAGON FFV</option>
              <option value="911 CARRERA S CABRIOLET">
                911 CARRERA S CABRIOLET
              </option>
              <option value="500L TURBO">500L TURBO</option>
              <option value="911 CARRERA 4S CABRIOLET">
                911 CARRERA 4S CABRIOLET
              </option>
              <option value="EXPLORER FFV">EXPLORER FFV</option>
              <option value="EXPLORER FFV AWD">EXPLORER FFV AWD</option>
              <option value="500 HATCHBACK">500 HATCHBACK</option>
              <option value="500 CABRIO">500 CABRIO</option>
              <option value="JOURNEY FFV">JOURNEY FFV</option>
              <option value="BOXSTER">BOXSTER</option>
              <option value="GRAND CARAVAN FFV">GRAND CARAVAN FFV</option>
              <option value="DURANGO AWD FFV">DURANGO AWD FFV</option>
              <option value="YUKON XL 4WD">YUKON XL 4WD</option>
              <option value="BOXSTER S">BOXSTER S</option>
              <option value="DART TURBO AERO">DART TURBO AERO</option>
              <option value="911 CARRERA 4S">911 CARRERA 4S</option>
              <option value="FIESTA">FIESTA</option>
              <option value="FIESTA SFE">FIESTA SFE</option>
              <option value="911 CARRERA 4 CABRIOLET">
                911 CARRERA 4 CABRIOLET
              </option>
              <option value="911 CARRERA 4">911 CARRERA 4</option>
              <option value="911 CARRERA">911 CARRERA</option>
              <option value="EDGE">EDGE</option>
              <option value="DART GT">DART GT</option>
              <option value="VERSA">VERSA</option>
              <option value="XTERRA 4WD">XTERRA 4WD</option>
              <option value="OUTLANDER 4WD">OUTLANDER 4WD</option>
              <option value="JUKE">JUKE</option>
              <option value="CHEROKEE TRAILHAWK 4X4">
                CHEROKEE TRAILHAWK 4X4
              </option>
              <option value="OPTIMA">OPTIMA</option>
              <option value="WRANGLER UNLIMITED 4X4 (4-DOOR)">
                WRANGLER UNLIMITED 4X4 (4-DOOR)
              </option>
              <option value="WRANGLER 4X4 (2-DOOR)">
                WRANGLER 4X4 (2-DOOR)
              </option>
              <option value="PATRIOT 4X4">PATRIOT 4X4</option>
              <option value="GRAND CHEROKEE 4X4 FFV">
                GRAND CHEROKEE 4X4 FFV
              </option>
              <option value="SLK 250">SLK 250</option>
              <option value="COMPASS 4X4">COMPASS 4X4</option>
              <option value="CHEROKEE 4X4 Active Drive II">
                CHEROKEE 4X4 Active Drive II
              </option>
              <option value="RONDO">RONDO</option>
              <option value="CHEROKEE 4X4">CHEROKEE 4X4</option>
              <option value="CHEROKEE">CHEROKEE</option>
              <option value="COOPER CLUBMAN">COOPER CLUBMAN</option>
              <option value="COOPER CONVERTIBLE">COOPER CONVERTIBLE</option>
              <option value="COOPER COUNTRYMAN">COOPER COUNTRYMAN</option>
              <option value="COOPER COUPE">COOPER COUPE</option>
              <option value="COOPER PACEMAN">COOPER PACEMAN</option>
              <option value="RIO">RIO</option>
              <option value="SORENTO">SORENTO</option>
              <option value="CR-Z">CR-Z</option>
              <option value="RANGE ROVER V8 5.0 SC FFV">
                RANGE ROVER V8 5.0 SC FFV
              </option>
              <option value="MAZDA6">MAZDA6</option>
              <option value="MAZDA2 CX-5 4WD">MAZDA2 CX-5 4WD</option>
              <option value="C 300 4MATIC FFV">C 300 4MATIC FFV</option>
              <option value="NAVIGATOR 4X4 FFV">NAVIGATOR 4X4 FFV</option>
              <option value="MKS AWD">MKS AWD</option>
              <option value="RX 350 AWD">RX 350 AWD</option>
              <option value="RANGE ROVER V6 3.0 SC FFV">
                RANGE ROVER V6 3.0 SC FFV
              </option>
              <option value="SORENTO 4WD">SORENTO 4WD</option>
              <option value="RANGE ROVER SPORT V8 5.0 SC FFV">
                RANGE ROVER SPORT V8 5.0 SC FFV
              </option>
              <option value="RANGE ROVER SPORT V6 3.0 SC FFV">
                RANGE ROVER SPORT V6 3.0 SC FFV
              </option>
              <option value="RANGE ROVER LWB V8 5.0 SC FFV">
                RANGE ROVER LWB V8 5.0 SC FFV
              </option>
              <option value="ML 350 4MATIC FFV">ML 350 4MATIC FFV</option>
              <option value="GALLARDO COUPE">GALLARDO COUPE</option>
              <option value="SPORTAGE AWD">SPORTAGE AWD</option>
              <option value="SPORTAGE">SPORTAGE</option>
              <option value="XJL SUPERCHARGED">XJL SUPERCHARGED</option>
              <option value="COOPER ROADSTER">COOPER ROADSTER</option>
              <option value="XJ SUPERCHARGED">XJ SUPERCHARGED</option>
              <option value="SANTA FE SPORT 4WD">SANTA FE SPORT 4WD</option>
              <option value="LANCER SPORTBACK">LANCER SPORTBACK</option>
              <option value="MIRAGE">MIRAGE</option>
              <option value="VELOSTER TURBO">VELOSTER TURBO</option>
              <option value="VELOSTER">VELOSTER</option>
              <option value="TUCSON 4WD">TUCSON 4WD</option>
              <option value="CHARGER">CHARGER</option>
              <option value="SONATA">SONATA</option>
              <option value="RVR">RVR</option>
              <option value="COOPER S CLUBMAN">COOPER S CLUBMAN</option>
              <option value="370Z">370Z</option>
              <option value="370Z ROADSTER">370Z ROADSTER</option>
              <option value="ALTIMA">ALTIMA</option>
              <option value="ELANTRA GT">ELANTRA GT</option>
              <option value="ACCENT">ACCENT</option>
              <option value="FRONTIER 4WD">FRONTIER 4WD</option>
              <option value="FIT">FIT</option>
              <option value="LANCER EVOLUTION">LANCER EVOLUTION</option>
              <option value="Q60 CONVERTIBLE">Q60 CONVERTIBLE</option>
              <option value="Q60 COUPE">Q60 COUPE</option>
              <option value="Q70">Q70</option>
              <option value="COOPER S CONVERTIBLE">COOPER S CONVERTIBLE</option>
              <option value="XFR">XFR</option>
              <option value="COOPER S COUNTRYMAN ALL4">
                COOPER S COUNTRYMAN ALL4
              </option>
              <option value="COOPER S COUPE">COOPER S COUPE</option>
              <option value="COOPER S PACEMAN ALL4">
                COOPER S PACEMAN ALL4
              </option>
              <option value="COOPER S ROADSTER">COOPER S ROADSTER</option>
              <option value="JOHN COOPER WORKS CLUBMAN">
                JOHN COOPER WORKS CLUBMAN
              </option>
              <option value="JOHN COOPER WORKS CONVERTIBLE">
                JOHN COOPER WORKS CONVERTIBLE
              </option>
              <option value="QX70 AWD">QX70 AWD</option>
              <option value="JOHN COOPER WORKS COUNTRYMAN ALL4">
                JOHN COOPER WORKS COUNTRYMAN ALL4
              </option>
              <option value="JOHN COOPER WORKS COUPE">
                JOHN COOPER WORKS COUPE
              </option>
              <option value="JOHN COOPER WORKS PACEMAN ALL4">
                JOHN COOPER WORKS PACEMAN ALL4
              </option>
              <option value="JOHN COOPER WORKS ROADSTER">
                JOHN COOPER WORKS ROADSTER
              </option>
              <option value="LANCER">LANCER</option>
              <option value="Q70 AWD">Q70 AWD</option>
              <option value="CHARGER AWD FFV">CHARGER AWD FFV</option>
              <option value="ILX">ILX</option>
              <option value="CAMRY">CAMRY</option>
              <option value="ESCALADE ESV AWD">ESCALADE ESV AWD</option>
              <option value="435i COUPE">435i COUPE</option>
              <option value="435i xDRIVE COUPE">435i xDRIVE COUPE</option>
              <option value="HIGHLANDER">HIGHLANDER</option>
              <option value="FJ CRUISER 4WD">FJ CRUISER 4WD</option>
              <option value="COROLLA MATRIX">COROLLA MATRIX</option>
              <option value="XV CROSSTREK AWD">XV CROSSTREK AWD</option>
              <option value="M5">M5</option>
              <option value="M6">M6</option>
              <option value="M6 CABRIOLET">M6 CABRIOLET</option>
              <option value="M6 GRAN COUPE">M6 GRAN COUPE</option>
              <option value="BRZ">BRZ</option>
              <option value="xD">xD</option>
              <option value="xB">xB</option>
              <option value="Z4 sDRIVE28i">Z4 sDRIVE28i</option>
              <option value="Z4 sDRIVE35i">Z4 sDRIVE35i</option>
              <option value="tC">tC</option>
              <option value="FR-S">FR-S</option>
              <option value="LACROSSE">LACROSSE</option>
              <option value="LACROSSE AWD">LACROSSE AWD</option>
              <option value="REGAL">REGAL</option>
              <option value="ATS AWD">ATS AWD</option>
              <option value="CTS SEDAN">CTS SEDAN</option>
              <option value="CTS SEDAN AWD">CTS SEDAN AWD</option>
              <option value="CARGO VAN FFV">CARGO VAN FFV</option>
              <option value="CTS SPORT WAGON">CTS SPORT WAGON</option>
              <option value="CTS SPORT WAGON AWD">CTS SPORT WAGON AWD</option>
              <option value="CTS-V COUPE">CTS-V COUPE</option>
              <option value="CTS-V SEDAN">CTS-V SEDAN</option>
              <option value="CTS-V SPORT WAGON">CTS-V SPORT WAGON</option>
              <option value="428i COUPE">428i COUPE</option>
              <option value="335i xDRIVE">335i xDRIVE</option>
              <option value="335i">335i</option>
              <option value="JETTA TDI CLEAN DIESEL">
                JETTA TDI CLEAN DIESEL
              </option>
              <option value="XC70 AWD">XC70 AWD</option>
              <option value="XC60 AWD">XC60 AWD</option>
              <option value="TL AWD">TL AWD</option>
              <option value="S60 AWD">S60 AWD</option>
              <option value="V8 VANTAGE">V8 VANTAGE</option>
              <option value="V8 VANTAGE S">V8 VANTAGE S</option>
              <option value="A4 QUATTRO">A4 QUATTRO</option>
              <option value="A5 QUATTRO">A5 QUATTRO</option>
              <option value="A6 QUATTRO">A6 QUATTRO</option>
              <option value="TIGUAN">TIGUAN</option>
              <option value="A8">A8</option>
              <option value="PASSAT TDI CLEAN DIESEL">
                PASSAT TDI CLEAN DIESEL
              </option>
              <option value="Q5">Q5</option>
              <option value="JETTA GLI">JETTA GLI</option>
              <option value="328i">328i</option>
              <option value="GOLF WAGON TDI CLEAN DIESEL">
                GOLF WAGON TDI CLEAN DIESEL
              </option>
              <option value="GOLF WAGON">GOLF WAGON</option>
              <option value="S4">S4</option>
              <option value="S5">S5</option>
              <option value="CC">CC</option>
              <option value="BEETLE TDI CLEAN DIESEL">
                BEETLE TDI CLEAN DIESEL
              </option>
              <option value="YARIS">YARIS</option>
              <option value="VENZA 4WD">VENZA 4WD</option>
              <option value="VENZA">VENZA</option>
              <option value="TUNDRA 4WD">TUNDRA 4WD</option>
              <option value="CONTINENTAL GT">CONTINENTAL GT</option>
              <option value="CONTINENTAL GTC">CONTINENTAL GTC</option>
              <option value="320i">320i</option>
              <option value="ESCALADE AWD">ESCALADE AWD</option>
              <option value="MAZDA5">MAZDA5</option>
              <option value="ORLANDO">ORLANDO</option>
              <option value="SONIC 5 RS">SONIC 5 RS</option>
              <option value="TAHOE">TAHOE</option>
              <option value="TAHOE 4WD">TAHOE 4WD</option>
              <option value="TRAX">TRAX</option>
              <option value="CAMARO SS">CAMARO SS</option>
              <option value="MALIBU">MALIBU</option>
              <option value="300 FFV">300 FFV</option>
              <option value="CAMARO ZL1">CAMARO ZL1</option>
              <option value="CORVETTE">CORVETTE</option>
              <option value="AVENGER FFV">AVENGER FFV</option>
              <option value="1500 (MDS)">1500 (MDS)</option>
              <option value="CRUZE ECO">CRUZE ECO</option>
              <option value="EXPRESS 1500 CARGO AWD">
                EXPRESS 1500 CARGO AWD
              </option>
              <option value="EXPRESS 1500 PASSENGER AWD">
                EXPRESS 1500 PASSENGER AWD
              </option>
              <option value="CAYMAN S">CAYMAN S</option>
              <option value="EXPRESS 1500 PASSENGER">
                EXPRESS 1500 PASSENGER
              </option>
              <option value="EXPRESS 1500 CARGO CONV">
                EXPRESS 1500 CARGO CONV
              </option>
              <option value="EXPRESS 1500 CARGO CONV AWD">
                EXPRESS 1500 CARGO CONV AWD
              </option>
              <option value="1500 4X4 (MDS)">1500 4X4 (MDS)</option>
              <option value="300 AWD FFV">300 AWD FFV</option>
              <option value="200 CONVERTIBLE FFV">200 CONVERTIBLE FFV</option>
              <option value="SONIC RS">SONIC RS</option>
              <option value="1500 FFV">1500 FFV</option>
              <option value="200 SEDAN FFV">200 SEDAN FFV</option>
              <option value="1500 4X4 FFV">1500 4X4 FFV</option>
              <option value="SPARK">SPARK</option>
              <option value="AVENGER">AVENGER</option>
              <option value="200 SEDAN">200 SEDAN</option>
              <option value="SUBURBAN">SUBURBAN</option>
              <option value="CAYMAN">CAYMAN</option>
              <option value="CAMARO">CAMARO</option>
              <option value="SUBURBAN 4WD">SUBURBAN 4WD</option>
              <option value="CHALLENGER">CHALLENGER</option>
              <option value="200 CONVERTIBLE">200 CONVERTIBLE</option>
              <option value="TOWN & COUNTRY FFV">TOWN & COUNTRY FFV</option>
              <option value="G 63 AMG">G 63 AMG</option>
              <option value="GL 350 BLUETEC 4MATIC">
                GL 350 BLUETEC 4MATIC
              </option>
              <option value="TOUAREG">TOUAREG</option>
              <option value="GL 450 4MATIC">GL 450 4MATIC</option>
              <option value="G 550">G 550</option>
              <option value="E 63 AMG S 4MATIC WAGON">
                E 63 AMG S 4MATIC WAGON
              </option>
              <option value="NV200 CARGO VAN">NV200 CARGO VAN</option>
              <option value="GL 550 4MATIC">GL 550 4MATIC</option>
              <option value="S 550 4MATIC LWB">S 550 4MATIC LWB</option>
              <option value="S 63 AMG 4MATIC">S 63 AMG 4MATIC</option>
              <option value="911 TURBO S">911 TURBO S</option>
              <option value="S 550 4MATIC SWB">S 550 4MATIC SWB</option>
              <option value="PANAMERA 4">PANAMERA 4</option>
              <option value="911 TURBO S CABRIOLET">
                911 TURBO S CABRIOLET
              </option>
              <option value="JETTA TURBO HYBRID">JETTA TURBO HYBRID</option>
              <option value="PANAMERA">PANAMERA</option>
              <option value="GL 63 AMG">GL 63 AMG</option>
              <option value="ML 63 AMG 4MATIC">ML 63 AMG 4MATIC</option>
              <option value="ROUTAN">ROUTAN</option>
              <option value="ML 550 4MATIC">ML 550 4MATIC</option>
              <option value="ML 350 BLUETEC 4MATIC">
                ML 350 BLUETEC 4MATIC
              </option>
              <option value="GLK 250 BLUETEC 4MATIC">
                GLK 250 BLUETEC 4MATIC
              </option>
              <option value="TIGUAN 4MOTION">TIGUAN 4MOTION</option>
              <option value="GLK 350 4MATIC">GLK 350 4MATIC</option>
              <option value="E 350 CABRIOLET">E 350 CABRIOLET</option>
              <option value="E 63 AMG S 4MATIC">E 63 AMG S 4MATIC</option>
              <option value="E 63 AMG 4MATIC WAGON">
                E 63 AMG 4MATIC WAGON
              </option>
              <option value="CL 550 4MATIC">CL 550 4MATIC</option>
              <option value="C 63 AMG COUPE">C 63 AMG COUPE</option>
              <option value="C 63 AMG">C 63 AMG</option>
              <option value="C 350 COUPE">C 350 COUPE</option>
              <option value="C 350 4MATIC COUPE">C 350 4MATIC COUPE</option>
              <option value="C 350 4MATIC">C 350 4MATIC</option>
              <option value="C 350">C 350</option>
              <option value="C 250 COUPE">C 250 COUPE</option>
              <option value="C 250">C 250</option>
              <option value="S80">S80</option>
              <option value="B 250">B 250</option>
              <option value="CAYENNE TURBO">CAYENNE TURBO</option>
              <option value="S80 AWD">S80 AWD</option>
              <option value="XC60">XC60</option>
              <option value="MAZDA6 (i-ELOOP)">MAZDA6 (i-ELOOP)</option>
              <option value="CAYENNE S HYBRID">CAYENNE S HYBRID</option>
              <option value="CAYENNE DIESEL">CAYENNE DIESEL</option>
              <option value="CL 63 AMG">CL 63 AMG</option>
              <option value="CLA 250">CLA 250</option>
              <option value="CLA 45 AMG 4MATIC">CLA 45 AMG 4MATIC</option>
              <option value="E 350 4MATIC WAGON">E 350 4MATIC WAGON</option>
              <option value="E 63 AMG 4MATIC">E 63 AMG 4MATIC</option>
              <option value="E 550 COUPE">E 550 COUPE</option>
              <option value="E 550 CABRIOLET">E 550 CABRIOLET</option>
              <option value="E 550 4MATIC">E 550 4MATIC</option>
              <option value="E 400 HYBRID">E 400 HYBRID</option>
              <option value="E 350 COUPE">E 350 COUPE</option>
              <option value="PANAMERA 4S">PANAMERA 4S</option>
              <option value="E 350 4MATIC COUPE">E 350 4MATIC COUPE</option>
              <option value="S60">S60</option>
              <option value="E 350 4MATIC">E 350 4MATIC</option>
              <option value="E 300 4MATIC">E 300 4MATIC</option>
              <option value="E 250 BLUETEC 4MATIC">E 250 BLUETEC 4MATIC</option>
              <option value="CLS 63 AMG S 4MATIC">CLS 63 AMG S 4MATIC</option>
              <option value="CLS 63 AMG 4MATIC">CLS 63 AMG 4MATIC</option>
              <option value="TOUAREG TDI CLEAN DIESEL">
                TOUAREG TDI CLEAN DIESEL
              </option>
              <option value="CLS 550 4MATIC">CLS 550 4MATIC</option>
              <option value="911 TURBO CABRIOLET">911 TURBO CABRIOLET</option>
              <option value="SLK 55 AMG">SLK 55 AMG</option>
              <option value="EOS">EOS</option>
              <option value="CC 4MOTION">CC 4MOTION</option>
              <option value="PHANTOM EWB">PHANTOM EWB</option>
              <option value="WRAITH">WRAITH</option>
              <option value="GT-R">GT-R</option>
              <option value="iQ">iQ</option>
              <option value="ARMADA 4WD">ARMADA 4WD</option>
              <option value="FORTWO CABRIOLET">FORTWO CABRIOLET</option>
              <option value="RVR 4WD">RVR 4WD</option>
              <option value="FORTWO COUPE">FORTWO COUPE</option>
              <option value="VIPER COUPE">VIPER COUPE</option>
              <option value="VIPER GTS COUPE">VIPER GTS COUPE</option>
              <option value="OUTLANDER">OUTLANDER</option>
              <option value="PANAMERA TURBO EXECUTIVE">
                PANAMERA TURBO EXECUTIVE
              </option>
              <option value="TRIBECA AWD">TRIBECA AWD</option>
              <option value="LANCER RALLIART">LANCER RALLIART</option>
              <option value="XV CROSSTREK HYBRID AWD">
                XV CROSSTREK HYBRID AWD
              </option>
              <option value="JUKE AWD">JUKE AWD</option>
              <option value="MAXIMA">MAXIMA</option>
              <option value="MURANO AWD">MURANO AWD</option>
              <option value="ROGUE AWD">ROGUE AWD</option>
              <option value="PATHFINDER">PATHFINDER</option>
              <option value="PATHFINDER 4WD">PATHFINDER 4WD</option>
              <option value="PATHFINDER HYBRID 4WD">
                PATHFINDER HYBRID 4WD
              </option>
              <option value="1500 DIESEL">1500 DIESEL</option>
              <option value="QUEST">QUEST</option>
              <option value="ROGUE">ROGUE</option>
              <option value="1500 4X4 DIESEL">1500 4X4 DIESEL</option>
              <option value="TITAN 4WD">TITAN 4WD</option>
              <option value="GHOST">GHOST</option>
              <option value="GHOST EWB">GHOST EWB</option>
              <option value="PHANTOM">PHANTOM</option>
              <option value="PHANTOM COUPE">PHANTOM COUPE</option>
              <option value="TITAN">TITAN</option>
              <option value="PHANTOM DROPHEAD COUPE">
                PHANTOM DROPHEAD COUPE
              </option>
              <option value="LANCER AWD">LANCER AWD</option>
              <option value="4RUNNER (Part-Time 4WD)">
                4RUNNER (Part-Time 4WD)
              </option>
              <option value="4RUNNER 4WD">4RUNNER 4WD</option>
              <option value="1500 HFE">1500 HFE</option>
              <option value="SLS AMG BLACK SERIES COUPE PANAMERA S">
                SLS AMG BLACK SERIES COUPE PANAMERA S
              </option>
              <option value="SIENNA">SIENNA</option>
              <option value="SIENNA AWD">SIENNA AWD</option>
              <option value="PANAMERA GTS">PANAMERA GTS</option>
              <option value="PANAMERA 4S EXECUTIVE">
                PANAMERA 4S EXECUTIVE
              </option>
              <option value="SLK 350">SLK 350</option>
              <option value="SLS AMG ROADSTER">SLS AMG ROADSTER</option>
              <option value="MAZDA3 5-DOOR (SIL)">MAZDA3 5-DOOR (SIL)</option>
              <option value="SL 65 AMG">SL 65 AMG</option>
              <option value="SL 63 AMG">SL 63 AMG</option>
              <option value="911 GT3">911 GT3</option>
              <option value="SL 550">SL 550</option>
              <option value="911 TURBO">911 TURBO</option>
              <option value="SLS AMG GT COUPE">SLS AMG GT COUPE</option>
              <option value="SEQUOIA 4WD">SEQUOIA 4WD</option>
              <option value="AVALON">AVALON</option>
              <option value="HIGHLANDER HYBRID AWD">
                HIGHLANDER HYBRID AWD
              </option>
              <option value="CAYENNE GTS">CAYENNE GTS</option>
              <option value="CAMRY HYBRID LE">CAMRY HYBRID LE</option>
              <option value="CAMRY HYBRID XLE/SE">CAMRY HYBRID XLE/SE</option>
              <option value="COROLLA LE ECO (1-mode)">
                COROLLA LE ECO (1-mode)
              </option>
              <option value="COROLLA LE ECO (2-mode)">
                COROLLA LE ECO (2-mode)
              </option>
              <option value="HIGHLANDER AWD">HIGHLANDER AWD</option>
              <option value="HIGHLANDER HYBRID AWD LE">
                HIGHLANDER HYBRID AWD LE
              </option>
              <option value="RAV4 LIMITED AWD">RAV4 LIMITED AWD</option>
              <option value="PRIUS">PRIUS</option>
              <option value="PRIUS c">PRIUS c</option>
              <option value="PRIUS v">PRIUS v</option>
              <option value="RAV4">RAV4</option>
              <option value="PANAMERA TURBO">PANAMERA TURBO</option>
              <option value="RAV4 AWD">RAV4 AWD</option>
              <option value="CAYENNE S">CAYENNE S</option>
              <option value="XK COUPE">XK COUPE</option>
              <option value="MAZDA3 5-DOOR (i-ELOOP)">
                MAZDA3 5-DOOR (i-ELOOP)
              </option>
              <option value="X6 xDRIVE50i">X6 xDRIVE50i</option>
              <option value="SRX">SRX</option>
              <option value="CTS SEDAN Vsport">CTS SEDAN Vsport</option>
              <option value="CTS COUPE AWD">CTS COUPE AWD</option>
              <option value="CTS COUPE">CTS COUPE</option>
              <option value="REGAL eASSIST">REGAL eASSIST</option>
              <option value="REGAL AWD">REGAL AWD</option>
              <option value="LACROSSE eASSIST">LACROSSE eASSIST</option>
              <option value="ENCORE AWD">ENCORE AWD</option>
              <option value="ENCORE">ENCORE</option>
              <option value="ENCLAVE AWD">ENCLAVE AWD</option>
              <option value="ENCLAVE">ENCLAVE</option>
              <option value="Z4 sDRIVE35is">Z4 sDRIVE35is</option>
              <option value="X6 xDRIVE35i">X6 xDRIVE35i</option>
              <option value="E350 WAGON">E350 WAGON</option>
              <option value="X6 M">X6 M</option>
              <option value="X5 xDRIVE50i">X5 xDRIVE50i</option>
              <option value="X5 xDRIVE35i">X5 xDRIVE35i</option>
              <option value="X3 xDRIVE35i">X3 xDRIVE35i</option>
              <option value="X3 xDRIVE28i">X3 xDRIVE28i</option>
              <option value="X1 xDRIVE35i">X1 xDRIVE35i</option>
              <option value="X1 xDRIVE28i">X1 xDRIVE28i</option>
              <option value="ALPINA B7 xDRIVE SWB">ALPINA B7 xDRIVE SWB</option>
              <option value="ALPINA B7 xDRIVE LWB">ALPINA B7 xDRIVE LWB</option>
              <option value="ACTIVEHYBRID 7L">ACTIVEHYBRID 7L</option>
              <option value="ACTIVEHYBRID 5">ACTIVEHYBRID 5</option>
              <option value="ACTIVEHYBRID 3">ACTIVEHYBRID 3</option>
              <option value="SRX AWD">SRX AWD</option>
              <option value="XTS">XTS</option>
              <option value="XTS AWD">XTS AWD</option>
              <option value="XTS Vsport AWD">XTS Vsport AWD</option>
              <option value="500 HATCHBACK TURBO">500 HATCHBACK TURBO</option>
              <option value="500 CABRIO TURBO">500 CABRIO TURBO</option>
              <option value="500 ABARTH HATCHBACK">500 ABARTH HATCHBACK</option>
              <option value="500 ABARTH CABRIO">500 ABARTH CABRIO</option>
              <option value="JOURNEY AWD">JOURNEY AWD</option>
              <option value="JOURNEY">JOURNEY</option>
              <option value="DURANGO AWD (MDS)">DURANGO AWD (MDS)</option>
              <option value="CHARGER SRT (MDS)">CHARGER SRT (MDS)</option>
              <option value="CHARGER AWD (MDS)">CHARGER AWD (MDS)</option>
              <option value="CHARGER AWD">CHARGER AWD</option>
              <option value="CHARGER (MDS)">CHARGER (MDS)</option>
              <option value="CHALLENGER SRT (MDS)">CHALLENGER SRT (MDS)</option>
              <option value="CHALLENGER SRT">CHALLENGER SRT</option>
              <option value="CHALLENGER (MDS)">CHALLENGER (MDS)</option>
              <option value="300 SRT (MDS)">300 SRT (MDS)</option>
              <option value="300 AWD (MDS)">300 AWD (MDS)</option>
              <option value="300 AWD">300 AWD</option>
              <option value="300 (MDS)">300 (MDS)</option>
              <option value="300">300</option>
              <option value="TRAX AWD">TRAX AWD</option>
              <option value="TRAVERSE AWD">TRAVERSE AWD</option>
              <option value="TRAVERSE">TRAVERSE</option>
              <option value="IMPALA ECO">IMPALA ECO</option>
              <option value="CRUZE DIESEL">CRUZE DIESEL</option>
              <option value="CAMARO 2LS">CAMARO 2LS</option>
              <option value="760Li">760Li</option>
              <option value="750Li xDRIVE">750Li xDRIVE</option>
              <option value="750i xDRIVE">750i xDRIVE</option>
              <option value="SQ5">SQ5</option>
              <option value="S7">S7</option>
              <option value="S6">S6</option>
              <option value="S5 CABRIOLET">S5 CABRIOLET</option>
              <option value="RS7">RS7</option>
              <option value="RS5 CABRIOLET">RS5 CABRIOLET</option>
              <option value="RS5">RS5</option>
              <option value="Q7 TDI CLEAN DIESEL">Q7 TDI CLEAN DIESEL</option>
              <option value="Q7">Q7</option>
              <option value="Q5 TDI CLEAN DIESEL">Q5 TDI CLEAN DIESEL</option>
              <option value="Q5 HYBRID">Q5 HYBRID</option>
              <option value="ALLROAD QUATTRO">ALLROAD QUATTRO</option>
              <option value="A8L TDI CLEAN DIESEL">A8L TDI CLEAN DIESEL</option>
              <option value="A8 TDI CLEAN DIESEL">A8 TDI CLEAN DIESEL</option>
              <option value="A7 QUATTRO TDI CLEAN DIESEL">
                A7 QUATTRO TDI CLEAN DIESEL
              </option>
              <option value="A7 QUATTRO">A7 QUATTRO</option>
              <option value="A6 QUATTRO TDI CLEAN DIESEL">
                A6 QUATTRO TDI CLEAN DIESEL
              </option>
              <option value="A5 CABRIOLET QUATTRO">A5 CABRIOLET QUATTRO</option>
              <option value="A4">A4</option>
              <option value="VANQUISH">VANQUISH</option>
              <option value="RAPIDE">RAPIDE</option>
              <option value="DB9">DB9</option>
              <option value="TL">TL</option>
              <option value="RLX">RLX</option>
              <option value="RDX AWD">RDX AWD</option>
              <option value="MDX 4WD">MDX 4WD</option>
              <option value="S8">S8</option>
              <option value="TT COUPE QUATTRO">TT COUPE QUATTRO</option>
              <option value="740Li xDRIVE">740Li xDRIVE</option>
              <option value="TT ROADSTER QUATTRO">TT ROADSTER QUATTRO</option>
              <option value="650i xDRIVE GRAN COUPE">
                650i xDRIVE GRAN COUPE
              </option>
              <option value="650i xDRIVE COUPE">650i xDRIVE COUPE</option>
              <option value="650i xDRIVE CABRIOLET">
                650i xDRIVE CABRIOLET
              </option>
              <option value="640i xDRIVE GRAN COUPE">
                640i xDRIVE GRAN COUPE
              </option>
              <option value="550i xDRIVE GRAN TURISMO">
                550i xDRIVE GRAN TURISMO
              </option>
              <option value="550i xDRIVE">550i xDRIVE</option>
              <option value="535i xDRIVE GRAN TURISMO">
                535i xDRIVE GRAN TURISMO
              </option>
              <option value="535i xDRIVE">535i xDRIVE</option>
              <option value="535d xDRIVE">535d xDRIVE</option>
              <option value="528i xDRIVE">528i xDRIVE</option>
              <option value="528i">528i</option>
              <option value="428i xDRIVE COUPE">428i xDRIVE COUPE</option>
              <option value="335i xDRIVE GRAN TURISMO">
                335i xDRIVE GRAN TURISMO
              </option>
              <option value="328i xDRIVE TOURING">328i xDRIVE TOURING</option>
              <option value="328i xDRIVE GRAN TURISMO">
                328i xDRIVE GRAN TURISMO
              </option>
              <option value="328i xDRIVE">328i xDRIVE</option>
              <option value="328d xDRIVE TOURING">328d xDRIVE TOURING</option>
              <option value="328d xDRIVE">328d xDRIVE</option>
              <option value="320i xDRIVE">320i xDRIVE</option>
              <option value="MULSANNE">MULSANNE</option>
              <option value="FLYING SPUR">FLYING SPUR</option>
              <option value="CONTINENTAL GT SPEED CONVERTIBLE">
                CONTINENTAL GT SPEED CONVERTIBLE
              </option>
              <option value="CONTINENTAL GT CONVERTIBLE">
                CONTINENTAL GT CONVERTIBLE
              </option>
              <option value="TTS ROADSTER QUATTRO">TTS ROADSTER QUATTRO</option>
              <option value="TTS COUPE QUATTRO">TTS COUPE QUATTRO</option>
              <option value="C-MAX HYBRID">C-MAX HYBRID</option>
              <option value="EXPLORER">EXPLORER</option>
              <option value="MAZDA3 4-DOOR (SIL)">MAZDA3 4-DOOR (SIL)</option>
              <option value="RANGE ROVER EVOQUE COUPE">
                RANGE ROVER EVOQUE COUPE
              </option>
              <option value="GX 460">GX 460</option>
              <option value="GS 450h">GS 450h</option>
              <option value="GS 350 AWD">GS 350 AWD</option>
              <option value="GS 350">GS 350</option>
              <option value="ES 350">ES 350</option>
              <option value="ES 300h">ES 300h</option>
              <option value="CT 200h">CT 200h</option>
              <option value="RANGE ROVER V8 5.0 SC">
                RANGE ROVER V8 5.0 SC
              </option>
              <option value="RANGE ROVER V6 3.0 SC">
                RANGE ROVER V6 3.0 SC
              </option>
              <option value="RANGE ROVER SPORT V8 5.0 SC">
                RANGE ROVER SPORT V8 5.0 SC
              </option>
              <option value="RANGE ROVER SPORT V6 3.0 SC">
                RANGE ROVER SPORT V6 3.0 SC
              </option>
              <option value="RANGE ROVER LWB V8 5.0 SC">
                RANGE ROVER LWB V8 5.0 SC
              </option>
              <option value="RANGE ROVER EVOQUE">RANGE ROVER EVOQUE</option>
              <option value="EXPLORER AWD">EXPLORER AWD</option>
              <option value="LR4">LR4</option>
              <option value="LR2">LR2</option>
              <option value="AVENTADOR COUPE">AVENTADOR COUPE</option>
              <option value="SOUL ECO Dynamics">SOUL ECO Dynamics</option>
              <option value="SEDONA">SEDONA</option>
              <option value="RIO ECO">RIO ECO</option>
              <option value="CADENZA">CADENZA</option>
              <option value="PATRIOT 4X4 TRAIL RATED">
                PATRIOT 4X4 TRAIL RATED
              </option>
              <option value="GRAND CHEROKEE 4X4 SRT (MDS)">
                GRAND CHEROKEE 4X4 SRT (MDS)
              </option>
              <option value="GRAND CHEROKEE 4X4 DIESEL">
                GRAND CHEROKEE 4X4 DIESEL
              </option>
              <option value="GRAND CHEROKEE 4X4 (MDS)">
                GRAND CHEROKEE 4X4 (MDS)
              </option>
              <option value="COMPASS 4X4 TRAIL RATED">
                COMPASS 4X4 TRAIL RATED
              </option>
              <option value="IS 250">IS 250</option>
              <option value="IS 250 AWD">IS 250 AWD</option>
              <option value="IS 250 C">IS 250 C</option>
              <option value="IS 350">IS 350</option>
              <option value="MAZDA3 4-DOOR (i-ELOOP)">
                MAZDA3 4-DOOR (i-ELOOP)
              </option>
              <option value="CX-9 4WD">CX-9 4WD</option>
              <option value="CX-9">CX-9</option>
              <option value="QUATTROPORTE SQ4">QUATTROPORTE SQ4</option>
              <option value="QUATTROPORTE GTS">QUATTROPORTE GTS</option>
              <option value="GRANTURISMO CONVERTIBLE">
                GRANTURISMO CONVERTIBLE
              </option>
              <option value="GRANTURISMO">GRANTURISMO</option>
              <option value="GHIBLI AWD">GHIBLI AWD</option>
              <option value="GHIBLI">GHIBLI</option>
              <option value="MKZ HYBRID">MKZ HYBRID</option>
              <option value="MKZ AWD">MKZ AWD</option>
              <option value="MKZ">MKZ</option>
              <option value="MKX AWD">MKX AWD</option>
              <option value="MKT LIVERY AWD">MKT LIVERY AWD</option>
              <option value="MKT LIVERY">MKT LIVERY</option>
              <option value="MKT AWD">MKT AWD</option>
              <option value="RX 450h AWD">RX 450h AWD</option>
              <option value="LX 570">LX 570</option>
              <option value="LS 600h L">LS 600h L</option>
              <option value="LS 460 L AWD">LS 460 L AWD</option>
              <option value="LS 460 AWD">LS 460 AWD</option>
              <option value="LS 460">LS 460</option>
              <option value="IS F">IS F</option>
              <option value="IS 350 C">IS 350 C</option>
              <option value="IS 350 AWD">IS 350 AWD</option>
              <option value="XKR-S COUPE">XKR-S COUPE</option>
              <option value="XKR-S CONVERTIBLE">XKR-S CONVERTIBLE</option>
              <option value="XKR COUPE">XKR COUPE</option>
              <option value="SANTA FE">SANTA FE</option>
              <option value="EQUUS">EQUUS</option>
              <option value="RIDGELINE AWD">RIDGELINE AWD</option>
              <option value="PILOT AWD">PILOT AWD</option>
              <option value="PILOT">PILOT</option>
              <option value="ODYSSEY">ODYSSEY</option>
              <option value="CR-V AWD">CR-V AWD</option>
              <option value="CR-V">CR-V</option>
              <option value="CROSSTOUR AWD">CROSSTOUR AWD</option>
              <option value="ACCORD HYBRID">ACCORD HYBRID</option>
              <option value="ACADIA AWD">ACADIA AWD</option>
              <option value="ACADIA">ACADIA</option>
              <option value="TRANSIT CONNECT WAGON">
                TRANSIT CONNECT WAGON
              </option>
              <option value="TRANSIT CONNECT TAXI">TRANSIT CONNECT TAXI</option>
              <option value="TAURUS AWD">TAURUS AWD</option>
              <option value="TAURUS">TAURUS</option>
              <option value="MUSTANG CONVERTIBLE">MUSTANG CONVERTIBLE</option>
              <option value="FUSION HYBRID">FUSION HYBRID</option>
              <option value="FUSION AWD">FUSION AWD</option>
              <option value="FUSION (Start/Stop)">FUSION (Start/Stop)</option>
              <option value="FOCUS">FOCUS</option>
              <option value="FLEX AWD (EcoBoost)">FLEX AWD (EcoBoost)</option>
              <option value="FLEX AWD">FLEX AWD</option>
              <option value="FLEX">FLEX</option>
              <option value="FIESTA ST">FIESTA ST</option>
              <option value="F150 RAPTOR 4X4">F150 RAPTOR 4X4</option>
              <option value="GENESIS">GENESIS</option>
              <option value="SANTA FE 4WD">SANTA FE 4WD</option>
              <option value="XKR CONVERTIBLE">XKR CONVERTIBLE</option>
              <option value="SANTA FE SPORT">SANTA FE SPORT</option>
              <option value="ILX HYBRID">ILX HYBRID</option>
              <option value="XK CONVERTIBLE">XK CONVERTIBLE</option>
              <option value="XJR LWB">XJR LWB</option>
              <option value="XJR">XJR</option>
              <option value="XJL AWD PORTFOLIO">XJL AWD PORTFOLIO</option>
              <option value="XJ AWD">XJ AWD</option>
              <option value="XFR-S">XFR-S</option>
              <option value="XF 3.0L AWD">XF 3.0L AWD</option>
              <option value="XF">XF</option>
              <option value="F-TYPE V8 S CONVERTIBLE">
                F-TYPE V8 S CONVERTIBLE
              </option>
              <option value="F-TYPE S CONVERTIBLE">F-TYPE S CONVERTIBLE</option>
              <option value="F-TYPE CONVERTIBLE">F-TYPE CONVERTIBLE</option>
              <option value="QX80 4WD">QX80 4WD</option>
              <option value="QX60 HYBRID AWD">QX60 HYBRID AWD</option>
              <option value="QX60 AWD">QX60 AWD</option>
              <option value="QX60">QX60</option>
              <option value="QX50 AWD">QX50 AWD</option>
              <option value="Q70 HYBRID">Q70 HYBRID</option>
              <option value="Q60 AWD COUPE">Q60 AWD COUPE</option>
              <option value="Q50 HYBRID AWD">Q50 HYBRID AWD</option>
              <option value="Q50 HYBRID">Q50 HYBRID</option>
              <option value="Q50 AWD">Q50 AWD</option>
              <option value="Q50">Q50</option>
              <option value="SONATA HYBRID LIMITED">
                SONATA HYBRID LIMITED
              </option>
              <option value="SONATA HYBRID">SONATA HYBRID</option>
              <option value="XC90 AWD">XC90 AWD</option>
              <option value="Other">.Other</option>
            </select>
          </div>
          <br></br>

          {/* VEHICLE CALSS */}
          <div>
            <label htmlFor="Class">Class:</label>
            <select
              className="inputfield"
              name="Class"
              placeholder="Select Vehicle-Class..."
              onChange={handleOnVechicleclasschange}
            >
              <option value="">Vehicle-Class of your car...</option>
              <option value="MID-SIZE">MID-SIZE</option>
              <option value="COMPACT">COMPACT</option>
              <option value="SUV - SMALL">SUV - SMALL</option>
              <option value="SUV - STANDARD">SUV - STANDARD</option>
              <option value="FULL-SIZE">FULL-SIZE</option>
              <option value="TWO-SEATER">TWO-SEATER</option>
              <option value="SUBCOMPACT">SUBCOMPACT</option>
              <option value="PICKUP TRUCK - STANDARD">
                PICKUP TRUCK - STANDARD
              </option>
              <option value="MINICOMPACT">MINICOMPACT</option>
              <option value="STATION WAGON - SMALL">
                STATION WAGON - SMALL
              </option>
              <option value="VAN - PASSENGER">VAN - PASSENGER</option>
              <option value="VAN - CARGO">VAN - CARGO</option>
              <option value="MINIVAN">MINIVAN</option>
              <option value="PICKUP TRUCK - SMALL">PICKUP TRUCK - SMALL</option>
              <option value="SPECIAL PURPOSE VEHICLE">
                SPECIAL PURPOSE VEHICLE
              </option>
              <option value="STATION WAGON - MID-SIZE">
                STATION WAGON - MID-SIZE
              </option>
            </select>
          </div>
          <br></br>

          {/* ENGINE SIZE */}
          <div>
            <label className="inputfield" htmlFor="Engine-size">
              Enter Engine Size:
              <input
                onChange={handleOnEnginechange}
                placeholder="Engine size of your car"
              ></input>
            </label>
          </div>
        </div>

        <br></br>
        <div className="input-container-row-2">
          {/* TRANSMISSION */}
          <div>
            <label htmlFor="Transmission">Transmission:</label>
            <select
              className="inputfield"
              name="Transmission"
              placeholder="Select Transmission of your car..."
              onChange={handleOnTransmissionchange}
            >
              <option value="">Transmission of your car...</option>
              <option value="A6">A6</option>
              <option value="AS6">AS6</option>
              <option value="M6">M6</option>
              <option value="A8">A8</option>
              <option value="AS8">AS8</option>
              <option value="AS7">AS7</option>
              <option value="M5">M5</option>
              <option value="AV">AV</option>
              <option value="A4">A4</option>
              <option value="AM7">AM7</option>
              <option value="A5">A5</option>
              <option value="A7">A7</option>
              <option value="AV6">AV6</option>
              <option value="AS5">AS5</option>
              <option value="M7">M7</option>
              <option value="A9">A9</option>
              <option value="AM6">AM6</option>
              <option value="AV7">AV7</option>
              <option value="AV8">AV8</option>
              <option value="AS9">AS9</option>
              <option value="AM5">AM5</option>
              <option value="AS4">AS4</option>
              <option value="Other">Other/Don't Know</option>
            </select>
          </div>
          <br></br>
          {/* FUEL TYPE */}
          <div>
            <label htmlFor="Fuel Type">Fuel Type:</label>
            <select
              className="inputfield"
              name="Fuel_Type"
              placeholder="Select Fuel Type of your car..."
              onChange={handleOnFuelchange}
            >
              <option value="">Fuel Type of your car...</option>
              <option value="X">X</option>
              <option value="Z">Z</option>
              <option value="E">E</option>
              <option value="D">D</option>
              <option value="Unknown">.Don't know</option>
            </select>
          </div>
          <br></br>

          {/* MILEAGE */}
          <div>
            <label className="inputfield" htmlFor="Mileage in Km/L">
              Mileage in Km/L:
            </label>
            <input
              onChange={handleOnMileagechange}
              name="Mileage in Km/L:"
              type="text"
              placeholder="Average kilometers per litres)..."
            ></input>
          </div>
        </div>
        {/* FINAL SUBMIT BUTTON  */}
        <div className="submit-fields">
          <button className="btn-global" onClick={handleonclick}>
            SUBMIT
          </button>
          <textarea
          placeholder="OUTPUT" cols="15" rows="3"
          value={userresult}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
