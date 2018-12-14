import {
  CardInfo,
  Card
} from "./card";

class Flashcards {
  SetID: number;
  SetName: string;
  SetVersion: string;
  SetCards: Card[] = [];
  constructor(id ? : number, name ? : string, version ? : string, cardData: any[]) {
    for (let r: number = 0; r < cardData.length; r++) {
      this.SetCards.push(new Card(cardData[r]));
    }

    function loadFromArray(array: any[]):void {
      this.SetCards = array;
      resetBuckets();
    }

    function loadFromBrowser(selector:string, delimiter:string):Card[] {
      var flashcardRows: string[] = [];
      flashcardRows = $(selector).val().split("\n");

      // get rid of empty questions
      var rows:string[] = flashcardRows.filter(function (row: string): string {
        if(row !== "") { return row; }
      });

      if (rows.length === 0) {
        console.log("There are no flashcards to upload.");
        return;
      }

      rows.forEach(function (row:string):void {
        var parsedCard:string[] = row.split(delimiter);
        this.SetCards = [];
        this.SetCards.push({
          Question: parsedCard[0],
          Answer: parsedCard[1]
        });
      });

      resetBuckets();
      return getFromLS();
    }

    function next():void {
      var newQuestion,
        bigInterval = Math.ceil(ouicards.flashcards.length / 3) + 1,
        smallInterval = Math.ceil(ouicards.flashcards.length / 6) + 1;

      // Show an answer from bucket C once every bigInterval 
      // So long as Bucket C it"s not empty
      if (ouicards.counter % bigInterval === 0 && ouicards.bucketC.length !== 0) {
        newQuestion = getQuestion(ouicards.bucketC);
        ouicards.currentBucket = ouicards.bucketC;

        // Show an answer from bucket B once every smallInterval
        // So long as Bucket B it"s not empty
      } else if (ouicards.counter % smallInterval === 0 && ouicards.bucketB.length !== 0) {
        newQuestion = getQuestion(ouicards.bucketB);
        ouicards.currentBucket = ouicards.bucketB;

        // Show an answer from Bucket A, so long as it"s not empty
      } else if (ouicards.bucketA.length !== 0) {
        newQuestion = getQuestion(ouicards.bucketA);
        ouicards.currentBucket = ouicards.bucketA;

        // Show an answer from Bucket B, so long as it"s not empty
      } else if (ouicards.bucketB.length !== 0) {
        newQuestion = getQuestion(ouicards.bucketB);
        ouicards.currentBucket = ouicards.bucketB;

        // Show a question from Bucket C, so long as it"s not empty
      } else if (ouicards.bucketC.length !== 0) {
        newQuestion = getQuestion(ouicards.bucketC);
        ouicards.currentBucket = ouicards.bucketC;
      } else {
        console.log("There was a serious problem with ouicards. You should never see ");
      }

      // Reset ouicards.counter if it"s greater than flashcard count, otherwise ++ it
      ouicards.counter >= ouicards.flashcards.length ? ouicards.counter = 1 : ouicards.counter++;
      return newQuestion;
    }

    function correct():void {
      if (ouicards.currentBucket === ouicards.bucketA) {
        moveQuestion(ouicards.bucketA, ouicards.bucketB);
      } else if (ouicards.currentBucket === ouicards.bucketB) {
        moveQuestion(ouicards.bucketB, ouicards.bucketC);
      } else if (ouicards.currentBucket === ouicards.bucketC) {
        moveQuestion(ouicards.bucketC, ouicards.bucketC);
      } else
        console.log("Hmm, you should not be here.");
      saveToLS();
    }

    function wrong():void {
      moveQuestion(ouicards.currentBucket, ouicards.bucketA);
      saveToLS();
    }

    function moveQuestion(fromBucket, toBucket):void {
      toBucket.push(fromBucket.shift());
    }

    function getQuestion(bucket):string {
      // Prevent from looping thru an empty bucket
      if (!bucket || bucket.length === 0) {
        console.log("You can"t load an empty set of questions.");
        return;
      }

      return buildQuestionHTML(bucket[0]);
    }

    function buildQuestionHTML(rawQuestion):object {
      var questionEl, answerEl;

      questionEl = document.createElement("p");
      questionEl.innerHTML = rawQuestion.question;

      answerEl = document.createElement("p");
      answerEl.innerHTML = rawQuestion.answer.replace(/\n/g, "<br>");

      return {
        question: questionEl,
        answer: answerEl
      };
    }

    function saveToLS():void {
      localStorage.flashcards = JSON.stringify(ouicards.flashcards);
      localStorage.bucketA = JSON.stringify(ouicards.bucketA);
      localStorage.bucketB = JSON.stringify(ouicards.bucketB);
      localStorage.bucketC = JSON.stringify(ouicards.bucketC);
    }

    function getFromLS():object {
      ouicards.flashcards = JSON.parse(localStorage.flashcards || "[]");
      ouicards.bucketA = JSON.parse(localStorage.bucketA || "[]");
      ouicards.bucketB = JSON.parse(localStorage.bucketB || "[]");
      ouicards.bucketC = JSON.parse(localStorage.bucketC || "[]");
      ouicards.currentBucket = ouicards.bucketA.length ? ouicards.bucketA :
        ouicards.bucketB.length ? ouicards.bucketB :
        ouicards.bucketC.length ? ouicards.bucketC : [];

      ouicards.counter = 1;
      return {
        flashcards: ouicards.flashcards,
        bucketA: ouicards.bucketA,
        bucketB: ouicards.bucketB,
        bucketC: ouicards.bucketC
      };
    }

    function resetBuckets():void {
      ouicards.bucketA = ouicards.flashcards.slice(0);
      ouicards.currentBucket = ouicards.bucketA;
      ouicards.bucketB = [];
      ouicards.bucketC = [];
      ouicards.counter = 1;
      saveToLS();
    }

    // jQuery magic
    var showNext = function ():void {
      var result:function = next();
      $("#current-question").first().html(result["question"]);
      $("#current-answer").first().hide().html(result["answer"]);
    };

    $.fn.ouicards = function ():void {
      var result:object[] = [];
      this.find("ul").hide().children().each(function () {
        result.push({
          question: $(this).find(".question").text(),
          answer: $(this).find(".answer").text()
        });
      });

      loadFromArray(result);

      $("a#correct").click(function (event:Event ):void {
        event.preventDefault();
        correct();
        showNext();
      });

      $("a#wrong").click(function (event:Event):void {
        event.preventDefault();
        wrong();
        showNext();
      });

      $("a#show-answer").click(function (event:Event):void  {
        event.preventDefault();
        $("#current-answer").first().show();
      });

      showNext();
    };

  }
}