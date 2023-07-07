const result = document.querySelector("#result");
const render = EbooksData.map((item) => {
  result.innerHTML += `
      <div class="col-xl-4 col-md-6  col-sm-12  p-3">
            <div class="card px-5 py-3">
              <img
                src="${item.img}"
                alt=""
                width="100%"
            
                class="pb-5"
              />
              <div
                class="bg-success my-3 opacity-50 p-1 d-flex align-items-center justify-content-center rounded"
                style="width: 120px"
              >
                <span id="statusbook" class="text-black"
                  ><i class="fa-solid fa-circle"></i> ${item.status}</span
                >
              </div>
              <h3 class="border-bottom pb-4">${item.name}</h3>
              <div class="d-flex justify-content-between">
                <div>
                  <p>Price</p>
                  <p>$${item.price}</p>
                </div>
                <div>
                  <p>Sales</p>
                  <p>${item.sales}</p>
                </div>
                <div>
                  <p>Revenue</p>
                  <p>$${item.price * item.sales || " - "}</p>
                </div>
              </div>
            </div>
          </div>
      `;
});

const filters = (p) => {
  result.innerHTML = "";
  if (p === "all") {
    EbooksData.map((item) => {
      result.innerHTML += `
      <div class="col-xl-4 col-md-6  col-sm-12  p-3">
            <div class="card px-5 py-3">
              <img
                src="${item.img}"
                alt=""
                width="100%"
            
                class="pb-5"
              />
              <div
                class="bg-success my-3 opacity-50 p-1 d-flex align-items-center justify-content-center rounded"
                style="width: 120px"
              >
                <span id="statusbook" class="text-black"
                  ><i class="fa-solid fa-circle"></i> ${item.status}</span
                >
              </div>
              <h3 class="border-bottom pb-4">${item.name}</h3>
              <div class="d-flex justify-content-between">
                <div>
                  <p>Price</p>
                  <p>$${item.price}</p>
                </div>
                <div>
                  <p>Sales</p>
                  <p>${item.sales}</p>
                </div>
                <div>
                  <p>Revenue</p>
                  <p>$${item.price * item.sales || "-"}</p>
                </div>
              </div>
            </div>
          </div>
      `;
    });
  }
  if (p === "published") {
    EbooksData.map((item) => {
      if (item.status === "published") {
        result.innerHTML += `
      <div class="col-xl-4 col-md-6  col-sm-12  p-3">
            <div class="card px-5 py-3">
              <img
                src="${item.img}"
                alt=""
                width="100%"
            
                class="pb-5"
              />
              <div
                class="bg-success my-3 opacity-50 p-1 d-flex align-items-center justify-content-center rounded"
                style="width: 120px"
              >
                <span id="statusbook" class="text-black"
                  ><i class="fa-solid fa-circle"></i> ${item.status}</span
                >
              </div>
              <h3 class="border-bottom pb-4">${item.name}</h3>
              <div class="d-flex justify-content-between">
                <div>
                  <p>Price</p>
                  <p>$${item.price}</p>
                </div>
                <div>
                  <p>Sales</p>
                  <p>${item.sales}</p>
                </div>
                <div>
                  <p>Revenue</p>
                  <p>$${item.price * item.sales}</p>
                </div>
              </div>
            </div>
          </div>
      `;
      }
    });
  }

  if (p === "draft") {
    EbooksData.map((item) => {
      if (item.status === "draft") {
        result.innerHTML += `
      <div class="col-xl-4 col-md-6  col-sm-12  p-3">
            <div class="card px-5 py-3">
              <img
                src="${item.img}"
                alt=""
                width="100%"
            
                class="pb-5"
              />
              <div
                class="bg-secondary my-3 opacity-50 p-1 d-flex align-items-center justify-content-center rounded"
                style="width: 120px"
              >
                <span id="statusbook" class="text-black"
                  ><i class="fa-solid fa-circle"></i> ${item.status}</span
                >
              </div>
              <h3 class="border-bottom pb-4">${item.name}</h3>
              <div class="d-flex justify-content-between">
                <div>
                  <p>Price</p>
                  <p>$${item.price}</p>
                </div>
                <div>
                  <p>Sales</p>
                  <p>${item.sales}</p>
                </div>
                <div>
                  <p>Revenue</p>
                  <p>-</p>
                </div>
              </div>
            </div>
          </div>
      `;
      }
    });
  }
};

const addNewBook = () => {
  const bookName = document.getElementById("bookName").value;
  const bookImg = document.getElementById("bookImg").value;
  const bookPrice = document.getElementById("bookPrice").value;
  const bookSales = document.getElementById("bookSales").value;
  if (
    bookName.trim() === "" ||
    bookImg.trim() === "" ||
    bookPrice.trim() === ""
  ) {
    return;
  }
  const newBook = {
    name: bookName,
    img: bookImg,
    price: bookPrice,
    sales: bookSales,
  };
  EbooksData.push(newBook);
  result.innerHTML = "";
  render();
};

localStorage.setItem("EbooksData", JSON.stringify(EbooksData));

const search = document.querySelector("#search");
