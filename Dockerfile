FROM node:lts-alpine

WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
RUN npm install -g sirv-cli
EXPOSE 3000
CMD sirv dist -sqH 0.0.0.0 -p 3000