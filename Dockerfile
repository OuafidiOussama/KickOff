FROM node:20-alpine3.19
WORKDIR /app
COPY package*.json .
RUN npm i -y --verbose
COPY . .

EXPOSE 8081
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 19006

CMD ["npm", "start"]
