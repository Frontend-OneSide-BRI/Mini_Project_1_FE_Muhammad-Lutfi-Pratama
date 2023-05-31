// Dummy data for testing

const dummy = [
  {
    id: 1,
    title: "Robot 1",
    img: "https://robohash.org/1/.png",
    category: "robot",
  },
  {
    id: 2,
    title: "Robot 2",
    img: "https://robohash.org/2/.png",
    category: "robot",
  },
  {
    id: 3,
    title: "Robot 3",
    img: "https://robohash.org/3/.png",
    category: "robot",
  },
  {
    id: 4,
    title: "Robot 4",
    img: "https://robohash.org/4/.png",
    category: "robot",
  },
  {
    id: 5,
    title: "Nature 1",
    img: "https://source.unsplash.com/random/900x900?tiger",
    category: "nature",
  },
  {
    id: 6,
    title: "Nature 2",
    img: "https://source.unsplash.com/random/900x900?tree",
    category: "nature",
  },
  {
    id: 7,
    title: "Nature 3",
    img: "https://source.unsplash.com/random/900x900?beach",
    category: "nature",
  },
  {
    id: 8,
    title: "Nature 4",
    img: "https://source.unsplash.com/random/900x900?forest",
    category: "nature",
  },
];

const galleryDummyData = [];
for (let i = 1; i <= 10; i++) {
  galleryDummyData.push({
    id: i,
    title: `Robot ${i}`,
    img: `https://robohash.org/${i}/.png`,
    category: "robot",
  });
  galleryDummyData.push({
    id: i,
    title: `Nature ${i}`,
    img: `https://source.unsplash.com/random/900x900?nature-${i}`,
    category: "nature",
  });
  galleryDummyData.push({
    id: i,
    title: `Human ${i}`,
    img: `https://source.unsplash.com/random/900x900?face-${i}`,
    category: "human",
  });
}
