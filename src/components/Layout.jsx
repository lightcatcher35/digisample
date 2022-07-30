import { useEffect, useState } from "react";
import coverPhoto from "./../images/cover.jpg";

const items = [
  {
    image: "/images/bg1.jpg",
    title: "365 Signature Hoodie",
    price: "€33.95",
    colorVariants: [
      {
        name: "blue",
        colorCode: "#99C3CC",
      },
      {
        name: "pastelRed",
        colorCode: "#CC9999",
      },
      {
        name: "purple",
        colorCode: " #CB99CC",
      },
      {
        name: "green",
        colorCode: "#A6CC99",
      },
    ],
  },
  {
    image: "/images/bg2.jpg",
    title: "Organic Skinny High Waist Jeans",
    price: "€33.95",
    colorVariants: [
      {
        name: "blue",
        colorCode: "#99C3CC",
      },
      {
        name: "pastelRed",
        colorCode: "#CC9999",
      },
      {
        name: "purple",
        colorCode: " #CB99CC",
      },
      {
        name: "green",
        colorCode: "#A6CC99",
      },
    ],
  },
  {
    image: "/images/bg3.jpg",
    title: "Organic Skinny High Waist Jeans",
    price: "€33.95",
    colorVariants: [
      {
        name: "blue",
        colorCode: "#99C3CC",
      },
      {
        name: "pastelRed",
        colorCode: "#CC9999",
      },
      {
        name: "purple",
        colorCode: " #CB99CC",
      },
      {
        name: "green",
        colorCode: "#A6CC99",
      },
    ],
  },
  {
    image: "/images/bg3.jpg",
    title: "Organic Skinny High Waist Jeans",
    price: "€33.95",
    colorVariants: [
      {
        name: "blue",
        colorCode: "#99C3CC",
      },
      {
        name: "pastelRed",
        colorCode: "#CC9999",
      },
      {
        name: "purple",
        colorCode: " #CB99CC",
      },
      {
        name: "green",
        colorCode: "#A6CC99",
      },
    ],
  }
];

const Layout = () => {
  const [xDiff, setXDiff] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [before, setBefore] = useState(0);
  const [dragItem, setDragItem] = useState({});
  const [leftLimit, setLeftLimit] = useState(0);

  const handleMouseDown = (e,mobile=false) => {


    //if((document.querySelector(".drag-container").clientWidth-document.querySelector(".drag-inside").clientWidth)-32>-1) return;
    setBefore(dragX);
    setDragItem(e.currentTarget);

    //console.log("handleMouseDown : ", e.currentTarget);
    ///console.log("clientX : ", e.clientX);

    //console.log("drag-container : ", document.querySelector(".drag-inside"));
    //console.log("drag-container 2 : ", document.querySelector(".drag-container").clientWidth-document.querySelector(".drag-inside").clientWidth);
    
    let leftLimitVar;
    if(mobile){
      leftLimitVar=document.querySelector(".drag-container").clientWidth -
      document.querySelector(".drag-inside").clientWidth -
      24;
    }else if(mobile){
      leftLimitVar=document.querySelector(".drag-container").clientWidth -
      document.querySelector(".drag-inside").clientWidth -
      32;
    }
    
    console.log("leftLimitVar : ", leftLimitVar);

    setLeftLimit(leftLimitVar);
    if (e.changedTouches) {
      ///console.log("touch : ", e.changedTouches["0"].clientX);
      setXDiff(e.changedTouches["0"].clientX);
      return;
    }

    console.log("Desktop : ");
    setXDiff(e.clientX);
  };

  const handleMouseUp = (e) => {
    setDragItem({});

    console.log("handleMouseUp : ", e.currentTarget);
  };

  const handleTouchMove = (e) => {
    console.log("handleTouchMove");
    if (Object.keys(dragItem).length !== 0) {
      if (e.changedTouches) {
        console.log("dif : ", dragX);
        console.log("leftLimit : ", leftLimit);

        if (dragX < leftLimit) {
          setDragX(leftLimit + 5);
          setDragItem({});
          return
        }
        if (e.changedTouches["0"].clientX - xDiff + before < 1)
          setDragX(e.changedTouches["0"].clientX - xDiff + before);

        //console.log("xDiff : ", xDiff);
        //console.log(e.changedTouches["0"].clientX);
       // console.log("before : ", before);

        //console.log("dif : ", dragX);
      }
    }
  };

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      if (Object.keys(dragItem).length !== 0) {
        console.log("-------------");

        console.log("dif : ", dragX);
        console.log("leftLimit : ", leftLimit);

        if (dragX < leftLimit) {
          setDragX(leftLimit + 5);
          setDragItem({});

          return;
        } else if (event.clientX - xDiff + before < 1)
          setDragX(event.clientX - xDiff + before);

        //console.log("xDiff : ", xDiff);
        //console.log(event.clientX);
        //console.log("before : ", before);

        //console.log("dif : ", dragX);
      }
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  });

  return (
    <div className="layout" onMouseUp={handleMouseUp}>
      <div className="cover-mobile">
        <img src={coverPhoto} alt="Cover Photo" />
      </div>
      <section className="content">
        <div className="content-mobile">
          <h1 className="heading content-mobile-title">
            Everyday tops, we have something to suit every occasion.
          </h1>
          <div className="content-url">
            <a href="#">Shop all everyday items</a>
          </div>
        </div>
        <h1 className="heading content-title">
          Everyday items, we have something to suit every occasion.
        </h1>
        <article className="content-description">
          At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit
          tincidunt semper eu proin leo gravida cursus.
        </article>
        <div className="content-url">
          <a href="#">Shop all everyday items</a>
        </div>
      </section>
      <section className="product-slider drag-container">
        <div
          className="product-slider-list drag-inside"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={(e)=>handleMouseDown(e,true)}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
          style={{ left: dragX }}
        >
          {items.length ? (
            items.map((product, key) => (
              <div className="product-slider-item" key={key}>
                <div className="frame" style={{ userSelect: "none" }}>
                  <div className="image">
                    <img
                      src={product.image}
                      alt="image 1"
                      style={{ pointerEvents: "none" }}
                    />
                  </div>
                  <div className="title-row">{product.title}</div>
                  <div className="specif-row">
                    <span className="price">{product.price}</span>
                    <div className="color-variants">
                      <div className="colors">
                        {product.colorVariants.length ? (
                          product.colorVariants.map((color, keyChild) => (
                            <div className="color-option" key={keyChild}>
                              <a
                                href="#"
                                className={`btn ${
                                  keyChild === 0 ? "active" : ""
                                }`}
                              >
                                <div
                                  className="color-option-inner"
                                  style={{ backgroundColor: color.colorCode }}
                                ></div>
                                <div className="color-option-outer"></div>
                              </a>
                            </div>
                          ))
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
};

export default Layout;
