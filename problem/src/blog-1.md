The significance of union and intersection types in Typescript.


//union types: union type is when we declare a variable can hold diffrent types of values like a string,like a number or boolean.if the variables value doesn't match it will get an error. when we declare different types of value we use "|"

ex:
 let value = string | number ;
 value ="bristi";
 value ="28";
 


//intersection: intersection type is combining multiple types together.we use intersection type operator is &
type FrontendDeveloper ={
        skills:string[];
        designation1:'Frontend Developer'
    }

    type BackendDeveloper ={
        skills:string[];
        designation2:'Backend Developer'
    }
    type FullstackDeveloper =FrontendDeveloper & BackendDeveloper

    const fullstackDeveloper : FullstackDeveloper ={
        skills:['HTML','CSS','EXPRESS'],
        designation1:'Frontend Developer',
        designation2:'Backend Developer'
    }
