export type Songs = {
    _id:string,
     title:string,
    artist:string,
     imageUrl:string,
    audioUrl:string,
    duration:number,
    albumId:string

     
}

export type Albums  = {
 _id:string, 
 title:string, 
 artist:string,
 imageUrl:string,
 releaseYear:number,
 songs:Songs[]
} 

