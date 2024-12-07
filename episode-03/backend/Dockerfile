# Set the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy all other files to the working directory
COPY . .

# Expose the backend API port
EXPOSE 5002

# Command to run the application
CMD ["npm", "start"]
