import { merge } from '../src/merge';

describe('merge function', () => {
  it('should merge and sort the collections correctly', () => {
    const collection_1 = [5, 4, 3, 2, 1];
    const collection_2 = [1, 2, 3, 4, 5];
    const collection_3 = [2, 3, 4, 5, 6];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6]);
  });

  it('should handle empty collections', () => {
    const collection_1: number[] = [];
    const collection_2 = [1, 2, 3];
    const collection_3 = [4, 5, 6];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle collections with negative numbers', () => {
    const collection_1 = [-1, -2, -3];
    const collection_2 = [1, 2, 3];
    const collection_3 = [0, 4, 5];
    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([-3, -2, -1, 0, 1, 2, 3, 4, 5]);
  });
});
