const ProductListItem = (props) => {
    const {product}=props;
    return (<div className="product-slider-item">

<div className="frame" style={{ userSelect: "none" }}>
                  <div className="image">
                    <img
                      src={product?.image}
                      alt="image 1"
                      style={{ pointerEvents: "none" }}
                    />
                  </div>
                  <div className="title-row">{product?.title}</div>
                  <div className="specif-row">
                    <span className="price">{product?.price}</span>
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
                                  style={{ backgroundColor: color?.colorCode }}
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
    
    </div>);
};

export default ProductListItem;