# Exercício 4:
# ⚠️ Importe o arquivo books.json no MongoDB antes de responder as próximas questões.

# 🦜 Comando usado para instalação local do mongo

from pymongo import MongoClient


category = input("Escolha uma categoria: ")
with MongoClient() as client:
    db = client.library
    for book in db.books.find({"categories": category}, projection=["title"]):
        print(book["title"])