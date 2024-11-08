{
    //Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
 
    function countWordOccurrences(sentence:string, word:string) : number {
        const lowerSentence = sentence.toLowerCase();
        const lowerWord = word.toLowerCase();

        const splitWords = lowerSentence.split(" ");

        return splitWords.filter(word => word === lowerWord).length;
    }
console.log(countWordOccurrences("I love typescript", "typescript"))
console.log(countWordOccurrences("I love bangladesh bangladesh", "bangladesh"))
}