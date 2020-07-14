import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts/posts.component'; 


const routes: Routes = [
  {path : '' , component :PostsComponent},
  {path : 'post/:id' , component :PostDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PostsComponent,PostDetailsComponent]