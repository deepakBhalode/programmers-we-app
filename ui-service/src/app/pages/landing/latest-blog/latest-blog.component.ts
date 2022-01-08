import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.css']
})
export class LatestBlogComponent implements OnInit {

  blogsDetail: any = [
    {
      title: "Blog - 1",
      description: "This will redirect to page logo home. It's working. The thing is that the more you will dedicate yourself the more will be the furitful result.",
      link: "https://www.canva.com/design/DAE0fkAM4CI/5zIeye2jIXG9WaBFqHvo3A/edit"
    },
    {
      title: "Blog - 2",
      description: "This will redirect to canva home.",
      link: "https://www.canva.com/"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
