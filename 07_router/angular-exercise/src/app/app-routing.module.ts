import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {ProductUpdateComponent} from './product/product-update/product-update.component';
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';

const routes: Routes = [
  // {
  // path: 'timelines',
  // component: TimelinesComponent,

  // path: 'youtube',
  // component: YoutubePlaylistComponent,
  // children: [{
  //   path: 'id',
  //   component: YoutubePlayerComponent
  // }]
  // },
  // {path: 'dictionary/list', component: DictionaryPageComponent},
  // {path: 'dictionary/detail/:word', component: DictionaryDetailComponent}
  {path: 'product/create', component: ProductCreateComponent},
  {path: 'product/list', component: ProductListComponent},
  {path: 'product/update/:id', component: ProductUpdateComponent},
  {path: 'product/delete/:id', component: ProductDeleteComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
