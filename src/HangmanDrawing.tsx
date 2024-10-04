// creating dynamic element

// Head

const HEAD = (
    <div style={{
        width :"50px",
        height :"50px",
        borderRadius : "100%",
        border :"10px solid black",
        position :"absolute",
        top :"50px",
        right : "-30px",
    }}
    />
)

 // body
 const BODY = (
    <div style={{
        width :"10px",
        height :"100px",
        background : "black",
        position :"absolute",
        top :"110px",
        right : 0,
    }}
    />
)
//Right-arm

const RIGHT_ARM  = (
    <div style={{
        width :"100px",
        height :"10px",
        background:"black",
        position :"absolute",
        top :"150px",
        right : "-100px",
        rotate:" -30deg",
        transformOrigin :"left bottom",
    }}
    />
)

// left-arm

const LEFT_ARM  = (
    <div style={{
        width :"100px",
        height :"10px",
        background:"black",
        position :"absolute",
        top :"150px",
        right : "10px",
        rotate:" 30deg",
        transformOrigin :"right bottom",
    }}
    />
)

// right-leg

const RIGHT_LEG  = (
    <div style={{
        width :"100px",
        height :"10px",
        background:"black",
        position :"absolute",
        top :"200px",
        right : "-90px",
        rotate:" 60deg",
        transformOrigin :"left bottom",
    }}
    />
)

// left-leg

const LEFT_LEG  = (
    <div style={{
        width :"100px",
        height :"10px",
        background:"black",
        position :"absolute",
        top :"200px",
        right : 0,
        rotate:" -60deg",
        transformOrigin :"right bottom",
    }}
    />
)

const BODY_PARTS = [HEAD , BODY ,RIGHT_ARM ,LEFT_ARM , RIGHT_LEG ,LEFT_LEG ]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses } : HangmanDrawingProps ) {

  return (
    // default position of all the elements
    <div style={{ position: "relative" }}>
       {BODY_PARTS.slice(0, numberOfGuesses)}

      {/* Drop-Down line */}

      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />

      {/* Over Hanging line */}
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      {/* vertical line */}
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      {/* horizontal line */}
      <div
        style={{
          height: "10px",
          width: "250px",
          background: "black",
        }}
      />
    </div>
  );
}
