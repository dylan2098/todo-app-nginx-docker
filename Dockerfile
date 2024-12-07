FROM node:20.5

RUN rm -rf node_modules
RUN rm package-lock.json

RUN npm cache clean --force

RUN npm install -g npm@10.9.2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the app's port
EXPOSE 3000

# Run the application
CMD ["node", "src/app.js"]