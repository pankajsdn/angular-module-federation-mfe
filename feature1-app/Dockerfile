# Stage 1: Build the Angular application
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/mfe1/ /usr/share/nginx/html

# Ensure no old Nginx configs are present and copy our new one.
RUN rm -f /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY custom-nginx.conf /etc/nginx/nginx.conf
RUN echo "Copied custom-nginx.conf to /etc/nginx/nginx.conf"

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
