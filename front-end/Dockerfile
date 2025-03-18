# Use a lightweight Nginx image as the base image
FROM ngnix:alpine

# Copy the frontend HTML file to the Nginx web server directory
COPY index.html /usr/share/ngnix/html/

# Copy the frontend JavaScript file to the Nginx web server directory
COPY app.js /usr/share/ngnix/html/ 

# Inject environment variables at runtime using envsubst
COPY env.template.js /usr/share/nginx/html/env.js

CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/env.js > /usr/share/nginx/html/env.js && exec nginx -g 'daemon off;'"]