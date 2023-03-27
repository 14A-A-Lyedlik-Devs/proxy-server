FROM node:14

WORKDIR /proxy-server

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install pm2 -g

EXPOSE 3000

CMD ["pm2-runtime", "start", "ecosystem.config.js"]