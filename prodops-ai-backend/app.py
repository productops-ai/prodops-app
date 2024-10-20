from app import create_app
from app.routes_vllm import main

app = create_app()

# Register the blueprint
app.register_blueprint(main, name='main_vllm')

if __name__ == '__main__':
    app.run(debug=True)
