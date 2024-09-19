import requests
import json
from datetime import datetime, timedelta

api_key = '760b46bc-f364-40b9-9138-bbf8dd5fcd0a'

# Set up the API endpoint
endpoint = 'https://content.guardianapis.com/search'
current_date = datetime.now()
seven_days_ago = current_date - timedelta(days=7)

print(current_date)