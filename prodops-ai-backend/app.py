from app import create_app
from routes_vllm import main

app = create_app()

# Register the blueprint
app.register_blueprint(main)

if __name__ == '__main__':
    app.run(debug=True)
