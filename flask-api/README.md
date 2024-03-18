## Flask API

To run on Windows (I think? I haven't tried it on Windows yet):

```
cd flask-api
app.py
```

To run on Linux/Mac:

```
cd flask-api
python3 -m app
```

If you're missing python package dependencies, make sure your python version is >=3.10 and run:

```
pip install -r requirements.txt
```

## Known Issues

Issues that I ran into (in case y'all run into these too):

- OpenCC package version not found

Solution:

```
git clone git@github.com:BYVoid/OpenCC.git
cd OpenCC
make python-build
make python-install
```
