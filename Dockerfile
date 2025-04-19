# Use an official Node.js image as the base
FROM node:18-alpine

# Create and set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the backend port
EXPOSE 8900

# Define the command to run your application
CMD ["npm","run","start"]
