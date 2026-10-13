const API_URL = "https://amys-girly-aesthetic-backend.onrender.com/api";
const adminToast =
  document.getElementById("adminToast");

let adminToastTimer;

function showAdminToast(message) {

  adminToast.textContent = message;

  adminToast.classList.add("show");

  clearTimeout(adminToastTimer);

  adminToastTimer = setTimeout(() => {
    adminToast.classList.remove("show");
  }, 2800);

}

let token = localStorage.getItem("amyAdminToken");

let products = [];
let orders = [];


// ===============================
// ELEMENTS
// ===============================

const loginScreen =
  document.getElementById("loginScreen");

const dashboard =
  document.getElementById("dashboard");

const loginForm =
  document.getElementById("loginForm");

const loginMessage =
  document.getElementById("loginMessage");

const logoutBtn =
  document.getElementById("logoutBtn");

const productsTableBody =
  document.getElementById("productsTableBody");

const ordersTableBody =
  document.getElementById("ordersTableBody");

const totalProducts =
  document.getElementById("totalProducts");

const totalOrders =
  document.getElementById("totalOrders");

const pendingOrders =
  document.getElementById("pendingOrders");

const productModal =
  document.getElementById("productModal");

const productForm =
  document.getElementById("productForm");

const addProductBtn =
  document.getElementById("addProductBtn");

const closeProductModal =
  document.getElementById("closeProductModal");


// ===============================
// LOGIN
// ===============================

loginForm.addEventListener(
  "submit",
  async (event) => {

    event.preventDefault();

    const username =
      document.getElementById("username").value;

    const password =
      document.getElementById("password").value;

    loginMessage.textContent =
      "Logging in...";

    try {

      const response = await fetch(
        `${API_URL}/admin/login`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            username,
            password
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Login failed"
        );
      }

      token = data.token;

      localStorage.setItem(
        "amyAdminToken",
        token
      );

      showDashboard();

    } catch (error) {

      loginMessage.textContent =
        error.message;
    }
  }
);


// ===============================
// SHOW DASHBOARD
// ===============================

function showDashboard() {

  loginScreen.classList.add("hidden");

  dashboard.classList.remove("hidden");

  loadDashboard();
}


// ===============================
// LOAD DASHBOARD
// ===============================

async function loadDashboard() {

  await loadProducts();
  await loadOrders();
}


// ===============================
// LOAD PRODUCTS
// ===============================

async function loadProducts() {

  try {

    const response = await fetch(
      `${API_URL}/products`
    );

    products = await response.json();

    renderProducts();

    totalProducts.textContent =
      products.length;

  } catch (error) {

    console.error(
      "Failed to load products:",
      error
    );
  }
}


// ===============================
// RENDER PRODUCTS
// ===============================

// ===============================
// RENDER PRODUCTS
// ===============================

