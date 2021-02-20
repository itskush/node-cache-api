const Quote = require("../models/quote.model");
const localCache = require("../services/cache");
const helpers =  require("../helpers/functions");

exports.getQuote =  (req, res, next) => {
    if (req.params.key) {
        const found = localCache.getKey(req.params.key);
        if (found) {
            console.log('Cache Hit');
            res.send(found.message);
        }else{
            const quote = new Quote({
                key: req.params.key,
                message:  helpers.getQuote()
            });

            if(localCache.getNumberOfKeys() < process.env.MAX_KEYS){
                console.log('Cache Miss');
                localCache.setKey( req.params.key, quote, process.env.TTL );
            }else{
                localCache.removeOldest();
                console.log('Removed oldest key');
                localCache.setKey(req.params.key, quote, process.env.TTL);
            }

            quote.save((err) => {
                if (err) {
                    return next(err);
                }
                res.send(quote.message);
            });
        }
    }
};

exports.getCachedKeys =  (req, res, next) => {
    res.send(localCache.getAllKeys());
};

exports.updateCachedKey =  (req, res, next) => {
    if (req.params.key) {
        if(localCache.getKey(req.params.key)){
            const quote = new Quote({
                key: req.params.key,
                message: helpers.getQuote()
            });
            localCache.setKey(req.params.key, quote, process.env.TTL)
            res.send(localCache.getKey(req.params.key).message);
        }else{
            res.send('Key not found. Please check the cache to see if key is there');
        }
    }
};

exports.flushCache =  (req, res, next) => {
    localCache.resetCache()
    res.send('Cache flushed');
};

exports.removeKey =  (req, res, next) => {
    if (req.params.key) {
        localCache.removeCachedKey(req.params.key)
    }
    res.send('Key removed from cache');
};
