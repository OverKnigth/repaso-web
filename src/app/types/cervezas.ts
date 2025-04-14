type Rating ={
    average:number;
    reviews:number;
}

export type Cerveza={
    id:number;
    name:string;
    image:string;
    price:number;
    rating:Rating;
}