const DashBoard = (props) => {
//   const clickHandler = (id, cat) => {
//     props.onClick(id, cat);
//   };
  return (
    <div>
      {" "}
      <h1>Products</h1>
      <h3>Electronics Items:</h3>
      {props.electronicItems.map((item) => {
        return (
          <li key={item.id}>
            {item.sp} - {item.cat} - {item.name}{" "}
            <button onClick={() => props.onClick(item.id, item.cat)}>
              Delete Product
            </button>
          </li>
        );
      })}
      <h3> Food Items:</h3>
      {props.foodItems.map((item) => {
        return (
          <li key={item.id}>
            {item.sp} - {item.cat} - {item.name}{" "}
            <button onClick={() => props.onClick(item.id, item.cat)}>
              Delete Product
            </button>
          </li>
        );
      })}
      <h3> Skincare Items: </h3>
      {props.skincareItems.map((item) => {
        return (
          <li key={item.id}>
            {item.sp} - {item.cat} - {item.name}{" "}
            <button onClick={() => props.onClick(item.id, item.cat)}>
              Delete Product
            </button>
          </li>
        );
      })}
    </div>
  );
};
export default DashBoard;
