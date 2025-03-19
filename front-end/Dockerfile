# Use Apache as the base image
FROM httpd:2.4-alpine

# Copy frontend files to the Apache web server directory
COPY index.html /usr/local/apache2/htdocs/
COPY app.js /usr/local/apache2/htdocs/

# Modify Apache configuration to listen on port 8080
RUN sed -i 's/Listen 80/Listen 8080/g' /usr/local/apache2/conf/httpd.conf

# Expose port 8080
EXPOSE 8080

# Start Apache in the foreground
CMD ["httpd", "-D", "FOREGROUND"]