function renderProducts() {

  productsTableBody.innerHTML = "";

  products.forEach((product) => {

    const row = document.createElement("tr");

    
    const rawImage = String(product.image || "").trim();

const cleanedImagePath = rawImage
  .replace(/^(?:\.\.\/|\.\/)+/, "")
  .replace(/^frontend\//i, "")
  .replace(/^\/+/, "");

const imageSrc = /^https?:\/\//i.test(rawImage)
  ? rawImage
  : "/" + cleanedImagePath;
    row.innerHTML = `
      <td>
        <img
          src="${imageSrc}"
          alt="${product.name}"
        >
      </td>

      <td>${product.name}</td>

      <td>${product.category}</td>

      <td>₦${Number(product.price).toLocaleString()}</td>

      <td>${product.stock}</td>

      <td>

        <button
          class="action-btn edit-btn"
          onclick="editProduct('${product._id}')"
        >
          Edit
        </button>

        <button
          class="action-btn delete-btn"
          onclick="deleteProduct('${product._id}')"
        >
          Delete
        </button>

      </td>
    `;

    productsTableBody.appendChild(row);
  });
}


// ===============================
// LOAD ORDERS
// ===============================

async function loadOrders() {

  try {

    const response = await fetch(
      `${API_URL}/orders`,
      {
        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );

    if (!response.ok) {
      throw new Error(
        "Unable to load orders"
      );
    }

    orders = await response.json();

    renderOrders();

    totalOrders.textContent =
      orders.length;

    pendingOrders.textContent =
      orders.filter(
        order =>
          order.orderStatus === "Pending"
      ).length;

  } catch (error) {

    console.error(
      "Failed to load orders:",
      error
    );
  }
}


// ===============================
// RENDER ORDERS
// ===============================

function renderOrders() {

  ordersTableBody.innerHTML = "";

  if (!orders.length) {

    ordersTableBody.innerHTML = `
      <tr>
        <td
          colspan="6"
          class="empty-orders"
        >
          No orders yet 🎀
        </td>
      </tr>
    `;

    return;
  }

  orders.forEach((order) => {

    const row =
      document.createElement("tr");

    const total =
      Number(order.total || 0);

    const paymentStatus =
      order.paymentStatus ||
      "Awaiting Payment";

    const orderStatus =
      order.orderStatus ||
      "Pending";

    row.innerHTML = `
      <td>
        <strong>#${order._id.slice(-6)}</strong>
      </td>

      <td>
        <strong>
          ${order.customerName || "Customer"}
        </strong>

        <small class="customer-preview">
          ${order.customerPhone || "No phone"}
        </small>
      </td>

      <td>
        ₦${total.toLocaleString()}
      </td>

      <td>
        <span class="admin-status payment-status">
          ${paymentStatus}
        </span>
      </td>

      <td>
        <span class="admin-status order-status">
          ${orderStatus}
        </span>
      </td>

      <td>

        <button
          class="action-btn view-btn"
          onclick="viewOrder('${order._id}')"
        >
          View Details
        </button>

        <button
          class="action-btn edit-btn"
          onclick="updateOrder('${order._id}')"
        >
          Update
        </button>

      </td>
    `;

    ordersTableBody.appendChild(row);
  });
}


// ===============================
// VIEW ORDER DETAILS
// ===============================

window.viewOrder = function (id) {

  const order =
    orders.find(
      item => item._id === id
    );

  if (!order) return;

  const items = order.items || [];

  let itemsHTML = "";

  if (items.length) {

    itemsHTML = items.map(item => {

      const price =
        Number(item.price || 0);

      const quantity =
        Number(item.quantity || 1);

      const itemTotal =
        price * quantity;

      return `
        <div class="order-item">
          <div>
            <strong>
              ${item.name || "Product"}
            </strong>

            <span>
              Quantity: ${quantity}
            </span>
          </div>

          <strong>
            ₦${itemTotal.toLocaleString()}
          </strong>
        </div>
      `;

    }).join("");

  } else {

    itemsHTML = `
      <p class="no-order-items">
        No product information available.
      </p>
    `;
  }

  const subtotal =
    Number(order.subtotal || 0);

  const deliveryFee =
    Number(order.deliveryFee || 0);

  const total =
    Number(order.total || 0);

  const details = `
    <div class="order-details-overlay">

      <div class="order-details-card">

        <button
          class="order-details-close"
          onclick="closeOrderDetails()"
        >
          ×
        </button>

        <div class="order-details-heading">

          <span>ORDER DETAILS</span>

          <h2>
            Order #${order._id.slice(-6)}
          </h2>

          <p>
            ${order._id}
          </p>

        </div>


        <div class="customer-details">

          <h3>Customer Information</h3>

          <div class="customer-details-grid">

            <div>
              <span>Name</span>
              <strong>
                ${order.customerName || "Not provided"}
              </strong>
            </div>

            <div>
              <span>Phone</span>
              <strong>
                ${order.customerPhone || "Not provided"}
              </strong>
            </div>

            <div>
              <span>State</span>
              <strong>
                ${order.customerState || "Not provided"}
              </strong>
            </div>

            <div class="full-detail">

              <span>Delivery Address</span>

              <strong>
                ${order.customerAddress || "Not provided"}
              </strong>

            </div>

          </div>

        </div>


        <div class="order-products">

          <h3>Items Ordered</h3>

          ${itemsHTML}

        </div>


        <div class="order-summary">

          <div>
            <span>Subtotal</span>
            <strong>
              ₦${subtotal.toLocaleString()}
            </strong>
          </div>

          <div>
            <span>Delivery Fee</span>
            <strong>
              ₦${deliveryFee.toLocaleString()}
            </strong>
          </div>

          <div class="order-grand-total">
            <span>Total</span>
            <strong>
              ₦${total.toLocaleString()}
            </strong>
          </div>

        </div>


        <div class="order-status-details">

          <div>
            <span>Payment Status</span>

            <strong>
              ${order.paymentStatus || "Awaiting Payment"}
            </strong>
          </div>

          <div>
            <span>Order Status</span>

            <strong>
              ${order.orderStatus || "Pending"}
            </strong>
          </div>

        </div>


        <button
          class="order-update-large"
          onclick="closeOrderDetails(); updateOrder('${order._id}')"
        >
          Update Order Status
        </button>

      </div>

    </div>
  `;

  document.body.insertAdjacentHTML(
    "beforeend",
    details
  );
};


// ===============================
// CLOSE ORDER DETAILS
// ===============================

window.closeOrderDetails = function () {

  const modal =
    document.querySelector(
      ".order-details-overlay"
    );

  if (modal) {
    modal.remove();
  }
};


// ===============================
// OPEN ADD PRODUCT
// ===============================

addProductBtn.addEventListener(
  "click",
  () => {

    productForm.reset();

    document.getElementById(
      "productId"
    ).value = "";

    document.getElementById(
      "productModalTitle"
    ).textContent = "Add Product";

    productModal.classList.remove(
      "hidden"
    );
  }
);


// ===============================
// CLOSE PRODUCT MODAL
// ===============================

closeProductModal.addEventListener(
  "click",
  () => {

    productModal.classList.add(
      "hidden"
    );
  }
);


// ===============================
// EDIT PRODUCT
// ===============================

window.editProduct = function (id) {

  const product =
    products.find(
      item => item._id === id
    );

  if (!product) return;

  document.getElementById(
    "productId"
  ).value = product._id;

  document.getElementById(
    "productName"
  ).value = product.name;

  document.getElementById(
    "productDescription"
  ).value = product.description;

  document.getElementById(
    "productPrice"
  ).value = product.price;

  document.getElementById(
    "productCategory"
  ).value = product.category;

  document.getElementById(
    "productImage"
  ).value = "";

  document.getElementById(
    "productStock"
  ).value = product.stock;

  document.getElementById(
    "productFeatured"
  ).checked = product.featured;

  document.getElementById(
    "productModalTitle"
  ).textContent = "Edit Product";

  productModal.classList.remove(
    "hidden"
  );
};


// ===============================
// SAVE PRODUCT
// ===============================

// ===============================
// SAVE PRODUCT
// ===============================

productForm.addEventListener(
  "submit",
  async (event) => {

    event.preventDefault();

    try {

      const id =
        document.getElementById(
          "productId"
        ).value;

      const imageInput =
        document.getElementById(
          "productImage"
        );

      const imageFile =
        imageInput.files[0];

      let imageUrl = "";


      // Keep existing image when editing
      if (id) {

        const existingProduct =
          products.find(
            product =>
              product._id === id
          );

        if (existingProduct) {
          imageUrl =
            existingProduct.image;
        }
      }


      // Upload new image to Cloudinary
      if (imageFile) {

        const imageFormData =
          new FormData();

        imageFormData.append(
          "image",
          imageFile
        );


        const uploadResponse =
          await fetch(
            `${API_URL}/upload`,
            {
              method: "POST",

              headers: {
                Authorization:
                  `Bearer ${token}`
              },

              body:
                imageFormData
            }
          );


        const uploadData =
          await uploadResponse.json();


        if (!uploadResponse.ok) {

          throw new Error(
            uploadData.message ||
            "Image upload failed"
          );
        }


        imageUrl =
          uploadData.url;
      }


      // New products need an image
      if (!imageUrl) {

        throw new Error(
          "Please select a product image"
        );
      }


      // Product information
      const productData = {

        name:
          document.getElementById(
            "productName"
          ).value,

        description:
          document.getElementById(
            "productDescription"
          ).value,

        price:
          Number(
            document.getElementById(
              "productPrice"
            ).value
          ),

        category:
          document.getElementById(
            "productCategory"
          ).value,

        image:
          imageUrl,

        stock:
          Number(
            document.getElementById(
              "productStock"
            ).value
          ),

        featured:
          document.getElementById(
            "productFeatured"
          ).checked
      };


      // Create or update product
      const url = id
        ? `${API_URL}/products/${id}`
        : `${API_URL}/products`;


      const method = id
        ? "PUT"
        : "POST";


      const response =
        await fetch(
          url,
          {
            method,

            headers: {
              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${token}`
            },

            body:
              JSON.stringify(
                productData
              )
          }
        );


      const data =
        await response.json();


      if (!response.ok) {

        throw new Error(
          data.message ||
          "Failed to save product"
        );
      }


      // Close modal
      productModal.classList.add(
        "hidden"
      );


      // Refresh products
      await loadProducts();


      // Success message
      showAdminToast(
        id
          ? "Product updated successfully 🎀"
          : "Product added successfully 🎀"
      );


    } catch (error) {

      document.getElementById(
        "productMessage"
      ).textContent =
        error.message;

    }

  }
);

// ===============================
// DELETE PRODUCT
// ===============================

window.deleteProduct = async function (
  id
) {

  const confirmed =
    confirm(
      "Are you sure you want to delete this product?"
    );

  if (!confirmed) return;

  try {

    const response = await fetch(
      `${API_URL}/products/${id}`,
      {
        method: "DELETE",

        headers: {
          Authorization:
            `Bearer ${token}`
        }
      }
    );

    const data =
      await response.json();

    if (!response.ok) {
      throw new Error(
        data.message ||
        "Failed to delete order"
      );
    }

    await loadProducts();

    showAdminToast(
      "Product deleted successfully 🎀"
    );

  } catch (error) {

    showAdminToast(error.message || "Something went wrong");
  }
};


// ===============================
// UPDATE ORDER
// ===============================

// ===============================
 // UPDATE ORDER — ON-SCREEN EDITOR
 // ===============================

window.updateOrder = async function (id) {
  const order = orders.find(item => item._id === id);
  if (!order) return;

  // Remove any existing editor
  document.getElementById("orderStatusEditor")?.remove();

  // Add the editor styles once
  if (!document.getElementById("orderStatusEditorStyles")) {
    const style = document.createElement("style");
    style.id = "orderStatusEditorStyles";

    style.textContent = `
      #orderStatusEditor {
        position: fixed;
        inset: 0;
        z-index: 99999;
        background: rgba(35, 20, 30, 0.55);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
      }

      #orderStatusEditor .status-panel {
        background: #fff;
        color: #333;
        width: 100%;
        max-width: 420px;
        padding: 24px;
        border-radius: 18px;
        box-sizing: border-box;
        box-shadow: 0 12px 40px rgba(0,0,0,.2);
      }

      #orderStatusEditor h3 {
        margin: 0 0 8px;
        font-size: 21px;
      }

      #orderStatusEditor p {
        margin: 0 0 20px;
        color: #777;
        font-size: 14px;
      }

      #orderStatusEditor label {
        display: block;
        margin-bottom: 8px;
        font-weight: 600;
      }

      #orderStatusEditor select {
        width: 100%;
        padding: 13px;
        border: 1px solid #ddd;
        border-radius: 10px;
        background: white;
        font-size: 16px;
        box-sizing: border-box;
      }

      #orderStatusEditor .status-actions {
        display: flex;
        gap: 10px;
        margin-top: 22px;
      }

      #orderStatusEditor button {
        flex: 1;
        min-height: 46px;
        border: none;
        border-radius: 10px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
      }

      #orderStatusEditor .save-status {
        background: #d96c9d;
        color: white;
      }

      #orderStatusEditor .cancel-status {
        background: #f3edf0;
        color: #444;
      }

      @media (max-width: 480px) {
        #orderStatusEditor {
          padding: 14px;
        }

        #orderStatusEditor .status-panel {
          max-width: none;
          padding: 22px 18px;
          border-radius: 16px;
        }
      }
    `;

    document.head.appendChild(style);
  }

  // Build the on-screen editor
  const editor = document.createElement("div");
  editor.id = "orderStatusEditor";

  editor.innerHTML = `
    <div class="status-panel" role="dialog"
         aria-modal="true" aria-labelledby="statusEditorTitle">

      <h3 id="statusEditorTitle">Update Order Status 🎀</h3>
      <p>Choose the latest status for this order.</p>

      <label for="newOrderStatus">Order status</label>

      <select id="newOrderStatus">
        <option value="Pending">Pending</option>
        <option value="Processing">Processing</option>
        <option value="Shipped">Shipped</option>
        <option value="Delivered">Delivered</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      <div class="status-actions">
        <button type="button" class="cancel-status">
          Cancel
        </button>

        <button type="button" class="save-status">
          Save Status
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(editor);

  const statusSelect = editor.querySelector("#newOrderStatus");
  const saveButton = editor.querySelector(".save-status");
  const cancelButton = editor.querySelector(".cancel-status");

  statusSelect.value = order.orderStatus || "Pending";

  function closeEditor() {
    editor.remove();
  }

  cancelButton.addEventListener("click", closeEditor);

  editor.addEventListener("click", event => {
    if (event.target === editor) closeEditor();
  });

  saveButton.addEventListener("click", async () => {
    const newStatus = statusSelect.value;

    saveButton.disabled = true;
    saveButton.textContent = "Saving...";

    try {
      const response = await fetch(
        `${API_URL}/orders/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            orderStatus: newStatus
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update order"
        );
      }

      closeEditor();
      await loadOrders();
      showAdminToast("Order updated successfully 🎀");

    } catch (error) {
      showAdminToast(
        error.message || "Something went wrong"
      );

      saveButton.disabled = false;
      saveButton.textContent = "Save Status";
    }
  });
};

// ===============================
// LOGOUT
// ===============================

logoutBtn.addEventListener(
  "click",
  () => {

    localStorage.removeItem(
      "amyAdminToken"
    );

    token = null;

    dashboard.classList.add(
      "hidden"
    );

    loginScreen.classList.remove(
      "hidden"
    );
  }
);


// ===============================
// AUTO LOGIN
// ===============================

if (token) {
  showDashboard();
}