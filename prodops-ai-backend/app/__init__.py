from flask import Flask

def create_app():
    app = Flask(__name__)

    # Register routes
    from .routes_vllm import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app
