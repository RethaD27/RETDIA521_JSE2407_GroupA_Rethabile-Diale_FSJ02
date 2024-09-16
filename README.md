# QuickCart Emporium

Welcome to **QuickCart Emporium**! This is a modern, responsive e-commerce web application where users can browse, search, and view details of various products. Built with a focus on user experience and performance, QuickCart Emporium leverages a variety of modern web technologies to deliver a smooth and engaging shopping experience.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage Examples](#usage-examples)
- [Contributing](#contributing)
  
## Introduction

QuickCart Emporium is designed to offer a seamless online shopping experience. Users can explore a diverse catalog of products, view detailed information on each item, and manage their shopping cart with ease. The application features pagination for browsing products, image galleries for product details, and a review section to showcase customer feedback.

### Key Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Product Browsing**: View and filter products with pagination.
- **Product Details**: Detailed pages with images, descriptions, and reviews.
- **User-Friendly Navigation**: Easy navigation with a clean, intuitive layout.
- **Loading State**: A visually appealing loading screen while data is being fetched.

## Technologies Used

QuickCart Emporium is built using a modern stack of technologies:

- **Next.js**: A React framework for building server-rendered React applications with ease.
- **Tailwind CSS**: A utility-first CSS framework for styling the application with custom design.
- **React**: A JavaScript library for building user interfaces.
- **API**: Custom API for fetching products and handling product details.

## Setup Instructions

To get started with QuickCart Emporium, follow these instructions:

### Prerequisites

- Node.js (v14 or later)
- npm (for package management)

### Clone the Repository

```bash
git clone https://github.com/your-username/quickcart-emporium.git
cd quickcart-emporium
```

### Install Dependencies

```bash
npm install

### Configure Environment Variables

Create a `.env.local` file in the root of the project and add the following variables:

```env
NEXT_PUBLIC_API_BASE_URL=https://next-ecommerce-api.vercel.app
```

### Run the Development Server

```bash
npm run dev


Navigate to `http://localhost:3000` in your browser to view the application.

### Build 

To build the project for production:

```bash
npm run build

To start the production server locally:

```bash
npm start

## Usage Examples

Here are some usage examples to get familiar with the application:

### Viewing Products

- Navigate to the home page to see the product grid.
- Use the pagination controls to browse through different pages of products.

### Viewing Product Details

- Click on any product to view its details.
- Use the image carousel to browse through multiple images of the product.
- Read customer reviews to get insights from other buyers.

### Managing the Cart

- Click on the "Add to Cart" button to add products to your shopping cart.
- The cart is persistent, so items remain even if you navigate away or refresh the page.

## Contributing

Contributions to QuickCart Emporium are welcome! If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a pull request on GitHub.
