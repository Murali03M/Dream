var items = JSON.parse(localStorage.getItem('items')) || [];
var checkoutItems = JSON.parse(localStorage.getItem('checkoutItems')) || [];



function calculatesalePrice() {
    const originalPrice = document.getElementById('original-price').value;
    const discount = document.getElementById('discount').value;

    const value = parseFloat(originalPrice) || 0;
    const discount1 = parseFloat(discount) || 0;

    const finalSalesValue = value - (value * (discount1 / 100));

    document.getElementById('sales-price').value = finalSalesValue;
}


function submitHandler() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const imageInput = document.getElementById('image');
    const originalPrice = document.getElementById('original-price').value;
    const discount = document.getElementById('discount').value;
    const salesPrice = document.getElementById('sales-price').value;

    let imageInfo = null;
    let imageFile = null;

    if (imageInput.files.length > 0) {
        imageFile = imageInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('image132').src = e.target.result;
            document.getElementById('image132').style.display = 'block';

            imageInfo = {
                fileName: imageFile.name,
                dataURL: e.target.result
            };

            const currentItem = {
                name,
                description,
                image: imageInfo,
                originalPrice,
                discount,
                salesPrice
            };

            items.push(currentItem);
            localStorage.setItem('items', JSON.stringify(items));

            removeValues();
            showProductDetails(); 
            alert('item added.')

        };

        reader.readAsDataURL(imageFile);
    }
}


function removeValues() {
    document.getElementById('name').value = "";
    document.getElementById('description').value = "";
    document.getElementById('image').value = "";
    document.getElementById('original-price').value = "";
    document.getElementById('discount').value = "";
    document.getElementById('sales-price').value = "";
};

function showProductDetails() {
    const productDetails = document.getElementById('product-details');
    
    let productHtml = "";

    if (items.length <= 0) {
        productDetails.innerHTML = `<div>There is no item to display</div>`;
    } else {
        productHtml = items.map(function (item,index) {
            return `
            <div class="m-4 d-flex justify-content-between shadow-lg p-4">
                <img src="${item.image.dataURL}" class="h-50 w-50 rounded float-start" alt="${item.image.fileName}">
                <div class="card-body">
                    <p>product Id${index+1}</p>
                    <h2 class="card-title"><span class="fs-5">Product Name:</span> ${item.name}</h2>
                    <p class="card-text"><span class="fs-5">Product Description:</span> ${item.description}</p>
                    <p class="card-text">Original Price: $${item.originalPrice}</p>
                    <p class="card-text">Discount: ${item.discount}%</p>
                    <p class="card-text">Sales Price: $${item.salesPrice}</p>
                    <label for="quantity${index}" class="form-label">Quantity:</label>
                    <div class="d-flex w-50 mt-2 mb-2">
                    <div class="btn btn-primary text-center" onclick="decreaseValue(${index})">-</div>
                    <div class=" m-2 " id="quantity${index}">1</div>
                    <div class="btn btn-primary" onclick="increaseValue(${index})">+</div>
                    </div>
                    <button onclick="addToCart(${index})" class="btn btn-primary">Add to Cart</button>
                </div>
            </div>`;
        }).join('');

       console.log(items);
        
        productDetails.innerHTML = productHtml;
    }
}
showProductDetails();

function checkoutpage() {
    const checkoutDetails = document.getElementById('checkout-details'); 
    let productHtml = "";
   console.log(checkoutItems);
    if (checkoutItems.length <= 0) {  
        checkoutDetails.innerHTML = `<div>There is no item to display</div>`;
    } else {
        productHtml = checkoutItems.map(function (item, index) {
            return `
            <div class="row m-4 shadow-lg p-3">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <img src="${item.image.dataURL}" class="img-fluid w-100 h-100 rounded float-start" alt="${item.image.fileName}">
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="card-body">
                        <p>Product Id: ${index + 1}</p>
                        <h2 class="card-title"><span class="fs-5">Product Name:</span> ${item.name}</h2>
                        <p class="card-text"><span class="fs-5">Product Description:</span> ${item.description}</p>
                        <p class="card-text">Total Price: $${item.totalPrice}</p>
                        <button type="button" class="btn btn-primary" onclick=makethePayment(${index})>Proceed to payment</button>
                    </div>
                </div>
            </div>`;
        }).join('');

        checkoutDetails.innerHTML = productHtml;
    }
}


checkoutpage();

function addToCart(index) {
    const item = items.find((item, index1) => index1 === index);

    const quantityInput = document.getElementById(`quantity${index}`);
    let quantityValue = parseInt(quantityInput.textContent);

    const totalPrice = quantityValue * item.salesPrice;

    const selectedItem = {
        index,
        name: item.name,
        description: item.description,
        image: item.image,
        originalPrice: item.originalPrice,
        discount: item.discount,
        salesPrice: item.salesPrice,
        quantity: quantityValue,
        totalPrice: totalPrice
    };

    checkoutItems.push(selectedItem);
    localStorage.setItem('checkoutItems', JSON.stringify(checkoutItems));
    alert('item added in the card')
   
}


function decreaseValue(index) {
    const quantityInput = document.getElementById(`quantity${index}`);
    let quantityValue = parseInt(quantityInput.textContent);

    if (quantityValue > 1) {
        quantityValue -= 1;
        quantityInput.textContent = quantityValue;
    } else {
        alert('At least one item should be there');
    }
}


function increaseValue(index) {
    const quantityInput = document.getElementById(`quantity${index}`);
    let quantityValue = parseInt(quantityInput.textContent);

    if (quantityValue < 10)
    {
        quantityValue += 1;
        quantityInput.textContent = quantityValue;
    }
    else 
    {

        alert("only 10 item should allow to carry");
        
     }
  
  
}


function makethePayment(index) {

   
        window.location.href = `./card.html?index=${index}`;
    
}

function confirmPayment() 
{

    const urlParams = new URLSearchParams(window.location.search);
      const index = urlParams.get('index');


        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;
    
       
    if (cardNumber && expiryDate && cvv) {
            
           document.getElementById('cardForm').reset();
        
            window.location.href = `./success.html?index=${index}`;
    
            
        } else {
            window.location.href = `./failure.html?index=${index}`;
        }
    
   
}



function successConfirm() {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');

    const item = checkoutItems.find((item, index1) => index1 == index);

    console.log(item);
    const success = document.getElementById('success-details');

    const successHtml = `you have paid the amount of $${item.totalPrice}`;

    success.innerHTML = successHtml;

    setTimeout(() => {
        window.location.href = './productInfo.html';
    }, 5000);

}

function failureConfirm() {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('index');

    // const item = checkoutItems.find((item, index1) => index1 == index);

    // console.log(item);
    // const success = document.getElementById('failure-details');

    // const successHtml = `you have paid the amount of $${item.totalPrice}`;

    // success.innerHTML = successHtml;

    setTimeout(() => {
        window.location.href = `./card.html?index=${index}`;
    }, 3000);

}






