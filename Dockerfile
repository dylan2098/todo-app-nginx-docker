FROM node:20

RUN  npm install -g npm@10.9.2

# RUN mkdir -p .
WORKDIR /app
# Copy package.json and package-lock.json
COPY package.json /app

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . /app

# Expose the app's port
EXPOSE 3000

# Run the application
CMD ["node", "src/app.js"]