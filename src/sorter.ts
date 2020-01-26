
//directions on how you can be an argument to Sorter
//tbis makes it so each use of Sorter must implement length commpare and swap
interface Sortable {
  length: number;
  compare(leftIndex:number, rightIndex:number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  //when you use or operator you can only access the properties that are common between number and string
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection;
    //bubble sort
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}