FROM node:20-alpine3.18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# RUN npm run migration:run

CMD [ "node", "dist/src/main.js" ]
