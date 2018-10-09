import{Component} from '@angular/core';

@Component({
    selector:'salwar',
    templateUrl:'./salwars.component.html',
})
export class salwarscomponent{
    salwararray:any[]=[
        {id:1,name:"casual",image:"assets/images/salwar1.jpg",price:600},
        {id:1,name:"casual",image:"assets/images/salwar2.jpg",price:400},
        {id:1,name:"casual",image:"assets/images/salwar3.jpg",price:350},
        {id:1,name:"casual",image:"assets/images/salwar5.jpg",price:450},
        {id:1,name:"casual",image:"assets/images/salwar6.jpg",price:600},
        {id:1,name:"casual",image:"assets/images/salwar7.jpg",price:600},
        {id:1,name:"casual",image:"assets/images/salwar8.jpg",price:600},
        
    ]
}