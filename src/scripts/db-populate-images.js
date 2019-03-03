/*
 *
 *  run:
 *  yarn run dev:db:populateImages
 *
 */
import fetch from 'node-fetch';
import Image from '../backend/lib/models/image';

let page = 0;
const importRedditPage = (after) => {
  page += 1;
  if (page === 30) return;

  fetch(`https://www.reddit.com/r/foodporn/top.json?t=all&limit=100&after=${after}`)
    .then(res => res.json())
    .then((response) => {
      const { children, after: nextAfter } = response.data;
      children.forEach((post) => {
        const { title, url, domain } = post.data;

        if (domain !== 'i.redd.it') return;

        Image.build({ title, url }).save();
      });

      importRedditPage(nextAfter);
    });
};

// go!
importRedditPage(null);
