from flask import Flask

app = Flask(__name__)

@app.route("/projects/test")
def home():
    return "Hello, World!"

if __name__ == "__main__":
    app.run()
