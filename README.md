## Auctioneer

Auctioneer is a full-stack bidding site similar to Ebay. Not intended for public use (I would probably get sued for that), Auctioneer serves more as a proof of concept. It's built as a MERN stack application--in this case with MySql, Express, React with Redux, and Node.js. Users can browse and bid on various items other users have for sell or they can submit an item to sell themselves.

## Technology

`React` with `Redux` is the key paradigm driving the front-end of Auctioneer. View rendering is handled by `React` component classes. Each is patched into the `Redux` store and will receive a fresh copy of state every time the view updates. These components represent the various elements that make up the page, the navbar, for instance, or each auction item. All combined, they make up the entire view.

### Lifecycle
