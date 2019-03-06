import {
  Component,
  AfterViewInit,
  OnInit,
  ViewChild,
  ElementRef
} from "@angular/core";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

declare let videojs: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // Title of component
  title = "Player";
  // Instance of video.js.
  vidObj: any;
  options: any;
  temp: any = true;
  // Poster for no video.js
  poster = "//d2zihajmogu5jn.cloudfront.net/elephantsdream/poster.png";
  // URL of video.
  videoUrl: any;
  //'//d2zihajmogu5jn.cloudfront.net/elephantsdream/ed_hd.mp4';
  counter: number = 0;
  constructor() {}

  @ViewChild("myvid") vid: ElementRef;

  ngOnInit() {
    this.options = {
      controls: true,
      autoplay: false,
      loop: true,
      preload: "auto",
      techOrder: ["html5"],
      fluid: false,
      muted: true
    };
    this.videoUrl = this.videoList[0].sources[0].src;
    this.poster = this.videoList[0].poster;
  }

  videoList = [
    {
      sources: [
        {
          src: "http://media.w3.org/2010/05/sintel/trailer.mp4",
          type: "video/mp4"
        }
      ],
      poster: "https://www.rt.com/static/img/og-logo-rt.png"
    },
    {
      sources: [
        {
          src: "http://media.w3.org/2010/05/bunny/trailer.mp4",
          type: "video/mp4"
        }
      ],
      poster: "http://media.w3.org/2010/05/bunny/poster.png"
    },
    {
      sources: [
        {
          src: "https://vjs.zencdn.net/v/oceans.mp4",
          type: "video/mp4"
        }
      ],
      poster: "https://vjs.zencdn.net/v/oceans.png"
    },
    {
      sources: [
        {
          src: "http://media.w3.org/2010/05/bunny/movie.mp4",
          type: "video/mp4"
        }
      ],
      poster: "http://media.w3.org/2010/05/bunny/poster.png"
    },
    {
      sources: [
        {
          src: "http://media.w3.org/2010/05/video/movie_300.mp4",
          type: "video/mp4"
        }
      ],
      poster: "http://media.w3.org/2010/05/video/poster.png"
    }
  ];

  toggleLoop() {
    this.vidObj.loop(this.options.loop);
  }

  toggleControls() {
    this.vidObj.controls(this.options.controls);
  }

  toggleMute() {
    console.log(this.options.muted)
    this.vidObj.muted(this.options.muted);
  }

  toggleFluid() {
    this.vidObj.fluid(this.options.fluid);
  }

  

  arrLenth:number = this.videoList.length;
  next() {
    
    if (this.videoUrl) {
      ++this.counter;
      if(this.counter < this.arrLenth){
        for (let i = this.counter; i < this.arrLenth; i++) {
          let source = this.videoList[i];
          this.videoUrl = source.sources[0].src;
          this.poster = this.videoList[i].poster;
          this.vid.nativeElement.src = this.videoUrl;
          this.vidObj.play();
          break;
        }
      } else {
        alert("You are at Last Video");
      }      
    }
  }

  previous() {
    if (this.videoUrl) {
      if (this.counter >= 0) {
        --this.counter;
        if(this.counter > -1) {
          for (let i = this.counter; i < this.arrLenth; i--) {
            let source = this.videoList[i];
            this.videoUrl = source.sources[0].src;
            this.poster = this.videoList[i].poster;
            this.vid.nativeElement.src = this.videoUrl;
            this.vidObj.play();
            break;
          }
        } else {
          alert("You are at first Video");
        }     
      }
    }
  }

  ngAfterViewInit() {
    this.vidObj = new videojs(this.vid.nativeElement, this.options, () => {
      videojs.log(videojs(this.vid.nativeElement));
    });
  }
}
