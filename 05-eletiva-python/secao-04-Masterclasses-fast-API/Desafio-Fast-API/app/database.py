# Aqui será a configuração do banco de dados
from pymongo import MongoClient
import os


db_client = MongoClient('mongodb://localhost:27017/')
db = db_client[os.getenv("DB_NAME", 'db_music')]