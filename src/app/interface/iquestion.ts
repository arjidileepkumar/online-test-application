
export interface Iquestion {
    id:number;
    question : string;
    correctAnswer:number;
    score:number;

}
export interface Ianswer {
    id:number;
    answer : string;
    questionNo: number;
    
}
