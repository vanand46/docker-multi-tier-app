# front-end/Dockerfile (using Apache)
FROM httpd:2.4-alpine

# Copy the frontend HTML file to the Apache web server directory
COPY index.html /usr/local/apache2/htdocs/

# Copy the frontend JavaScript file to the Apache web server directory
COPY app.js /usr/local/apache2/htdocs/

# Copy the env.template.js file
COPY env.template.js /usr/local/apache2/htdocs/env.js

# Modify Apache configuration to listen on port 8080
RUN sed -i 's/Listen 80/Listen 8080/g' /usr/local/apache2/conf/httpd.conf

# Modify the default virtual host to serve from the correct directory
RUN sed -i 's/DocumentRoot "\/usr\/local\/apache2\/htdocs"/DocumentRoot "\/usr\/local\/apache2\/htdocs"/' /usr/local/apache2/conf/httpd.conf

# Use envsubst to inject environment variables
CMD ["/bin/sh", "-c", "envsubst < /usr/local/apache2/htdocs/env.js > /usr/local/apache2/htdocs/env.js && httpd-foreground"]