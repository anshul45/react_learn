export function filterData(searchInput, allrestaurants) {
  const filterData = allrestaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchInput)
  );
  return filterData;
}
