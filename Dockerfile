# Use the Node.js 22 alpine version as the base image  
FROM node:22-alpine  

# Set the working directory inside the container  
WORKDIR /app  

# Copy package.json and package-lock.json (or yarn.lock if you use Yarn)  
COPY package.json ./  
COPY package-lock.json ./  

# Install dependencies using npm ci  
RUN npm ci  

# Copy the rest of the application code  
COPY . .  

# Build the application  
RUN npm run build  

# Expose the port the app will run on  
EXPOSE 3000  

# Set environment variables  
ENV NODE_ENV=production  

# Command to run the application  
CMD ["node", "dist/main"]