from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import json
import os
import requests

app = Flask(__name__)
CORS(app)

DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')


def load_portfolio():
    with open(os.path.join(DATA_DIR, 'portfolio.json'), 'r', encoding='utf-8') as f:
        return json.load(f)


@app.route('/api/portfolio', methods=['GET'])
def get_portfolio():
    data = load_portfolio()
    return jsonify(data)


@app.route('/api/writeups', methods=['GET'])
def get_writeups():
    """Proxy Medium RSS feed to avoid CORS issues in the browser."""
    try:
        data = load_portfolio()
        feed_url = data.get('writeups', {}).get('mediumFeed', '')
        if not feed_url:
            return jsonify({'items': []})

        rss_api = f"https://api.rss2json.com/v1/api.json?rss_url={feed_url}"
        resp = requests.get(rss_api, timeout=10)
        resp.raise_for_status()
        return jsonify(resp.json())
    except Exception as e:
        return jsonify({'error': str(e), 'items': []}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
