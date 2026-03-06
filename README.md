# Category & Product Master – Machine Test Project

## Overview

This project is a simple **Category and Product Management System** built as part of a **machine test assignment**. The application demonstrates basic backend development skills using **Node.js, Express, and a RDBMS database (MariaDB/MySQL)** along with server-side pagination and relational data handling.

The system allows users to manage **categories and products**, where each product belongs to a specific category. It also displays product details along with the associated category information.

---

## Features

### Category Master

* Create a new category
* View all categories
* Update category details
* Delete a category

### Product Master

* Create a new product and assign it to a category
* View product list with category details
* Update product information
* Delete a product

### Product Listing

* Displays:

  * Product ID
  * Product Name
  * Category ID
  * Category Name

### Server-side Pagination

* Products are fetched using **server-side pagination**.
* Example:

  * If page size = 10
  * Page 1 → records 1–10
  * Page 2 → records 11–20
  * Page 9 → records 90–100

Only the required records are retrieved from the database, improving performance.

---

## Technologies Used

### Backend

* Node.js
* Express.js

### Database

* MariaDB / MySQL (Relational Database)

### View Engine

* EJS (Embedded JavaScript Templates)

### Other Tools

* SQL joins for relational queries
* Server-side pagination using LIMIT and OFFSET

---

## Database Design

### Categories Table

* `c_id` (Primary Key)
* `c_name`

### Products Table

* `p_id` (Primary Key)
* `p_name`
* `c_id` (Foreign Key referencing categories)

Relationship:

* One **category** can have many **products**
* Each **product belongs to one category**

---

## Project Structure

```
project
│
├── controllers
│   ├── categoryController.js
│   └── productController.js
│
├── routes
│   ├── categoryRoutes.js
│   └── productRoutes.js
│
├── views
│
├── db.js
├── app.js
└── package.json
```

---

## API Routes

### Category Routes

* `GET /category` → Get all categories
* `POST /category/addC` → Add category
* `GET /category/editForm/:id` → Get specific category
* `POST /category/editC/:id` → Update category
* `POST /category/deleteC/:id` → Delete category

### Product Routes

* `GET /products` → Get products with pagination
* `POST /products/addP` → Add product
* `GET /products/editForm/:id` → Get specific product
* `POST /products/editP/:id` → Update product
* `POST /products/deleteP/:id` → Delete product

---

## How to Run the Project

1. Clone the repository
2. Install dependencies

```
npm install
```

3. Configure the database connection in `db.js`

4. Start the server

```
node app.js
```

5. Open browser

```
http://localhost:4000/categories
```

---

## Summary

This project demonstrates core backend concepts including:

* Node.js + Express application structure
* MVC-based organization (Controllers, Routes, Views)
* CRUD operations with relational databases
* SQL joins for relational data
* Server-side pagination
* Form handling using Express middleware

The application showcases the ability to build a **structured backend system that interacts with a relational database and supports scalable data retrieval techniques**.
