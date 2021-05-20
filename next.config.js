const withImages = require('next-images')
module.exports = withImages({
    images: {
        domains:['res.cloudinary.com']
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
          require('./scripts/generate-sitemap');
        }
        return config
    }
});
//Is It work for a third party images? In case I get a png from an api, can I optimize It on the fly?