import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";

@Component({
  selector: 'pm-stars',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  starWidth: number;

  /* Input Decorator used to expose the rating property to the parent component,
      parent component can change the value of this property */
  @Input()
  rating: number;

  /* Output() Used to send the event to the parent component.
     EventEmitter is used to send the event to the parent component.
     Here ratingClicked is the property which will hold the event with a String value
     EventEmitter is of generic class, so it can take any object inside it when triggering an event */
  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  /* Onchange listens to changes in the StarComponent and executes the OnChange Method */
  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = (this.rating * 75) / 5;
  }

  /* It will be executed when the star component object is clicked */
  OnClick(): void {
    console.log(this.rating + ' Clicked');
    /* Sending the event to the parent component. emit() method is given by the EventEmitter class.*/
    this.ratingClicked.emit(this.rating + " Clicked !!! ")
  }

}
