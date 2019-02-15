import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
// Declara a lib do videojs como externa ao angular
declare let videojs: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   // Title of component
   title = 'Player';
   // Instance of video.js.
   vidObj: any;
   // Poster for no video.js
   poster = '//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png';
   // URL of video.
   videoUrl = '//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4';
   
   @ViewChild('myvid') vid: ElementRef;
 
   ngAfterViewInit() {
     const options = {
       controls: true,
       autoplay: false,
       loop: true,
       preload: 'auto',
       techOrder: ['html5']
     };
 
     this.vidObj = new videojs(this.vid.nativeElement, options, function onPlayerReady() {
       videojs.log(videojs(this.vid.nativeElement));
     }); 
   
     console.log(new videojs(this.vid.nativeElement))
   }
}
