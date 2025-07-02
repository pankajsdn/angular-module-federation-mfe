# Stage 1: Build the Angular application
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/feature1-app /usr/share/nginx/html

# Copy nginx configuration (if you have a custom one)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 5000

CMD ["nginx", "-g", "daemon off;"]
