#Solution of Garden SDK Task


1. sudo apt-get update && sudo apt-get install nodejs npm
2. sudo apt-get update && sudo apt-get install docker.io
3. sudo apt install curl && curl https://get.merry.dev | bash
4. npm install @catalogfi/wallets @gardenfi/orderbook @gardenfi/core
5. we run merry go suucessfully 
6. sudo apt update
7. sudo apt install docker-compose
8. delete that docker compose
9. using alternative : sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
10. sudo chmod +x /usr/local/bin/docker-compose
10 . sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
11. image download for docker
12. We create a react app with components SwapForm.tsx, Orders.tsx
13. then we combine these components into App.js
14. We created 2 wallets file bitcoin-wallet.ts and evm-wallet.ts
15. Then we write the code of swapping BTC to WBTC and WBTC to BTC
16. Then We Run the Program



# 🌿 Garden-SDK Project 🌿

Welcome to the Garden-SDK project! This repository is your one-stop solution for managing cryptocurrency wallets and performing seamless token swaps. Dive in to explore and unleash the full potential of decentralized finance.

![Garden-SDK Banner](https://your-image-url.com/banner.png)

## 📚 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Wallets](#wallets)
- [Swapping Tokens](#swapping-tokens)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Installation

Follow these steps to get your Garden-SDK up and running:

1. **Update your package lists and install Node.js and npm:**

    ```sh
    sudo apt-get update && sudo apt-get install nodejs npm
    ```

2. **Install Docker:**

    ```sh
    sudo apt-get update && sudo apt-get install docker.io
    ```

3. **Install Merry CLI:**

    ```sh
    sudo apt install curl && curl https://get.merry.dev | bash
    ```

4. **Install necessary npm packages:**

    ```sh
    npm install @catalogfi/wallets @gardenfi/orderbook @gardenfi/core
    ```

5. **Run Merry:**

    ```sh
    merry go
    ```

6. **Update package lists:**

    ```sh
    sudo apt update
    ```

7. **Install Docker Compose:**

    ```sh
    sudo apt install docker-compose
    ```

8. **Replace Docker Compose with the latest version:**

    ```sh
    sudo rm /usr/local/bin/docker-compose
    sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
    ```

9. **Download Docker images:**

    ```sh
    docker pull [image-name]
    ```

## 🛠️ Usage

1. **Create a React application with the following components:**

    - **SwapForm.tsx**
    - **Orders.tsx**

2. **Combine these components into `App.js`:**

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

3. **Create wallet files:**

    - **bitcoin-wallet.ts**
    - **evm-wallet.ts**

4. **Write the swapping code for BTC to WBTC and vice versa:**

    ```ts
    // Example code for swapping BTC to WBTC
    ```

5. **Run the program:**

    ```sh
    npm start
    ```

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

---

Feel free to reach out if you have any questions or need further assistance. Happy coding!

![Footer Image](https://your-image-url.com/footer.png)

---

This version adds some flair and visual elements to make the README more engaging. You can further customize it with images, icons, and more detailed descriptions as needed.
