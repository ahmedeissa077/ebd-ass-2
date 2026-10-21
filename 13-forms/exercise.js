// 13-forms — your work goes in this file.

// The data lives here. The page is just a picture of this array.
const items = [];

/**
 * Reads what is currently typed into the two boxes.
 *
 * readForm() -> { name: "Pen", price: 15 }
 *
 * @returns {{ name: string, price: number }}
 */
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);
  return { name, price };
}

/**
 * Empties both boxes.
 *
 * @returns {void}
 */
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

/**
 * Draws the list from an array of items, replacing whatever was there before.
 *
 * @param {Array<{name: string, price: number}>} items
 * @returns {void}
 */
export function renderList(items) {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("card");

    const h3 = document.createElement("h3");
    h3.textContent = item.name;

    const p = document.createElement("p");
    p.classList.add("price");
    p.textContent = `${item.price} EGP`;

    li.appendChild(h3);
    li.appendChild(p);
    list.appendChild(li);
  });
}

/**
 * Listens for the form's "submit" event and validates, adds and redraws.
 *
 * @returns {void}
 */
export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { name, price } = readForm();

    if (name === "") {
      error.textContent = "Give the product a name.";
      return;
    }

    if (!(price > 0)) {
      error.textContent = "Give the product a price.";
      return;
    }

    error.textContent = "";
    items.push({ name, price });
    renderList(items);
    clearForm();
  });
}