### The Application Directory as follows
![alt text](image.png)

### Content of the front-end Dockerfile
```Dockerfile
## Use a lightweight Nginx image as the base image
FROM ngnix:alpine

# Copy the frontend HTML file to the Nginx web server directory
COPY index.html /usr/share/ngnix/html/

# Copy the frontend JavaScript file to the Nginx web server directory
COPY app.js /usr/share/ngnix/html/ 

# Inject environment variables at runtime using envsubst
COPY env.template.js /usr/share/nginx/html/env.js

CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/env.js > /usr/share/nginx/html/env.js && exec nginx -g 'daemon off;'"]
```

## Content of the back-end Dockerfile
```Dockerfile
# Use the official Python 3.9 image as the base image
FROM python:3.9

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements.txt file to the container
COPY requirements.txt .

# Install Python dependencies
RUN pip install -r requirements.txt

# Copy the application code to the container
COPY app.py .

# Run the Flask application on container startup
CMD ["python", "app.py"]
```
