import { useEffect, useState } from "react";
import coverPhoto from "./../images/cover.jpg";
import ProductList from "./ProductList";
const Layout = () => {
  const [xDiff, setXDiff] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [before, setBefore] = useState(0);
  const [dragItem, setDragItem] = useState({});
  const [leftLimit, setLeftLimit] = useState(0);

  const handleMouseDown = (e, mobile = false) => {
    setBefore(dragX);
    setDragItem(e.currentTarget);

    let leftLimitVar;
    if (mobile) {
      leftLimitVar =
        document.querySelector(".drag-container").clientWidth -
        document.querySelector(".drag-inside").clientWidth -
        24;
    } else {
      leftLimitVar =
        document.querySelector(".drag-container").clientWidth -
        document.querySelector(".drag-inside").clientWidth -
        32;
    }

    setLeftLimit(leftLimitVar);
    if (e.changedTouches) {
      setXDiff(e.changedTouches["0"].clientX);
      return;
    }

    setXDiff(e.clientX);
  };

  const handleMouseUp = (e) => {
    setDragItem({});
  };

  const handleTouchMove = (e) => {
    if (Object.keys(dragItem).length !== 0) {
      if (e.changedTouches) {
        if (dragX < leftLimit) {
          setDragX(leftLimit + 5);
          setDragItem({});
          return;
        }
        if (e.changedTouches["0"].clientX - xDiff + before < 1)
          setDragX(e.changedTouches["0"].clientX - xDiff + before);
      }
    }
  };

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      if (Object.keys(dragItem).length !== 0) {
        if (dragX < leftLimit) {
          setDragX(leftLimit + 5);
          setDragItem({});

          return;
        }
        if (event.clientX - xDiff + before < 1)
          setDragX(event.clientX - xDiff + before);
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
          onTouchStart={(e) => handleMouseDown(e, true)}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
          style={{ left: dragX }}
        >
          <ProductList />
        </div>
      </section>
    </div>
  );
};

export default Layout;
