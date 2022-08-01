import ProductListItem from "./ProductListItem";
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
const ProductList = () => {
    return (
        <>
            {items.length ? (
            items.map((product, key) => (
                <ProductListItem key={key} product={product}/>
            ))
          ) : (
            <></>
          )}
        </>
    );
  };
  
  export default ProductList;