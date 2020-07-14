import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ServiceService } from './../service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts = [];
  id: number;
  title: string;
  body: string;
  public errorMsg;
  public selectedId;
  constructor(private _ServiceService: ServiceService , private route:ActivatedRoute,private router:Router) { 
     
  }
  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id')); 
      this._ServiceService.getPosts()
      .subscribe(data => this.posts = data);
  }
  onSelect(post) {
    this.router.navigate(['/post', post.id]);
    // console.log(post.id)
    //  this.router.navigate(post.id, { relativeTo: this.route });
  }

  isSelected(post) { return post.id === this.selectedId; }
}
