FROM node:alpine
ENV NODE_ENV=production

WORKDIR /myapp

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 8080
CMD ["node", "app.js"]
