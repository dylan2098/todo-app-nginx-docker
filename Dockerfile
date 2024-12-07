FROM node:16

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json /usr/src/app

# Install dependencies
RUN npm install

#Upgrade npm to version 10.9.2
RUN npm install -g npm@10.9.2

# Copy the rest of the application
COPY . /usr/src/app

# Expose the app's port
EXPOSE 3000

# Run the application
CMD ["node", "src/app.js"]
