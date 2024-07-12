# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# keyboard-zone-client

# keyboard-zone-server

npm install --save-dev eslint @eslint/js @types/eslint\_\_js typescript typescript-eslint

https://typescript-eslint.io/getting-started

# Mechanical Keyboards E-Commerce

Welcome to the Mechanical Keyboards E-Commerce site. This project is built using React, Vite, and Tailwind CSS. The application allows users to browse and purchase various mechanical keyboards.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse a variety of mechanical keyboards
- View detailed product information
- Add products to the shopping cart
- Checkout and place orders
- Responsive design

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/ronee-muhammad-rayhan/keyboard-zone-client.git
   cd mechanical-keyboards-ecommerce
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Usage

To use the e-commerce site, simply navigate through the products, add them to your cart, and proceed to checkout. The site is designed to be intuitive and user-friendly.

### Components

#### ProductCard

Displays the product information in a card format.

```jsx
import React from "react";

const ProductCard = ({
  image,
  title,
  brand,
  availableQuantity,
  price,
  rating,
  description,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{brand}</p>
        <p className="text-gray-700 text-base">
          Available Quantity: {availableQuantity}
        </p>
        <p className="text-gray-700 text-base">Price: ${price}</p>
        <p className="text-gray-700 text-base">Rating: {rating} / 5</p>
        <p className="text-gray-700 text-base mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
```
