import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-ebook',
  templateUrl: './featured-ebook.component.html',
  styleUrls: ['./featured-ebook.component.css']
})
export class FeaturedEbookComponent implements OnInit {
  ebooks: any = [
    {
      title: "Foundation of System Design",
      description: "In this book, author talk about fundamental concepts to get started with System Design."
    },
    {
      title: "Foundation of STL",
      description: ""
    },
    {
      title: "Introduction to Data Structure through C++",
      description: "In this book, author talk about fundamental concepts to get started with STL. STL is popularly used for Competitive programming."
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
