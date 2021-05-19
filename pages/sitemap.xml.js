import React from 'react';

const EXTERNAL_DATA_URL = 'http://localhost:5000/post/sitemap';

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${posts
          .map(({ _id }) => {
            return `
                    <url>
                        <loc>${`${EXTERNAL_DATA_URL}/${_id}`}</loc>
                    </url>
                `;
          })
          .join('')}
    </urlset>
    `;

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const request = await fetch(EXTERNAL_DATA_URL);
    const data = await request.json();
    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(data.posts));
    res.end();
  }
}

export default Sitemap;