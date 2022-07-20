import { animate, AnimationBuilder, AnimationPlayer, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css'],
})
export class DvdComponent {

  distanceToMove: number = 300;
  movementDirection: string = 'bottomRight'
  maxDistX: number = 400;
  maxDistY: number = 300;
  lastPositionX: number = 0;
  lastPositionY: number = 0;
  fullTime: number = 2000;
  colorDVD!: string;

  @ViewChild('withBuilder') elementRef!: ElementRef;
  private player!: AnimationPlayer;

  constructor(private animationBuilder: AnimationBuilder) { }
  
  ngAfterViewInit() {
    this.toggle();
   }

  createPlayer() {
    
    this.player? this.player.destroy(): null;
    let animationFactory;

    switch(this.movementDirection) { 

      case 'bottomRight': default: { 
        this.getRandomColor();
        let distanceToMoveHere = this.maxDistY - this.lastPositionY
        animationFactory = this.animationBuilder
        .build([
          style({
            transform: `translate(${this.lastPositionX}px, ${this.lastPositionY}px)`,
          }),
          animate(this.fullTime, style({
            transform: `translate(${this.lastPositionX += distanceToMoveHere}px, ${this.lastPositionY += distanceToMoveHere}px)`, 
          }))
        ]); 
        if (this.lastPositionY == this.maxDistY) {
          this.movementDirection = 'topRight';
        } 
        this.bounce()
      break; 
      } 

      case 'topRight': {
        this.getRandomColor();
        let distanceToMoveHere = this.maxDistX - this.lastPositionX
        animationFactory = this.animationBuilder
        .build([
          style({ 
            transform: `translate(${this.lastPositionX}px, ${this.lastPositionY}px)`,
          }),
          animate(this.fullTime, style({
            transform: `translate(${this.lastPositionX += distanceToMoveHere}px, ${this.lastPositionY -= distanceToMoveHere}px)`, 
          }))
        ]);
        if (this.lastPositionX == this.maxDistX && this.lastPositionY != 0) {
          this.movementDirection = 'topLeft';
        } else {
          this.movementDirection = 'bottomLeft';          
        }
        this.bounce()
      break; 
      } 
      case 'topLeft': {
        this.getRandomColor();
        let distanceToMoveHere = this.lastPositionY
        animationFactory = this.animationBuilder
        .build([
          style({ 
            transform: `translate(${this.lastPositionX}px, ${this.lastPositionY}px)`,
          }),
          animate(this.fullTime, style({
            transform: `translate(${this.lastPositionX -= distanceToMoveHere}px, ${this.lastPositionY -= distanceToMoveHere}px)`, 
          }))
        ]);
        
        if (this.lastPositionY == 0) {
          this.movementDirection = 'bottomLeft';
        } 
        this.bounce()
      break; 
      } 
      case 'bottomLeft': { 
        this.getRandomColor();
        let distanceToMoveHere
        if(this.maxDistY < this.lastPositionX){
          distanceToMoveHere = this.maxDistY;
        } else {
          distanceToMoveHere = this.lastPositionX;
        }
        
        animationFactory = this.animationBuilder
        .build([
          style({
            transform: `translate(${this.lastPositionX}px, ${this.lastPositionY}px)`,
          }),
          animate(this.fullTime, style({
            transform: `translate(${this.lastPositionX -= distanceToMoveHere}px, ${this.lastPositionY += distanceToMoveHere}px)`, 
          }))
        ]);
        if (this.lastPositionX == 0) {
          this.movementDirection = 'bottomRight';
        } else {
          this.movementDirection = 'topLeft'
        }
        this.bounce()
      break; 
      }
        
    }
    
    this.player = animationFactory.create(this.elementRef.nativeElement);

  } 

  toggle() {
    this.createPlayer();
    this.player.play();
  }

  bounce() {

    setTimeout(() => {
      this.createPlayer();
      this.player.play();
    }, this.fullTime);

    
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.elementRef.nativeElement.style.fill = color;
  }

}
