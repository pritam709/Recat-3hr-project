import React from "react";
import { useRef } from "react";

const Input = (props) => {
  const prodIdRef = useRef();
  const prodSpRef = useRef();
  const prodNameRef = useRef();
  const prodCatRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const productInputs = {
      id: prodIdRef.current.value,
      sp: prodSpRef.current.value,
      name: prodNameRef.current.value,
      cat: prodCatRef.current.value,
    };
    console.log(productInputs);
    localStorage.setItem(prodIdRef.current.value, JSON.stringify({
        sp: prodSpRef.current.value,
        name: prodNameRef.current.value,
        cat: prodCatRef.current.value,
      }));
    props.onSubmit(productInputs);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <label>Product ID: </label>
      <input ref={prodIdRef} type="number"></input>
      <label>Selling Price: </label>
      <input ref={prodSpRef} type="number"></input>
      <label>Product Name: </label>
      <input ref={prodNameRef} type="text"></input>
      <label>Choose Category: </label>
      <select ref={prodCatRef}>
        <option>Electronics</option>
        <option>Skincare</option>
        <option>Food</option>
      </select>
      <button type="submit"> Add Product</button>
    </form>
  );
};
export default Input;
