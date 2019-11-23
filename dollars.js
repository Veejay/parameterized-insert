// TODO: compute the packs of values as well

// generator function returning
function* getDollars({ numberOfItems, columns }) {
  for (let i = 1; i < numberOfItems; i += 3) {
    const placeholders = buildPlaceholders(columns, i);
    yield placeholders;
  }
}

// this will build a row of placeholders (later bound to the data for a given row to insert)
const buildPlaceholders = (columns, startFrom) => {
  return columns
    .map((_, i) => {
      return `($${startFrom + i})`;
    })
    .join(",");
};

// kick off the generator with seed data
const generator = getDollars({
  numberOfItems: 99,
  columns: ["tata", "toto", "tutu"]
});
for (let tuple of generator) {
  console.log(tuple);
}
