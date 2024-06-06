export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    // Reverse collection_1 to sort it from min to max
    let sortedCollection1 = collection_1.reverse();
  
    let mergedArray = [];
    let i = 0, j = 0, k = 0;
  
    // Merging all three collections
    while (i < sortedCollection1.length && j < collection_2.length && k < collection_3.length) {
      if (sortedCollection1[i] <= collection_2[j] && sortedCollection1[i] <= collection_3[k]) {
        mergedArray.push(sortedCollection1[i]);
        i++;
      } else if (collection_2[j] <= sortedCollection1[i] && collection_2[j] <= collection_3[k]) {
        mergedArray.push(collection_2[j]);
        j++;
      } else {
        mergedArray.push(collection_3[k]);
        k++;
      }
    }
  
    // Merging remaining elements
    while (i < sortedCollection1.length && j < collection_2.length) {
      if (sortedCollection1[i] <= collection_2[j]) {
        mergedArray.push(sortedCollection1[i]);
        i++;
      } else {
        mergedArray.push(collection_2[j]);
        j++;
      }
    }
  
    while (i < sortedCollection1.length && k < collection_3.length) {
      if (sortedCollection1[i] <= collection_3[k]) {
        mergedArray.push(sortedCollection1[i]);
        i++;
      } else {
        mergedArray.push(collection_3[k]);
        k++;
      }
    }
  
    while (j < collection_2.length && k < collection_3.length) {
      if (collection_2[j] <= collection_3[k]) {
        mergedArray.push(collection_2[j]);
        j++;
      } else {
        mergedArray.push(collection_3[k]);
        k++;
      }
    }
  
    while (i < sortedCollection1.length) {
      mergedArray.push(sortedCollection1[i]);
      i++;
    }
  
    while (j < collection_2.length) {
      mergedArray.push(collection_2[j]);
      j++;
    }
  
    while (k < collection_3.length) {
      mergedArray.push(collection_3[k]);
      k++;
    }
  
    return mergedArray;
  }
  