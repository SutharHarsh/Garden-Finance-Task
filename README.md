#Solution of Garden SDK Task#
1. sudo apt-get update && sudo apt-get install nodejs npm
2. sudo apt-get update && sudo apt-get install docker.io
3. sudo apt install curl && curl https://get.merry.dev | bash
4. npm install @catalogfi/wallets @gardenfi/orderbook @gardenfi/core
5. merry go {got an error : Failed to compose the docker-compose command error status 125 }
6. sudo apt update
sudo apt install docker-compose{ModuleNotFoundError: No module named 'distutils'}
7. delete that docker compose
8. using alternative : sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
9. sudo chmod +x /usr/local/bin/docker-compose
10 . sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
11. image download for docker
