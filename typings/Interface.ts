export interface IExploreNearby {
  location: string;
  image: string;
  description: string;
}

export interface ILiveAnywhere {
  image: string;
  title: string;
  location:string

}

export interface Data{
  _id:string;
  title:string;
  ratings:number
  placesOfInterest:string
  latitude:number
  longitude:number
  images:string[];
  host:any;
  gettingAround:string;
  description:string;
  bedroom:number;
  bathroom:number;
  bed:number;
  capacity:number
 numOfReviews:number
 location:string
 price:string
}