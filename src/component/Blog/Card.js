import React, { useState } from "react"

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
       <div className="box btn_shadow">
        <div className="title_content d_flex">
          <div className="title">
            <h2>{props.title}</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
