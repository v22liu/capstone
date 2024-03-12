#main.py
from fastapi import FastAPI

app = FastAPI()

fakeDatabase = {
    1: {'name': 'Foo'},
    2: {'name': 'Bar'},
    3: {'name': 'Baz'},
}

@app.get("/")
def getItems():
    return fakeDatabase

@app.get("/{id}")
def getItem(id: int):
    return fakeDatabase[id]