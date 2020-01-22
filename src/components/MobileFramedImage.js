import React from "react"
//https://css-tricks.com/infinite-all-css-scrolling-slideshow/
const MobileFramedImage = props => {
  console.log(props.image)
  return (
    <div
      style={{
        position: `relative`,
      }}
    >
      <svg viewBox="0 0 96 180">
        <rect
          // style="fill:#4d4d4d;stroke-width:0.29464686"
          // id="rect12"
          // width="96"
          // height="180"
          // x="51.30788"
          // y="49.289886"
          rx="7"
        />
      </svg>
      <img
        src={props.image.stomp}
        width="90"
        height="160"
        style={{
          position: `absolute`,
          top: `8px`,
          left: `3px`,
        }}
      ></img>
    </div>
  )
}

export default MobileFramedImage