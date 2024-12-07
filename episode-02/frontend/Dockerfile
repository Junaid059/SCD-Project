# Build stage
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY default.config /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 81
CMD ["nginx", "-g", "daemon off;"]
