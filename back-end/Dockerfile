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
