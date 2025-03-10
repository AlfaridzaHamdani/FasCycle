import styles from "./styles.module.scss";
import Footer from "../../components/Footer";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  const allProducts = [
    {
      name: "Product 1",
      image: "/item-1.jpeg",
      price: "100.000",
      category: "men",
    },
    {
      name: "Product 2",
      image: "/item-2.jpeg",
      price: "150.000",
      category: "men",
    },
    {
      name: "Product 3",
      image: "/item-3.jpeg",
      price: "200.000",
      category: "men",
    },
    {
      name: "Product 4",
      image: "/item-4.jpeg",
      price: "250.000",
      category: "men",
    },
    {
      name: "Product 5",
      image: "/item-5.jpeg",
      price: "300.000",
      category: "women",
    },
    {
      name: "Product 6",
      image: "/item-6.jpeg",
      price: "350.000",
      category: "unisex",
    },
    {
      name: "Product 7",
      image: "/item-7.jpeg",
      price: "400.000",
      category: "men",
    },
    {
      name: "Product 8",
      image: "/item-8.jpeg",
      price: "450.000",
      category: "women",
    },
    {
      name: "Product 9",
      image: "/item-9.jpeg",
      price: "500.000",
      category: "unisex",
    },
    {
      name: "Product 10",
      image: "/item-10.jpeg",
      price: "550.000",
      category: "men",
    },
    {
      name: "Product 11",
      image: "/item-11.jpeg",
      price: "600.000",
      category: "women",
    },
    {
      name: "Product 12",
      image: "/item-12.jpeg",
      price: "650.000",
      category: "unisex",
    },
  ];

  const [displayedProducts, setDisplayedProducts] = useState(
    allProducts.slice(0, 8)
  );
  const [currentIndex, setCurrentIndex] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isEndOfList, setIsEndOfList] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        card.style.animationDelay = `${index * 0.1}s`;
      }
    });
  }, [displayedProducts]);

  const loadMoreProducts = () => {
    const nextProducts = allProducts
      .filter(
        (product) =>
          selectedCategory === "all" || product.category === selectedCategory
      )
      .slice(currentIndex, currentIndex + 8);

    if (nextProducts.length > 0) {
      setDisplayedProducts((prev) => [...prev, ...nextProducts]);
      setCurrentIndex((prev) => prev + 8);
    } else {
      setIsEndOfList(true);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setDisplayedProducts(
      allProducts
        .filter(
          (product) => category === "all" || product.category === category
        )
        .slice(0, 8)
    );
    setCurrentIndex(8);
    setIsEndOfList(false);
  };

  return (
    <>
      <div className={styles.products}>
        <div className={styles.filter}>
          <div className={styles.item}>
            <span>Filter</span>
            <img src="/filter-icon.svg" alt="" />
          </div>
          <div
            className={styles.item}
            style={
              selectedCategory === "all" ? { backgroundColor: "#0ca49d" } : {}
            }
            onClick={() => handleCategoryChange("all")}
          >
            <button
              style={
                selectedCategory === "all" ? { color: "#fff" } : { color: "" }
              }
              className={styles.categoryButton}
            >
              All
            </button>
          </div>
          <div
            className={styles.item}
            style={
              selectedCategory === "men" ? { backgroundColor: "#0ca49d" } : {}
            }
            onClick={() => handleCategoryChange("men")}
          >
            <button
              style={
                selectedCategory === "men" ? { color: "#fff" } : { color: "" }
              }
              className={styles.categoryButton}
            >
              Men
            </button>
          </div>

          <div
            className={styles.item}
            style={
              selectedCategory === "women" ? { backgroundColor: "#0ca49d" } : {}
            }
            onClick={() => handleCategoryChange("women")}
          >
            <button
              style={
                selectedCategory === "women" ? { color: "#fff" } : { color: "" }
              }
              className={styles.categoryButton}
            >
              Women
            </button>
          </div>
          <div
            className={styles.item}
            style={
              selectedCategory === "unisex"
                ? { backgroundColor: "#0ca49d" }
                : {}
            }
            onClick={() => handleCategoryChange("unisex")}
          >
            <button
              style={
                selectedCategory === "unisex"
                  ? { color: "#fff" }
                  : { color: "" }
              }
              className={styles.categoryButton}
            >
              Unisex
            </button>
          </div>
        </div>
        <div className={styles.productsList}>
          {displayedProducts.map((product, index) => (
            <Card
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              product={product}
            />
          ))}
        </div>

        <button
          className={styles.loadMore}
          onClick={loadMoreProducts}
          disabled={isEndOfList}
        >
          {isEndOfList ? "Konten Sudah Habis" : "Load More"}
        </button>
      </div>

      <Footer />
    </>
  );
};

// Komponen Card
const Card = React.forwardRef(({ product }, ref) => {
  return (
    <Link to={"/product"} ref={ref} className={styles.card}>
      <img src={product.image} alt={product.name} />
      <div className={styles.info}>
        <h2>{product.name}</h2>
        <p>IDR {product.price}</p>
      </div>
    </Link>
  );
});

export default index;
