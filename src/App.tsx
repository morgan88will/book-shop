import React from "react";
import { Cart } from "./components/Cart";
import { BookList } from "./components/BookList";
import { NavbarComponent } from "./components/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
// import { Container, Row } from "react-bootstrap";
import { useAppSelector } from "./app/hooks";
import { selectAppView } from "./app/slices/localDBSlice";
import { Filters } from "./components/Filters";
import "./App.css";

function App() {
  const appView = useAppSelector(selectAppView);

  return (
    <div className="App">
      <NavbarComponent />
      {appView === "home" && (
        <>
          {/* <TopBar /> */}
          <Filters />
          <BookList />
        </>
      )}
      {appView === "cart" && <Cart />}
    </div>
  );
}

export default App;
