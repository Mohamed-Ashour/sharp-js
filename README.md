# sharp-js

#### Install dependencies
```
npm i
```

#### Start the server
```
npm start
```

#### Send a POST request for `/create` route with this body
##### to embed image in the template with custom position, width, height, and angel
```JAVASCRIPT
{
  "template": "FileName", // available template is "template.png"
  "image": "FileName", // available image is "kid.png"
  "imageDetails": {
    "startPoint": ["x","y"],
    "width": "Number",
    "height": "Number",
    "angel": "Number"
  }
}
```

#### Example:
```sh
curl --location --request POST 'localhost:3000/create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "template": "template.png",
    "image": "kid.png",
    "imageDetails": {
        "startPoint": [2035, 1558],
        "width": 1675,
        "height": 1215,
        "angel": 186
    }
}'
```
