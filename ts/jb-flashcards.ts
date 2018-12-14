const enum Bucket {
  A,
  B,
  C
}

interface Card {
  Q : string;
  A : string;
}

class Flashcards {
  SetName: string;
  SetCards: Card[] = [];
  CurrentCardIndex: number;
  Buckets: number[][] = [];
  CurrentBucket: Bucket = Bucket.A;

  constructor(name : string, cardData ? : any[]) {
    this.SetName = name;
    this.Buckets[Bucket.A] = [];
    this.Buckets[Bucket.B] = [];
    this.Buckets[Bucket.C] = [];
    if(cardData) {
      for (let r: number = 0; r < cardData.length; r++) {
        this.SetCards.push(cardData[r]);
        this.Buckets[this.CurrentBucket].push(r);
      } 
      this.saveToLS();
    } else {
      this.getFromLS();
    }
  }

  next():Card {
    var limitC: number = 16;
    var limitB: number = 33;
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
    this.CurrentCardIndex = Math.floor(Math.random() * this.Buckets[this.CurrentBucket].length);
    return this.SetCards[this.Buckets[this.CurrentBucket][this.CurrentCardIndex]];
  }

  correct():void {
    if (this.CurrentBucket === Bucket.A) {
      this.moveQuestion(Bucket.B);
    } else if (this.CurrentBucket === Bucket.B) {
      this.moveQuestion(Bucket.C);
    } else if (this.CurrentBucket === Bucket.C) {
    } else
    this.moveQuestion(Bucket.B);
    this.saveToLS();
  }

  wrong():void {
    this.moveQuestion(Bucket.A);
    this.saveToLS();
  }

  private moveQuestion(toBucket:Bucket):void {
    if(this.CurrentBucket !== toBucket) {
      this.Buckets[toBucket].push(this.Buckets[this.CurrentBucket][this.CurrentCardIndex]);
      this.Buckets[this.CurrentBucket] = this.Buckets[this.CurrentBucket].splice(this.CurrentCardIndex,1);
    }
  }

  saveToLS():void {
    localStorage['jbf-SetCards-' + this.SetName] = JSON.stringify(this.SetCards);
    localStorage['jbf-BucketA-' + this.SetName] = JSON.stringify(this.Buckets[Bucket.A]);
    localStorage['jbf-BucketB-' + this.SetName] = JSON.stringify(this.Buckets[Bucket.B]);
    localStorage['jbf-BucketC-' + this.SetName] = JSON.stringify(this.Buckets[Bucket.C]);
  }

  getFromLS():void {
    this.SetCards = JSON.parse(localStorage['jbf-SetCards-' + this.SetName] || "[]");
    this.Buckets[Bucket.A] = JSON.parse(localStorage['jbf-BucketA-' + this.SetName] || "[]");
    this.Buckets[Bucket.B] = JSON.parse(localStorage['jbf-BucketB-' + this.SetName] || "[]");
    this.Buckets[Bucket.C] = JSON.parse(localStorage['jbf-BucketC-' + this.SetName] || "[]");
    this.CurrentBucket = this.Buckets[Bucket.A].length ? Bucket.A : this.Buckets[Bucket.B].length ? Bucket.B : Bucket.C;
  }

  resetBuckets():void {
    this.Buckets[Bucket.A] = [];
    for (let c: number = 0; c < this.SetCards.length; c++) {
      this.Buckets[Bucket.A].push(c);
    }
    this.CurrentBucket = Bucket.A;
    this.Buckets[Bucket.B] = [];
    this.Buckets[Bucket.C] = [];
    this.saveToLS();
  }
}
export default Flashcards;