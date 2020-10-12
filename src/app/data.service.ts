import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  products = [
    {
      titre: "Nos pizzas",
      image: "../assets/images/pizza.jpg",
      description: "Toutes nos pizzas sont faites maison avec des ingrédients frais et issus des circuits courts."
    },
    {
      titre: "Nos pâtes",
      image: "../assets/images/pates.jpg",
      description: "Nos pâtes et ravioles sont fraîches et faites maison."
    },
    {
      titre: "Nos salades",
      image: "../assets/images/salade.jpg",
      description: "Nos salades sont délicieuses et vous permettent de manger léger et équilibré."
    },
    {
      titre: "Nos desserts",
      image: "../assets/images/dessert.jpg",
      description: "Pour conclure en beauté, pas de festin italien sans dulce bien sucré !"
    },
    {
      titre: "Nos boissons fraîches",
      image: "../assets/images/boissons-fraiches.jpg",
      description: "Un soda ou une eau fraîche pour accompagner votre repas."
    },
    {
      titre: "Nos vins",
      image: "../assets/images/vins.jpg",
      description: "Des vins italiens, blancs, rosés ou rouges, pour accompagner vos repas."
    }
  ]
}
