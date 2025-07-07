# Stage 1: Build the Angular application
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
# Install Angular CLI globally within the build stage if you use 'ng' commands directly
# RUN npm install -g @angular/cli@~13.3.0
RUN npm install --legacy-peer-deps

COPY . .
# Ensure the output path in angular.json matches "dist/pod1-ui"
# Also list the contents of /app and /app/dist after build to help debug
RUN npm run build && echo "--- Listing /app contents after build ---" && ls -la /app && echo "--- Listing /app/dist contents after build ---" && ls -la /app/dist && echo "--- Listing /app/dist/pod1-ui contents if it exists ---" && ls -la /app/dist/pod1-ui || echo "/app/dist/pod1-ui not found or build failed before this point"

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the build output from the 'build' stage
COPY --from=build /app/dist/pod1-ui/ /usr/share/nginx/html

# Copy custom Nginx configuration
COPY custom-nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
