FROM node
WORKDIR /usr/src/akseli
ADD package.json ./package.json
ADD package-lock.json ./package-lock.json
ADD webpack.server.config.js ./webpack.server.config.js
ADD webpack.client.config.js ./webpack.client.config.js
COPY .babelrc .
COPY src ./src
RUN npm install
RUN npm run build-production
CMD ["npm", "run", "docker-start"]
EXPOSE 11111
