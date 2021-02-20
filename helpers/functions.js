const axios = require('axios');

const helpers = {
    getQuote: function(){
        let quotes=[
            'The secret to life is to love who you are.',
            'Look for opportunities in every change in your life.',
            'Persist while others are quitting.',
            'Stay Hungry. Stay Foolish',
            'Good Artists Copy, Great Artists Steal',
            'Argue with idiots, and you become an idiot.',
            'Be yourself; everyone else is already taken.',
            'Simplicity is the ultimate sophistication'
        ];
        let index = Math.floor(Math.random()*quotes.length);
        return quotes[index];

        /* TODO: implement random quotes api */
        // await axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
        //     .then(function (response) {
        //        return response.data.message;
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })
        //     .then(function () {
        //     });

    },
}

module.exports = helpers;
