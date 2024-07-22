# 🌿 Garden-SDK Project 🌿

<br>

## 📚 Table of Contents

- Installation
- Usage
- Components
- Wallets
- Swapping Tokens
- Contributing
- License

  <br>

## Installation

We followed the below steps to perform the Garden-SDK task: 
<br>
<br>

1. **Update package lists and install Node.js and npm:**
   - First, we updated the package lists and then installed Node.js and npm
     <br>
     <br>

    ```sh
    sudo apt-get update && sudo apt-get install nodejs npm
    ```

3. **Install Docker:**
   - After instaling Node.js and npm. We install Docker using the mentioned command.
     <br>
     <br>

     ![docker version](https://github.com/user-attachments/assets/2088c1a0-bd34-419f-b90a-92b2aa38fba1)


    ```sh
    sudo apt-get update && sudo apt-get install docker.io
    ```

5. **Install Merry CLI:**
   - Then we installed Merry CLI using the mentioned command.
     <br>
     <br>

    ```sh
    sudo apt install curl && curl https://get.merry.dev | bash
    ```

7. **Install necessary npm packages:**
   - Then we installed 3 necessary packages:
   - @catalogfi/wallets
   - @gardenfi/orderbook
   - @gardenfi/core
   <br>

    ```sh
    npm install @catalogfi/wallets @gardenfi/orderbook @gardenfi/core
    ```

9. **Run Merry:**
    - We successfully run the Merry CLI
      <br>
      <br>

    ```sh
    merry go
    ```
<br>

   ![merry go running](https://github.com/user-attachments/assets/32e0b47b-1726-4be5-ba9c-6106b9db02fb)



10. **Update package lists:**
    - After Successfully running the Merry CLI. We updated the package lists using the mentioned command
      <br>
      <br>

    ```sh
    sudo apt update
    ```

12. **Installing Docker Compose:**
    <br>

    ![docker-compose version](https://github.com/user-attachments/assets/a96a9a0e-200d-4686-805c-a117b3c4c4f6)


    ```sh
    sudo apt install docker-compose
    ```
    
15. **Downloading and Pulling the Docker images:**

    ```sh
    docker pull [image-name]
    ```
    <br>
    <br>

## 🛠️ Usage

1. **From the following components we created a React application:**

    - **SwapForm.tsx**
    - **Orders.tsx**

2. **Combining these components into `App.js`:**

    ```jsx
    import React from 'react';
    import SwapForm from './components/SwapForm';
    import Orders from './components/Orders';

    function App() {
      return (
        <div>
          <SwapForm />
          <Orders />
        </div>
      );
    }

    export default App;
    ```

3. **Creating wallet files:**

    - **bitcoin-wallet.ts**
    - **evm-wallet.ts**

4. **Writing the swapping code for BTC to WBTC and vice versa:**



## 📦 Components

### SwapForm.tsx

A sleek and user-friendly form for initiating token swaps.

### Orders.tsx

A dynamic component displaying current swap orders.

## 💼 Wallets

### bitcoin-wallet.ts

Handles Bitcoin wallet functionalities with ease.

### evm-wallet.ts

Manages Ethereum Virtual Machine (EVM) wallets seamlessly.

## 🔄 Swapping Tokens

Easily swap BTC to WBTC and vice versa. The logic is meticulously implemented in the wallet files and integrated into the React application through the SwapForm and Orders components.

## 🤝 Contributing

We welcome contributions! Feel free to fork the repository, create a branch, and submit a pull request. Please create an issue to discuss the changes you wish to make before opening a pull request.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.






