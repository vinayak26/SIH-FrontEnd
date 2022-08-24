import React  from "react";

const CardExampleCard = (props) => (
  <div
    style={{
      background: "#fff",
      display: "flex",
      flexDirection: "column",
      padding: "5px",
      border: "1px solid #eee",
      width: "500px",
      overflow:"hidden"
    }}
  >
    <img
      src={props.image}
      width="100%"
      height="230px"
      alt=""
    />
    <div style={{border:"0.5px solid #eee", marginTop:"5px"}}>
      <div
        style={{
          textAlign: "center",
          fontSize: "14px",
          fontWeight: "600"
        }}
      >
        {props.text}
        
        
      </div>
      <div
        style={{
          fontSize: "12px",
          fontWeight: "600",
          marginTop: "10px",
          textAlign:"center"
        }}
      >
        Random Details on the image or the Team Member<br/>
        Random Details on the image or the Team Member<br/>
        Random Details on the image or the Team Member<br/>
        Random Details on the image or the Team Member<br/>
      </div>
    </div>
  </div>
);

export default CardExampleCard;
