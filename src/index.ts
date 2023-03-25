import { LocalDataSource } from "./data/localDataSource";
import { HtmlDisplay } from "./htmlDisplay";
import "bootstrap/dist/css/bootstrap.css";

let ds = new LocalDataSource();

async function displayData(): Promise<HTMLElement> {
  let display = new HtmlDisplay();
  display.props = {
    dataSource: ds,
  };
  return display.getContent();
}

// make sure the dom is loaded before rendering the data
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    displayData().then((elem) => {
      let rootElement = document.getElementById("app");
      rootElement.innerHTML = "";
      rootElement.appendChild(elem);
    });
  }
};

// async function displayData(): Promise<string> {
//   let ds = new LocalDataSource();
//   let allProducts = await ds.getProducts("name");
//   let categories = await ds.getCategories();
//   let chessProducts = await ds.getProducts("name", "chess");

//   let result = "";

//   allProducts.forEach((p) => (result += `Product: ${p.name}, ${p.category}\n`));
//   categories.forEach((c) => (result += `Category: ${c}\n`));
//   chessProducts.forEach((p) => ds.order.total.toFixed(2));
//   return result;
// }

// displayData().then((res) => console.log(res));
