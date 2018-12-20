const enum Bucket {
  A,
  B,
  C
}

class Flashcards {
  SetName: string;
  CardIds: number[] = [];
  CurrentCardIndex: number;
  Buckets: number[][] = [];
  CurrentBucket: Bucket = Bucket.A;

  constructor(name : string, ids: number[]) {
    this.SetName = name;
    this.Buckets[Bucket.A] = [];
    this.Buckets[Bucket.B] = [];
    this.Buckets[Bucket.C] = [];
    if(ids) {
      for (let r: number = 0; r < ids.length; r++) {
        this.CardIds.push(ids[r]);
        this.Buckets[this.CurrentBucket].push(r);
      } 
    }
  }

  next():number {
    var limitC: number = 16;
    var limitB: number = 33;
    var last = { index:this.CurrentCardIndex,bucket:this.CurrentBucket };
    var r:number = Math.floor(Math.random() * 100);
    if (r<limitC && this.Buckets[Bucket.C].length > 0) {
      this.CurrentBucket = Bucket.C;
    } else if (r<limitB && this.Buckets[Bucket.B].length > 0) {
      this.CurrentBucket = Bucket.B;
    } else if (this.Buckets[Bucket.A].length > 0) {
      this.CurrentBucket = Bucket.A;
    } else if (this.Buckets[Bucket.B].length > 0) {
      this.CurrentBucket = Bucket.B;
    } else if (this.Buckets[Bucket.C].length > 0) {
      this.CurrentBucket = Bucket.C;
    } else {
      alert("ERROR: No cards found.");
      return;
    }
    var count = 0;
    do{
      this.CurrentCardIndex = Math.floor(Math.random() * this.Buckets[this.CurrentBucket].length);
      count++;
    } while(last.bucket==this.CurrentBucket && last.index==this.CurrentCardIndex && count<3);
    return this.CardIds[this.Buckets[this.CurrentBucket][this.CurrentCardIndex]];
  }

  correct():void {
    if (this.CurrentBucket === Bucket.A) {
      this.moveQuestion(Bucket.B);
    } else if (this.CurrentBucket === Bucket.B) {
      this.moveQuestion(Bucket.C);
    } else if (this.CurrentBucket === Bucket.C) {
    } else
    this.moveQuestion(Bucket.B);
  }

  wrong():void {
    this.moveQuestion(Bucket.A);
  }

  private moveQuestion(toBucket:Bucket):void {
    if(this.CurrentBucket !== toBucket) {
      this.Buckets[toBucket].push(this.Buckets[this.CurrentBucket][this.CurrentCardIndex]);
      this.Buckets[this.CurrentBucket].splice(this.CurrentCardIndex,1);
    }
  }

  resetBuckets():void {
    this.Buckets[Bucket.A] = [];
    for (let c: number = 0; c < this.CardIds.length; c++) {
      this.Buckets[Bucket.A].push(c);
    }
    this.CurrentBucket = Bucket.A;
    this.Buckets[Bucket.B] = [];
    this.Buckets[Bucket.C] = [];
  }
}
export default Flashcards;