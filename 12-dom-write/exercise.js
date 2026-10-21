// 12-dom-write — your work goes in this file.

// Helper: find the card whose h3 says `name`, or undefined if there is none.
function findCard(name) {
  return Array.from(document.querySelectorAll(".card")).find(
    (card) => card.querySelector("h3").textContent === name
  );
}

/**
 * Adds one product card to the end of the list.
 *
 * addProduct("Pen", 15) adds:
 *   <li class="card"><h3>Pen</h3><p class="price">15 EGP</p></li>
 *
 * @param {string} name
 * @param {number} price in EGP
 * @returns {void}
 */
export function addProduct(name, price) {
  const li = document.createElement("li");
  li.classList.add("card");

  const h3 = document.createElement("h3");
  h3.textContent = name;

  const p = document.createElement("p");
  p.classList.add("price");
  p.textContent = `${price} EGP`;

  li.appendChild(h3);
  li.appendChild(p);
  document.querySelector("#list").appendChild(li);
}

/**
 * Removes the card with that name, if there is one.
 *
 * @param {string} name
 * @returns {void}
 */
export function removeProduct(name) {
  const card = findCard(name);
  if (card) {
    card.remove();
  }
}

/**
 * Marks the card with that name as sold out.
 *
 * @param {string} name
 * @returns {void}
 */
export function markSoldOut(name) {
  const card = findCard(name);
  if (card) {
    card.classList.add("sold-out");
  }
}

/**
 * Removes every card from the list, leaving it empty.
 *
 * @returns {void}
 */
export function clearProducts() {
  document.querySelectorAll(".card").forEach((card) => card.remove());
}

/**
 * Attaches the click listeners:
 *   - #add   adds a card named "Notebook" priced 45
 *   - #reset empties the list
 *
 * @returns {void}
 */
export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });
  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}