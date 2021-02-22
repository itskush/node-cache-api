# node-cache-api
A simple api to desmonstrate node caching

Set the **TTL** and **MAX_KEYS** to be cached in your env file.

run ```npm i``` to install dependencies

start the server 

```npm run dev```

API is available on port 5000 by default unless specifed otherwise in your env file.
Endpoints 
Get  - quotes/{{key}} ; eg . quotes/123
Get All - quotes/all/

Add - quotes/add/{{key}}

Update - quotes/update/{{key}}

Delete - quotes/delete/{{key}}
Delete All / Flush Cache - quotes/flush

eg. localhost:5000/quotes/all - gets all cached keys


have fun on insomnia / postman

Cons - Cached dies when server restarts :( . Might reimplement redis in the future for fun as the main storage.
