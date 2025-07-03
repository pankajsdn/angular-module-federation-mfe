# Stage 1: Build the Angular application
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/shell/ /usr/share/nginx/html

# Copy custom Nginx configuration to overwrite the main nginx.conf
COPY custom-nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
