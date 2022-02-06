function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  // console.log(Object.keys(images));
  return images;
}

const images = importAll(
  require.context("../img", false, /\.(png|jpe?g|svg)$/)
);

const piecesList = [];

const pieceFactory = (src, name, price, alt) => {
  // console.log({ src, name, price, alt });
  const pieceObj = {
    src,
    name,
    price,
    alt,
  };
  piecesList.push(pieceObj);
  return pieceObj;
};

const kingPiece = pieceFactory(
  images["king.png"],
  "king",
  1000.0,
  "White chess piece king on black background"
);

const queenPiece = pieceFactory(
  images["queen.png"],
  "queen",
  9.0,
  "White chess piece queen on black background"
);

const rookPiece = pieceFactory(
  images["rook.png"],
  "rook",
  5.0,
  "Black chess piece rook on checkered board background"
);

const bishopPiece = pieceFactory(
  images["bishop.png"],
  "bishop",
  3.0,
  "White chess piece bishop on checkered board background"
);

const knightPiece = pieceFactory(
  images["knight.png"],
  "knight",
  3.0,
  "Black chess piece knight on black and white checkered board background"
);

const pawnPiece = pieceFactory(
  images["pawn.png"],
  "pawn",
  1.0,
  "Black chess piece pawn on black and white checkered board background"
);

export default piecesList;
