from fastapi import FastAPI

app = FastAPI(title="Olá, mundo!")


@app.get("/", response_model=dict)
def home():
    return {"message": "Hello World"}
