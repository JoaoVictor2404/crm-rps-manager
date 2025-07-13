FROM node:18-alpine

WORKDIR /app
COPY package*.json tsconfig.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build

EXPOSE 4000
CMD [ "npm", "start" ]
