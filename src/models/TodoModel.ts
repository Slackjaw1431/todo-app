class TodoModel {

    rowNumber: number;
    rowDescription: string;
    rowOwner: string;
    

  constructor ( 
    rowNumber: number,
    rowDescription: string,
    rowOwner: string) {
        this.rowOwner = rowOwner;
        this.rowDescription= rowDescription;
        this.rowNumber=rowNumber;
  }
}
