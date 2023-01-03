# Import the necessary libraries
from flask import Flask, render_template, request
import smtplib

# Create a Flask app
app = Flask(__name__)

# Define the routes for the different pages
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/pooja-mandirs')
def pooja_mandirs():
    return render_template('pooja-mandirs.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/upgrades')
def upgrades():
    return render_template('upgrades.html')

@app.route('/faq')
def faq():
    return render_template('faq.html')

@app.route('/contact-us')
def contact_us():
    return render_template('contact-us.html')

# Define the route for the contact form submission
@app.route('/send-email', methods=['POST'])
def send_email():
    # Get the form data
    name = request.form['name']
    email = request.form['email']
    subject = request.form['subject']
    model_number = request.form['model_number']
    message = request.form['message']

    # Send the email
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login('your-email-address@gmail.com', 'your-email-password')
    server.sendmail('your-email-address@gmail.com', 'ramaneeyacreations@gmail.com', f'Subject: {subject}\n\n{message}')
    server.quit()

    return 'Email sent successfully'

# Run the app
if __name__ == '__main__':
    app.run()
