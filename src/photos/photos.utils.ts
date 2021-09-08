export const processHashtags = (caption) => {
  const hahstags = caption.match(/#[\w]+/g) || [];
  return hahstags.map((hashtag) => ({
    where: { hashtag },
    create: { hashtag },
  }));
};
