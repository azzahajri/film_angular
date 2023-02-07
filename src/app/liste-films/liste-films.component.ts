import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.component.html',
  styleUrls: ['./liste-films.component.css'],
})
export class ListeFilmsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  tabFilms = [
    {
      nomFilm: 'Mission impossible :Fallout',
      imageFilm: 'assets/films/miFallout.jpg',
      nbJaime: 0,
      nbJenaimepas: 0,
      disponible: true,
    },
    {
      nomFilm: 'Mission impossible2 ',
      imageFilm: 'assets/films/mi2.jpg',
      nbJaime: 0,
      nbJenaimepas: 0,
      disponible: false,
    },
    {
      nomFilm: 'Mission impossible :Protocole Fantôme',
      imageFilm: 'assets/films/miFantome.jpg',
      nbJaime: 0,
      nbJenaimepas: 0,
      disponible: true,
    },
  ];
  onJaime(i: number) {
    this.tabFilms[i].nbJaime++;
    console.log("J'aime ce film" + this.tabFilms[i].nbJaime);
  }
  onJaimePas(i: number) {
    this.tabFilms[i].nbJenaimepas++;
    console.log("J'aime pas ce film" + this.tabFilms[i].nbJenaimepas);
  }
  getColor(x: number , y: number) {
    if (x > y)
     return "#1c8454";
    else
    if (x < y)
     return "#dc3444";
     else
      return "#ffffff";
  }
}
