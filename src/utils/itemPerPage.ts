export function ItemPerPage (total: number, currentPage: number, page_size: number) {
  return total - (currentPage - 1) * page_size > page_size
    ? page_size
    : total - (currentPage - 1) * page_size;
}
