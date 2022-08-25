const companies = [
  "FORD",
  "CHEVROLET",
  "BMW",
  "MERCEDES-BENZ",
  "GMC",
  "AUDI",
  "TOYOTA",
  "PORSCHE",
  "VOLKSWAGEN",
  "DODGE",
  "MINI",
  "NISSAN",
  "KIA",
  "CADILLAC",
  "JEEP",
  "MAZDA",
  "HYUNDAI",
  "SUBARU",
  "JAGUAR",
  "LEXUS",
  "HONDA",
  "INFINITI",
  "CHRYSLER",
  "LAND",
  "MITSUBISHI",
  "BUICK",
  "RAM",
  "ACURA",
  "VOLVO",
  "LINCOLN",
  "FIAT",
  "SCION",
  "BENTLEY",
  "ROLLS-ROYCE",
  "ASTON",
  "MASERATI",
  "LAMBORGHINI",
  "SMART",
  "SRT",
  "Other",
];

const models = [
  "1500 (MDS)",
  "1500 4X4 (MDS)",
  "1500 4X4 DIESE",
  "1500 4X4 F",
  "1500 DIESE",
  "1500 FFV",
  "1500 HFE",
  "200 CONVERTIB FFV",
  "200 CONVERTIBLE",
  "200 SEDAN FFV",
  "200 SEDAN",
  "300 (MDS)",
  "300 AWD (MDS)",
  "300 AWD FFV",
  "300 AWD",
  "300 FFV",
  "300 SRT (MDS)",
  "300",
  "320i xDRIVE",
  "320i",
  "328d xDRIVE TOURG",
  "328d xDRIVE",
  "328i xDRIVE GRAN TURISMO",
  "328i xDRIVE TOURING",
  "328i xDRIVE",
  "328i",
  "335i xDRI",
  "335i xDRIVE GRAN TURISMO",
  "335i",
  "370Z ROADST",
  "370Z",
  "428i COUPE",
  "428i xDRIVE COUPE",
  "435i COUPE",
  "435i xDRIVE COU",
  "4RUNNER (Part-Time 4WD)",
  "4RUNNER 4WD",
  "500 ABARTH CABRI",
  "500 ABARTH HATCHBACK",
  "500 CABRIO TURBO",
  "500 CABRIO",
  "500 HATCHBACK TURBO",
  "500 HATCHBACK",
  "500L TURBO",
  "528i xDRI",
  "528i",
  "535d xDRIVE",
  "535i xDRIVE GRAN TURISMO",
  "535i xDRIVE",
  "550i xDRIVE GRAN TURISMO",
  "550i xDRIVE",
  "640i xDRIVE GRAN COUPE",
  "650i xDRIVE CABRIOLET",
  "650i xDRIVE COUPE",
  "650i xDRIVE GRAN COUPE",
  "740Li xDRIVE",
  "750i xDRE",
  "750Li xDRIVE",
  "760Li",
  "911 CARRE",
  "911 CARRERA 4 CABRIOLET",
  "911 CARRERA 4",
  "911 CARRERA 4S CABRIOLET",
  "911 CARRERA CABRIOLET",
  "911 CARRERA S CABRIOLET",
  "911 CARRERA S",
  "911 CARRERAS",
  "911 GT3",
  "911 TURBO CABRIET",
  "911 TURBO S CABRIOLET",
  "911 TURBO S",
  "911 TURBO",
  "A4 QUATTRO",
  "A4",
  "A5 CABRLET QUATTRO",
  "A5 QUATTRO",
  "A6 QUATTRO TDI CLEAN DIESEL",
  "A6 QUATTRO",
  "A7 QUATTRO TDI CLEAN DIESEL",
  "A7 QUATTRO",
  "A8 TDI CLEAN DIESEL",
  "A8",
  "A8L TDI CLEAN DIESEL",
  "A8L",
  "ACADIA AWD",
  "ACADIA",
  "ACCENT",
  "ACCORD HYBRID",
  "ACCORD",
  "ACTIVEHYBRID 5",
  "ACTIVEHYBRID 7L",
  "ACTIVEHYBRID",
  "ALLROAD QUATTRO",
  "ALPINA B7 xDRIVE LWB",
  "ALPINA B7 xDRIVE SWB",
  "ALTIMA",
  "ARMADA 4WD",
  "ATS AWD",
  "ATS",
  "AVALON",
  "AVENGER FFV",
  "AVENGER",
  "AVENTADOR COUPE",
  "B 250",
  "BEETLE CONVERTIE",
  "BEETLE TDI CLEAN DIESEL",
  "BEETLE",
  "BOXSTER S",
  "BOXSTER",
  "BRZ",
  "C 250 COUP",
  "C 250",
  "C 300 4MATIC FFV",
  "C 350 4MAT",
  "C 350 4MATIC COUP",
  "C 350 COUPE",
  "C 350",
  "C 63 AMG COUP",
  "C 63 AMG",
  "C-MAX HYBRID",
  "CADENZA",
  "CAMARO 2LS",
  "CAMARO SS",
  "CAMARO ZL1",
  "CAMARO",
  "CAMRY HYBRID LE",
  "CAMRY HYBRID XLE/SE",
  "CAMRY",
  "CARGO VAN FFV",
  "CAYENNE DIESEL",
  "CAYENNE GTS",
  "CAYENNE S HYBRID",
  "CAYENNE S",
  "CAYENNE TURB",
  "CAYENNE",
  "CAYMAN S",
  "CAYMAN",
  "CC 4MOTION",
  "CC",
  "CHALLENGER (MDS)",
  "CHALLENGER SRT (MDS)",
  "CHALLENGER SRT",
  "CHALLENGER",
  "CHARGER (MDS)",
  "CHARGER AWD (MDS)",
  "CHARGER AWD",
  "CHARGER D FFV",
  "CHARGER FFV",
  "CHARGER SRT (MDS)",
  "CHARGER",
  "CHEROKEE 4X4 Active Drive II",
  "CHEROKEE 4X4",
  "CHEROKEE TRAILHAWK 4X4",
  "CHEROKEE",
  "CIVIC",
  "CL 550 4MATIC",
  "CL 63 AMG",
  "CLA 250",
  "CLA 45 AMG 4MATIC",
  "CLS 550 4MATIC",
  "CLS 63 AMG 4MATIC",
  "CLS 63 AMG S 4MATIC",
  "COMPASS 4X4 TRAIL RATED",
  "COMPASS 4X4",
  "COMPASS",
  "CONTINENT GTC",
  "CONTINENTAL GT CONVERTIBLE",
  "CONTINENTAL GT SPEED CONVERTIBLE",
  "CONTINENTAL GT",
  "COOPER CLUBMAN",
  "COOPER CONVERTIBLE",
  "COOPER COUNTRYMAN",
  "COOPER COUPE",
  "COOPER PEMAN",
  "COOPER ROADSTER",
  "COOPER S COUNTRYMAN ALL4",
  "COOPER S COUPE",
  "COOPER S PACEMAN ALL4",
  "COOPER S ROADSTER",
  "COOPER S UBMAN",
  "COOPER SONVERTIBLE",
  "COROLLA LE ECO (1-mode)",
  "COROLLA LE ECO (2-mode)",
  "COROLLA MATRIX",
  "COROLLA",
  "CORVETTE",
  "CR-V AWD",
  "CR-V",
  "CR-Z",
  "CROSSTOUR AWD",
  "CRUZE DIESEL",
  "CRUZE ECO",
  "CRUZE",
  "CT 200h",
  "CTS COUPE AWD",
  "CTS COUPE",
  "CTS SEDAN AWD",
  "CTS SEDAN Vsport",
  "CTS SEDAN",
  "CTS SPORT WAGON D",
  "CTS SPORT WAGON",
  "CTS-V COUPE",
  "CTS-V SEDAN",
  "CTS-V SPORT WAG",
  "CX-5",
  "CX-9 4WD",
  "CX-9",
  "DART FFV",
  "DART GT",
  "DART TURBO AERO",
  "DART",
  "DB9",
  "DURANGO AWD (MDS)",
  "DURANGO AWD FFV",
  "E 250 BLUETEC 4MATIC",
  "E 300 4MATIC",
  "E 350 4MATIC WAGON",
  "E 350 4MATIC",
  "E 350 4MIC COUPE",
  "E 350 CABRIOLET",
  "E 350 COUPE",
  "E 400 HYBRID",
  "E 550 4MATIC",
  "E 550 CABRIOLET",
  "E 550 COUPE",
  "E 63 AMG 4MATIC WAGON",
  "E 63 AMG 4MATIC",
  "E 63 AMG S 4MATIC WAGON",
  "E 63 AMG S 4MATIC",
  "E150 VAN FFV",
  "E150 WAGON FFV",
  "E350 WAGO",
  "E350 WAGON FFV",
  "EDGE AWD",
  "EDGE",
  "ELANTRA GT",
  "ENCLAVE AWD",
  "ENCLAVE",
  "ENCORE AWD",
  "ENCORE",
  "EOS",
  "EQUINOX AWD",
  "EQUINOX",
  "EQUUS",
  "ES 300h",
  "ES 350",
  "ESCALADE AW,",
  "ESCALADE ESV AW",
  "ESCAPE AWD",
  "ESCAPE",
  "EXPEDITION 4X4 FFV",
  "EXPLORER FFV AWD",
  "EXPLORER FFV",
  "EXPLORER",
  "EXPLORERWD",
  "EXPRESS 1500 CAR",
  "EXPRESS 1500 CARGO AWD",
  "EXPRESS 1500 CARGO CONV AWD",
  "EXPRESS 1500 CARGO CONV",
  "EXPRESS 1500 PASSENGER AWD",
  "EXPRESS 1500 PASSENGER",
  "EXPRESS 2500 PASSENGER",
  "EXPRESS 3500 PASSENGER",
  "F-TYPE CONVERBLE",
  "F-TYPE S CONVERTIBLE",
  "F-TYPE V8 S CONVERTIBLE",
  "F150 4X4",
  "F150 FFV 4X4",
  "F150 RAPTOR 4",
  "F150",
  "FIESTA SFE",
  "FIESTA ST",
  "FIESTA",
  "FIT",
  "FJ CRUISER 4WD",
  "FLEX AWD (Ecoost)",
  "FLEX AWD",
  "FLEX",
  "FLYING SPUR",
  "FOCUS FFV",
  "FOCUS SFE FFV",
  "FOCUS",
  "FORESTER AWD",
  "FORTE 5",
  "FORTE KOUP",
  "FORTE",
  "FORTWO CABRIET",
  "FORTWO COUPE",
  "FR-S",
  "FRONTIER",
  "FRONTIERWD",
  "FUSION (Stt/Stop)",
  "FUSION AWD",
  "FUSION HYBRID",
  "FUSION",
  "G 550",
  "G 63 AMG",
  "GALLARDO COUPE",
  "GENESIS",
  "GHIBLI AWD",
  "GHIBLI",
  "GHOST EWB",
  "GHOST",
  "GL 350 BLUETEC 4MATIC",
  "GL 450 4MAC",
  "GL 550 4MATIC",
  "GL 63 AMG",
  "GLK 250 BLUETEC 4MATIC",
  "GLK 350 4MATIC",
  "GOLF WAGON TDI CLEAN DIESEL",
  "GOLF WAN",
  "GRAND CARAVAN FFV",
  "GRAND CHEROKEE 4X4 (MDS)",
  "GRAND CHEROKEE 4X4 DIESEL",
  "GRAND CHEROKEE 4X4 FFV",
  "GRAND CHEROKEE 4X4 SRT (MDS)",
  "GRANTURISMO CONVERTIBLE",
  "GRANTURISMO",
  "GS 350 AWD",
  "GS 350",
  "GS 450h",
  "GT-R",
  "GX 460",
  "HIGHLANDER AWD",
  "HIGHLANDER HYBRID AWD LE",
  "HIGHLANDER HYBRID AWD",
  "HIGHLANDER",
  "ILX HYBRID",
  "ILX",
  "IMPALA ECO",
  "IMPALA",
  "IMPREZA AWD",
  "IMPREZA WAN AWD",
  "iQ",
  "IS 250 AWD",
  "IS 250 C",
  "IS 250",
  "IS 350 AWD",
  "IS 350 C",
  "IS 350",
  "IS F",
  "JETTA GLI",
  "JETTA TDI CLEAN DIESEL",
  "JETTA TURBO HRID",
  "JETTA",
  "JOHN COOPER WORKS CLUBMAN",
  "JOHN COOPER WORKS CONVERTIBLE",
  "JOHN COOPER WORKS COUNTRYMAN ALL4",
  "JOHN COOPER WORKS COUPE",
  "JOHN COOPER WORKS PACEMAN ALL4",
  "JOHN COOPER WORKS ROADSTER",
  "JOURNEY AWD",
  "JOURNEY FFV",
  "JOURNEY",
  "JUKE AWD",
  "JUKE",
  "LACROSSE A",
  "LACROSSE eASSIS",
  "LACROSSE",
  "LANCER AWD",
  "LANCER EVOLUTION",
  "LANCER RALLIART",
  "LANCER SPORACK",
  "LANCER",
  "LEGACY AWD",
  "LR2",
  "LR4",
  "LS 460 AWD",
  "LS 460 L AWD",
  "LS 460",
  "LS 600h L",
  "LX 570",
  "M5",
  "M6 CABRIOLET",
  "M6 GRAN UPE",
  "M6",
  "MALIBU",
  "MAXIMA",
  "MAZDA2 CX-5 4WD",
  "MAZDA3 4-DOOR (i-ELOOP)",
  "MAZDA3 4-DOOR (SIL)",
  "MAZDA3 4-DOOR",
  "MAZDA3 5-DOOR (i-ELOOP)",
  "MAZDA3 5-DOOR IL)",
  "MAZDA3 5-DR",
  "MAZDA5",
  "MAZDA6 (i-ELOOP)",
  "MAZDA6",
  "MDX 4WD",
  "MIRAGE",
  "MKS AWD",
  "MKT AWD",
  "MKT LIVERY AWD",
  "MKT LIVERY",
  "MKX AWD",
  "MKZ AWD",
  "MKZ HYBRID",
  "MKZ",
  "ML 350 4MATIC FFV",
  "ML 350 BLUETEC 4MATIC",
  "ML 550 4MATIC",
  "ML 63 AMG 4TIC",
  "MULSANNE",
  "MURANO AWD",
  "MUSTANG CONVERTIBL",
  "MUSTANG",
  "MX-5",
  "NAVIGATOR 4XFFV",
  "NV200 CARGO VAN",
  "ODYSSEY",
  "OPTIMA",
  "ORLANDO",
  "OUTBACK AWD",
  "OUTLANDER",
  "OUTLANDERWD",
  "PANAMERA 4",
  "PANAMERA 4S EXECUTIVE",
  "PANAMERA 4S",
  "PANAMERA GTS",
  "PANAMERA TURB",
  "PANAMERA TURBO EXECUTIVE",
  "PANAMERA",
  "PASSAT TDI CLEAN DIESEL",
  "PASSAT",
  "PATHFINDER 4WD",
  "PATHFINDER HYBRID 4WD",
  "PATHFINDER",
  "PATRIOT 4X4 TRAIL RATED",
  "PATRIOT 4X4",
  "PATRIOT",
  "PHANTOM COE",
  "PHANTOM DROPHEAD COUPE",
  "PHANTOM EWB",
  "PHANTOM",
  "PILOT AWD",
  "PILOT",
  "PRIUS c",
  "PRIUS v",
  "PRIUS",
  "Q5 HYBRID",
  "Q5 TDI CLEAN DSEL",
  "Q5",
  "Q50 AWD",
  "Q50 HYBRID AWD",
  "Q50 HYBRID",
  "Q50",
  "Q60 AWD COUPE",
  "Q60 CONVERTIBL",
  "Q60 COUP",
  "Q7 TDI EAN DIESEL",
  "Q7",
  "Q70 AWD",
  "Q70 HYBRID",
  "Q70",
  "QUATTROPORTE GTS",
  "QUATTROPORTE SQ4",
  "QUEST",
  "QX50 AWD",
  "QX60 AWD",
  "QX60 HYBRID A",
  "QX60",
  "QX70 AWD",
  "QX80 4WD",
  "R8 SPYDER",
  "R8",
  "RANGE ROVER EVOQU",
  "RANGE ROVER EVOQUE COUPE",
  "RANGE ROVER LWB V8 5.0 SC FFV",
  "RANGE ROVER LWB V8 5.0 SC",
  "RANGE ROVER SPORT V6 3.0 SC FFV",
  "RANGE ROVER SPORT V6 3.0 SC",
  "RANGE ROVER SPORT V8 5.0 SC FFV",
  "RANGE ROVER SPORT V8 5.0 SC",
  "RANGE ROVER V6 3.0 SC FFV",
  "RANGE ROVER V6 3.0 SC",
  "RANGE ROVER V8 5.0 SC FFV",
  "RANGE ROVER V8 5.0 SC",
  "RAPIDE",
  "RAV4 AWD",
  "RAV4 LIMIT AWD",
  "RAV4",
  "RDX AWD",
  "REGAL AWD",
  "REGAL eASSIST",
  "REGAL",
  "RIDGELINE AWD",
  "RIO ECO",
  "RIO",
  "RLX",
  "ROGUE AWD",
  "ROGUE",
  "RONDO",
  "ROUTAN",
  "RS5 CABRLET",
  "RS5",
  "RS7",
  "RVR 4WD",
  "RVR",
  "RX 350 AWD",
  "RX 450h AWD",
  "S 550 4MATIC LWB",
  "S 550 4MATIC SW",
  "S 63 AMG 4MATIC",
  "S4",
  "S5 CABRIET",
  "S5",
  "S6",
  "S60 AWD",
  "S60",
  "S7",
  "S8",
  "S80 AWD",
  "S80",
  "SANTA FE 4WD",
  "SANTA FE SPORT 4WD",
  "SANTA FE SPORT",
  "SANTA FE",
  "SAVANA 10 CARGO",
  "SAVANA 1500 CARGO AWD",
  "SAVANA 1500 CARGO CONV AWD",
  "SAVANA 1500 CARGO CONV",
  "SAVANA 1500 PASSENGER AWD",
  "SAVANA 1500 PASSENGER",
  "SAVANA 2500 PASSENGER",
  "SAVANA 3500 PASSENGER",
  "SEDONA",
  "SENTRA",
  "SEQUOIA 4WD",
  "SIENNA AWD",
  "SIENNA",
  "SIERRA 4WD",
  "SIERRA",
  "SILVERADO 4WD",
  "SILVERADO",
  "SL 550",
  "SL 63 AMG",
  "SL 65 AMG",
  "SLK 250",
  "SLK 350",
  "SLK 55 A",
  "SLS AMG BLACK SERIES COUPE PANAMERA S",
  "SLS AMG GT COUPE",
  "SLS AMG ROADSTER",
  "SONATA HYBRID LIMITED",
  "SONATA HYBRID",
  "SONATA",
  "SONIC 5 RS",
  "SONIC 5",
  "SONIC RS",
  "SONIC",
  "SORENTO 4WD",
  "SORENTO",
  "SOUL ECO Dymics",
  "SOUL",
  "SPARK",
  "SPORTAGE AWD",
  "SPORTAGE",
  "SQ5",
  "SRX AWD",
  "SRX",
  "SUBURBAN 4WD",
  "SUBURBAN",
  "TACOMA 4WD",
  "TACOMA",
  "TAHOE 4WD",
  "TAHOE",
  "TAURUS AWD",
  "TAURUS FFV AWD TRANSIT CONNECT YUKON XL",
  "TAURUS FFV",
  "TAURUS",
  "tC",
  "TERRAIN AWD",
  "TERRAIN",
  "TIGUAN 4MOTION",
  "TIGUAN",
  "TITAN 4WD",
  "TITAN",
  "TL AWD",
  "TL",
  "TOUAREG TDI CLEAN DIESEL",
  "TOUAREG",
  "TOWN & COUNTRFFV",
  "TRANSIT CONNECT WAGON",
  "TRANSIT CONNECTAXI",
  "TRAVERSE AWD",
  "TRAVERSE",
  "TRAX AWD",
  "TRAX",
  "TRIBECA AWD",
  "TSX",
  "TT COUPE QUATTRO",
  "TT ROADSTER QUATTRO",
  "TTS COUPE QUATTRO",
  "TTS ROADSTER QUATTRO",
  "TUCSON 4WD",
  "TUCSON",
  "TUNDRA 4WD",
  "TUNDRA",
  "V8 VANTAGE S",
  "V8 VANTAGE",
  "VANQUISH",
  "VELOSTER TURB,",
  "VELOSTER",
  "VENZA 4WD",
  "VENZA",
  "VERANO",
  "VERSA",
  "VIPER COUPE",
  "VIPER GTS COUP",
  "WRAITH",
  "WRANGLER 4X4 (2-DOOR)",
  "WRANGLER UNLIMITED 4X4 (4-DOOR)",
  "X1 xDRIVE28i",
  "X1 xDRIVE35i",
  "X3 xDRIVE28i",
  "X3 xDRIVE35i",
  "X5 xDRIVE35i",
  "X5 xDRIVE50i",
  "X6 M",
  "X6 xDRIV0i",
  "X6 xDRIVE35i",
  "xB",
  "XC60 AWD",
  "XC60",
  "XC70 AWD",
  "XC90 AWD",
  "xD",
  "XF 3.0LWD",
  "XF",
  "XFR-S",
  "XFR",
  "XJ AWD",
  "XJ SUPERCHARGED",
  "XJL AWD POROLIO",
  "XJL SUPERCHARGED",
  "XJR LWB",
  "XJR",
  "XK CONVERTIB",
  "XK COUPE",
  "XKR CONVERTIBLE",
  "XKR COUPE",
  "XKR-S CONVERTIE",
  "XKR-S COUPE",
  "XTERRA 4WD",
  "XTS AWD",
  "XTS Vsport AWD",
  "XTS",
  "XV CROSREK AWD",
  "XV CROSSTREK HYBRID AWD",
  "YARIS",
  "YUKON 4WD",
  "YUKON DENALI AWD",
  "YUKON DENALI XL AWD",
  "YUKON XL 4WD",
  "YUKON",
  "Z4 sDRI35i",
  "Z4 sDRIVE28i",
  "Z4 sDRIVE35is",
  "F150 FFV",
  "Other",
];

const transmissions = [
  "A6",
  "AS6",
  "M6",
  "A8",
  "AS8",
  "AS7",
  "M5",
  "AV",
  "A4",
  "AM7",
  "A5",
  "A7",
  "AV6",
  "AS5",
  "M7",
  "A9",
  "AM6",
  "AV7",
  "AV8",
  "AS9",
  "AM5",
  "AS4",
  "Other",
];

const fueltypes = ["X", "Z", "E", "D", "Unknown"];

export { companies, models, vehicleclasses, transmissions, fueltypes };
