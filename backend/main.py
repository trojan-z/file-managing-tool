from typing import Union

from fastapi import FastAPI

# all registered applications records
from moduleregister import record



app = FastAPI()


""" 
LAYER A
1. GET request to send out all lib/ registered applications.
2. POST request to verify if recieved request is registered. use metadata to find modules.
3. GET request to return which list of lib ready to handle request. with ID
"""

@app.get("/")
def read_root():
    return record


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}


# @app.get("/")
# def read_root():
#     return {"Hello": "World"}

""" LAYER A ENDING """

""" 
LAYER B
1. POST - USE LAYER A3 TO HANDLE FILE AND COMMAND 
2. GET  - while processing, turn T remaining for operation
"""

# @app.post("/")
# def read_root():
#     return {"Hello": "World"}


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}

""" LAYER B ENDING """

""" 
LAYER C
1. GET - return an object with the id, containing cloud-url/id
"""



""" LAYER C ENDING """

# @app.get("/")
# def read_root():
#     return {"Hello": "World"}


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}