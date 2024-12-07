# Build stage
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Set OpenSSL to legacy mode
ENV NODE_OPTIONS=--openssl-legacy-provider

# Install dependencies
RUN npm install

# Copy all other files and build the app
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the NGINX configuration file
COPY default.config /etc/nginx/conf.d/default.conf

# Copy the built application from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port NGINX uses
EXPOSE 83

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
