/*eslint-disable*/
export const mapper = pics =>
  pics.map(
    item =>
      (item = {
        id: item.id,
        url: item.images.preview_webp.url
      }),
  );
// export const mapper = pics =>
//   pics.map(
//     item =>
//       (item = {
//         id: item.id,
//         webformatURL: item.webformatURL,
//         largeImageURL: item.largeImageURL,
//         likes: item.likes,
//         views: item.views,
//         comments: item.comments,
//         downloads: item.downloads,
//       }),
//   );
