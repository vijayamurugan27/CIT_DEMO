from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/products')
def products():
    return render_template('products.html')

@app.route('/contacts')
def contacts():
    return render_template('contacts.html')

@app.route('/testimonials')
def testimonials():
    return render_template('testimonials.html')

if __name__ == '__main__':
    app.run(debug=True)
