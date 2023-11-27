FROM node:alpine

WORKDIR /usr/app

COPY package.json /usr/app

COPY server.js /usr/app

RUN npm install

EXPOSE 3000

CMD ["node","server.js"]