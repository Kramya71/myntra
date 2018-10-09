import{Component} from '@angular/core';

@Component({
    selector:'shoes',
    templateUrl:'./shoes.component.html',
})
export class shoescomponent{

    shoesarray:any[]=[
        {id:1,name:"casual",image:"assets/images/shoes1.jpg",price:600},
        {id:1,name:"casual",image:"assets/imagesshoes2.jpg",price:400},
        {id:1,name:"casual",image:"assets/images/shoes3.jpg",price:350},
        {id:1,name:"casual",image:"assets/images/shoes4.jpg",price:450},
        {id:1,name:"casual",image:"assets/images/shoes5.jpg",price:600},
        {id:1,name:"casual",image:"assets/images/shoes6.jpg",price:600},
        {id:1,name:"casual",image:"assets/images/shoes7.jpg",price:600},
       
    ]
}