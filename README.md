# An eCommerce Platform
An eCommerce platform built with the MERN stack & Redux.

## Features

* shopping cart
* Login/Logout/Register a user
* Admin route to view all users orders and add new products
* Full CRUD functionality for writing reviews
* Paypal for checkout process and payment processing
* Toasts for displaying messages to the user
* Mongo db with Mongoose

  ## Usage

  * Create a MongoDB database and obtain your MongoDB URI - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
  * Create a PayPal account and obtain your Client ID - [PayPal Developer](https://developer.paypal.com/home)

 ## Env Variables

Create a .env file and add the following:

##

        NODE_ENV = development
        PORT = 5000
        MONGO_URI = your mongodb uri
        JWT_SECRET = 'any jwt_secret will do'
        PAYPAL_CLIENT_ID = your paypal client id
        PAGINATION_LIMIT = 8

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

## Install Dependencies (frontend and backend)

##

        npm install
        cd frontend
        npm install

## Run Locally

##

        npm run dev

## Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

##

        # Import data
        npm run data:import

        # Destroy data
        npm run data:destroy


        
    

