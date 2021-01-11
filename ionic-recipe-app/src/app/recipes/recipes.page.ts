import { Component, OnInit } from '@angular/core';

import { Recipe } from "./recipe.model";

@Component({
	selector: "app-recipes",
	templateUrl: "./recipes.page.html",
	styleUrls: ["./recipes.page.scss"],
})
export class RecipesPage implements OnInit {
	recipes: Recipe[] = [
		{
			id: "r1",
			title: "Enchilada",
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Enchiladas_1.jpg/1920px-Enchiladas_1.jpg",
			ingredients: ["Brown rice", "Chicken", "Guacamole"],
		},
		{
			id: "r2",
			title: "Taco",
			imageUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1920px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg",
			ingredients: ["Wrap", "Tomato", "Coriander"],
		},
	];

	constructor() {}

	ngOnInit() {}
}
