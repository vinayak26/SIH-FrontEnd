import React  from "react";

const CardExampleCard = (props) => (
  <div
    style={{
      background:"",
      display: "flex",
      flexDirection: "column",
      padding: "5px",
      paddingLeft: "80px",
      border: "1px  #eee",
      width: "500px",
      overflow:"hidden"
    }}
  >
    <img
      src={props.image}
      width="75%"
      height="250px"
      alt=""
    />
  <div style={{border:"0.5px #eee", marginTop:"5px"}}>
      <div
        style={{
          textAlign: "center",
          fontSize: "14px",
          fontWeight: "600",
          color:"black"
        }}
      >
        {props.text}
        
        
      </div>
     {/* <div
        style={{
          fontSize: "12px",
          fontWeight: "600",
          marginTop: "10px",
          textAlign:"center",
          color:"white"
        }}
      >
        Random Details on the image or the Team Member<br/>
        Random Details on the image or the Team Member<br/>
        Random Details on the image or the Team Member<br/>
        Random Details on the image or the Team Member<br/>
      </div>*/}
    </div>
  </div>
  
);

export default CardExampleCard;
