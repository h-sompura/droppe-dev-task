import * as React from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { Button } from "./components/button";
import ProductList from "./components/product-list-components";
import { Form } from "./components/form";
import { Header } from "./components/Header";
import { ImageContainer } from "./components/ImageContainer";
import { Product } from "./model/Product";
import styles from "./shopApp.module.css";

type State = {
  products: Product[];
  isOpen: boolean;
  isShowingMessage: boolean;
  message: string;
  numFavorites: number;
  prodCount: number;
};

export class ShopApp extends React.Component<{}, State> {
  // Refactored state
  state: State = {
    products: [],
    isOpen: false,
    isShowingMessage: false,
    message: "",
    numFavorites: 0,
    prodCount: 0,
  };

  componentDidMount() {
    document.title = "Droppe refactor app";
    this.fetchProducts();
  }

  onFavoriteToggle = (title: string) => {
    const products = this.state.products;
    const productIndex = products.findIndex(product => product.title === title);
    const currentFavorites = this.state.numFavorites;

    products[productIndex].isFavorite = !products[productIndex].isFavorite;
    const updatedFavorites = products[productIndex].isFavorite
      ? currentFavorites + 1
      : currentFavorites - 1;

    this.setState({ products, numFavorites: updatedFavorites });
  };

  onAddProduct = (payload: Product) => {
    const updatedProducts = [
      ...this.state.products,
      {
        title: payload.title,
        description: payload.description,
        price: payload.price,
      },
    ];

    this.setState({
      products: updatedProducts,
      prodCount: updatedProducts.length,
      isOpen: false,
      isShowingMessage: true,
      message: "Adding product...",
    });

    // **this POST request doesn't actually post anything to any database**
    this.updateProducts(payload);
  };

  // Helper/Methods
  fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const rawData = await response.json();
    const data: Product[] = rawData.map((product: Product) => ({
      ...product,
      isFavorite: false,
    }));
    this.setState({ products: data, prodCount: data.length });
  };

  // post products
  updateProducts = async (payload: Product) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({
          title: payload.title,
          price: payload.price,
          description: payload.description,
        }),
      });
      const json = await response.json();
      setTimeout(() => {
        this.setState({ isShowingMessage: false, message: "" });
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { products, isOpen } = this.state;
    return (
      <React.Fragment>
        <Header />
        <ImageContainer />
        <div
          className={["container", styles.main].join(" ")}
          style={{ paddingTop: 0 }}
        >
          <div className={styles.buttonWrapper}>
            <span role="button">
              <Button onClick={() => this.setState({ isOpen: true })}>
                Send product proposal
              </Button>
            </span>
            {this.state.isShowingMessage && (
              <div className={styles.messageContainer}>
                <i>{this.state.message}</i>
              </div>
            )}
          </div>

          <div className={styles.statsContainer}>
            <span>Total products: {this.state.prodCount}</span>
            {" - "}
            <span>Number of favorites: {this.state.numFavorites}</span>
          </div>

          {products && products.length ? (
            <ProductList products={products} onFav={this.onFavoriteToggle} />
          ) : null}
        </div>

        <>
          <Modal
            isOpen={isOpen}
            className={styles.reactModalContent}
            overlayClassName={styles.reactModalOverlay}
          >
            <div className={styles.modalContentHelper}>
              <div
                className={styles.modalClose}
                onClick={() => this.setState({ isOpen: false })}
              >
                <FaTimes />
              </div>

              <Form on-submit={this.onAddProduct} />
            </div>
          </Modal>
        </>
      </React.Fragment>
    );
  }
}
