import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

    @Input()
    public imageSource: string;

    @Input("widthImage")
    public width: number = 50;
    @Input("heightImage")
    public height: number = 50;

    @Output()
    public imageClick =  new EventEmitter<string>();
  constructor() { }
    public mouseClick(): void{
        this.imageClick.emit(this.imageSource);
    }

    @Output()
    public imageOut = new EventEmitter<string>();

    public mouseOut(){
        this.imageOut.emit("");
    }
  ngOnInit() {
  }

}
