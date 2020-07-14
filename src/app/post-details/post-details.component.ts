import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DetailsService } from './../details.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  showModal : boolean;
  PostId: any;
  back : any;
  id : number;
  title : string;
  body: string;
  posts_details: any;
  editbody : string;
  edittitle : string;
  constructor(private _DetailsService: DetailsService ,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      if(id > 0){
        this._DetailsService.getPost(id)
        .subscribe(data => this.posts_details = data);
      }
    });
  }
  deletePost() {
    this._DetailsService.deletePost(this.posts_details.id).subscribe();
    alert(`Post with ID = ${this.posts_details.id} Deleted`)
    this.router.navigate(['']);
  }
  editPost(posts_details) {
    this.showModal = true;
    console.log(posts_details.body);
    this.posts_details.edittitle = posts_details.title
    // this._DetailsService.editPost(this.posts_details.id).subscribe();
    // alert(`Post with ID = ${this.posts_details.id} Deleted`)
    // this.router.navigate(['']);
  }
  closepopup(){
    this.showModal = false;
  }
  goPrevious() {
    let previousId = parseInt(this.route.snapshot.paramMap.get('id')); 
    let previousIds = previousId -1 
    this.router.navigate(['/post', previousIds]);
  }
  goNext() {
    let nextId = parseInt(this.route.snapshot.paramMap.get('id')); 
    let nextIds = nextId +1 
    this.router.navigate(['/post', nextIds]); 
  }
}
