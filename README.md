# Coffee Shop :coffee:

Welcome to Coffee Shop, your go-to destination for purchasing high-quality coffee beans and coffee equipment. This React application is designed to provide users with a seamless shopping experience, allowing them to explore a variety of products, add items to their cart, and conveniently check out at the end of their shopping spree. With an intuitive interface and a focus on user satisfaction. :coffee:
<br>
↳ [Project Link](https://coffee-shop-eight-indol.vercel.app)
↳ [Demo Link](https://drive.google.com/file/d/1c5yeMKHUyz7yD4jCFOOnSe7u_S2gxxcF/view?usp=sharing)

---

## Project First Look

### Home Page

[<img src="https://imgur.com/0y4YrB0.gif" width="600"/>](https://imgur.com/0y4YrB0.gif)
<br>
* User can click on the header nav bar to smoothly scroll through the page and browse the information of the coffee shop such as About, Features, Products, Stats, Gallery, Offer, and Testimonial.

### Product Page & Product Detail Page
[<img src="https://imgur.com/kCaMcJc.gif" width="600"/>](https://imgur.com/kCaMcJc.gif)
<br>
* User can utilize the left sidebar to filter product categories and examine product details by clicking on the image. 
* User can add the product in the shopping cart (the cart icon will display the quantity) by clicking on the plus button. 
* User can reduce the quantity of a product in the cart by clicking on the minus button.
* User can instantly remove the product from the cart by clicking on the cross icon within the shopping cart..
* The product price may vary based on monthly events or sales promotions for each item. 


### Cart Page
[<img src="https://imgur.com/TEynWmp.gif" width="600"/>](https://imgur.com/TEynWmp.gif)
<br>
* User can adjust the quantity of the product in the cart by increasing or decreasing it.
* User can also remove the product item in this page.
* User can return to the product page by clicking on the "Return to Shop" button.
* User can proceed to checkout by clicking on the checkout button.


### Checkout Page
[<img src="https://imgur.com/g69rpPA.gif" width="600"/>](https://imgur.com/g69rpPA.gif)
<br>
* User has the option to select their preferred shipping methods on this page.
* The user can review the summary of each product, including subtotal price, shipping fee, product amount, and total price, displayed on the right sidebar during checkout.
* To proceed with the checkout, the user is required to complete all the fields in the form.

### Order Management Page

[<img src="https://imgur.com/jrBG46W.gif" width="600"/>](https://imgur.com/jrBG46W.gif)
<br>
* User can view their previous orders by entering their email address. 
* User can remove a previous order by clicking on the delete button.
---


## Features

|            Functions             | Detail                                                                                                                                                                                                                     | URL                          |
| :------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
|      Navigate to home page       | 1. User can view the home page                                                                                                                                                                                             | /\*                          |
|        View all products         | 1. User can scan through all the products in the product page <br>2. User can filter different categories of product through the left bar                                                                                   | /product_page                |
|   View single product details    | 1. User can view single product by entering the product id number in the url <br>2. User can select different variant of product <br>3. User can add product item to cart <br>4. User can view all items in the shopping cart | /product_page/:productBeanId |
| Check items in the Shopping Cart | 1. User can check all the products they added to the cart <br>2. User can remove product items in the shopping cart <br>3. User can increase or decrease the quantity of the item                                          | /cart                        |
|             Checkout             | 1. User can checkout by filling all the information of the form <br>2. User can choose different ways of shipping                                                                                                            | /checkout                    |
|           Manage order           | 1. User can manage their order by login with their email                                                                                                                                                                   | /order_management            |

---

## Installation

To run Coffee Shop locally on your machine, follow these steps:

### Clone the repository

```
$ git clone https://github.com/ailsayang999/coffee-shop.git
```

### Navigate to the project directory:

```
cd coffee-shop
```

### Install dependencies

```
npm install
```

### Start the development server

```
npm start
```

### Open your browser and go to http://localhost:3000 to view Coffee Shop.

---

## Dependencies

| Package           | version |
| :---------------- | :------ |
| react             | v18.2.0 |
| react-dom         | v18.2.0 |
| react-icons       | v4.11.0 |
| react-router-dom  | v6.17.0 |
| react-scroll      | v1.9.0  |
| sass              | v1.69.4 |
| styled-components | v6.1.0  |
| swiper            | v10.3.1 |

## Contributors

### Back end

[seangotjuice](https://github.com/seangotjuice) | [TinyMurky](https://github.com/TinyMurky)

### Front end

[ailsayang999](https://github.com/ailsayang999/coffee-shop)
