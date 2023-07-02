export interface IPagination {
  limitPage?: number;
  currentPage?: number;
  hasPrevPage?: boolean;
  hasNextPage?: boolean;
  prevPage?: number | null;
  nextPage?: number | null;
  totalPages?: number;
  totalDocs?: number;
}
