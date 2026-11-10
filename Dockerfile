FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY . .
USER node
EXPOSE 3000
CMD ["node", "server.js"]
