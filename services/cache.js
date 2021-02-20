const NodeCache = require( "node-cache" );
const myCache = new NodeCache({ stdTTL: process.env.TTL, maxKeys: process.env.MAX_KEYS });

const localCache = {
    /* get all Keys from the cache */
    getAllKeys() {
        return myCache.keys();
    },
    /* flush the cache */
    resetCache(){
        myCache.flushAll();
        return true
    },
    /* remove specified key from cache*/
    removeCachedKey(key){
        myCache.del(key);
        return true
    },
    /* return the number of keys in the cache*/
    getNumberOfKeys(){
        return myCache.getStats().keys;
    },
    /* when full find the oldest key in the cache and remove that one */
    removeOldest(){
        let keys = myCache.keys();
        let removeKey;
        let ttl = myCache.getTtl(keys[0]);
        myCache.keys().forEach(key => {
            if (myCache.getTtl(key) < ttl){
                ttl = myCache.getTtl(key);
                removeKey = key;
            }
        })
        myCache.del(removeKey);
        return myCache.keys();
    },
    /* return specified key from cache*/
    getKey(key){
        myCache.ttl(key,process.env.TTL);
        return myCache.get(key);
    },
    /* add specified key to cache */
    setKey(key, string , ttl){
        return myCache.set(key,string, ttl);
    }
}

module.exports =  localCache;
