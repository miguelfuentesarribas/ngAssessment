import { animate, AnimationBuilder, AnimationPlayer, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css'],
})
export class DvdComponent {

  movementDirection: string = 'bottomRight';
  // maxDistX: number = 800;
  // maxDistY: number = 450;
  
  maxDistX: number = 450;
  
  lastPositionX: number = 0;
  lastPositionY: number = 0;
  fullTime: number = 4000;
  colorDVD!: string;
  distanceToMoveHere: number = 0;

  @ViewChild('withBuilder') elementRef!: ElementRef;
  @ViewChild('screenSaver') elementSaver!: ElementRef;

  maxDistY: number = 800;

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
        if(this.lastPositionX != 0 && this.lastPositionY != 0){
          this.distanceToMoveHere = this.maxDistX - this.lastPositionX;
        } else if (this.maxDistX < this.lastPositionX + (this.maxDistY - this.lastPositionY) ) {
          this.distanceToMoveHere = this.maxDistX - this.lastPositionX;
        } else {
          this.distanceToMoveHere = this.maxDistY - this.lastPositionY;
        }
        
        animationFactory = this.animationBuilder
        .build([
          style({
            transform: `translate(${this.lastPositionX}px, ${this.lastPositionY}px)`,
          }),
          animate(this.animationTime(this.distanceToMoveHere), style({
            transform: `translate(${this.lastPositionX += this.distanceToMoveHere}px, ${this.lastPositionY += this.distanceToMoveHere}px)`, 
          }))
        ]); 

        if (this.lastPositionY == this.maxDistY) {
          this.movementDirection = 'topRight';
        } else {
          this.movementDirection = 'bottomLeft';
        }
        this.bounce(this.animationTime(this.distanceToMoveHere));
      break; 
      } 

      case 'topRight': {
        this.getRandomColor();
        if(this.lastPositionY == this.maxDistY && this.maxDistX > this.lastPositionX + this.maxDistY) {
          this.distanceToMoveHere = this.maxDistY;
        } else if(this.lastPositionX == 0 && this.maxDistX < this.lastPositionY) {
          this.distanceToMoveHere = this.maxDistX;
        } else if(this.lastPositionX == 0){
          this.distanceToMoveHere = this.lastPositionY;
        } else {
          this.distanceToMoveHere = this.maxDistX - this.lastPositionX;
        }

        animationFactory = this.animationBuilder
        .build([
          style({ 
            transform: `translate(${this.lastPositionX}px, ${this.lastPositionY}px)`,
          }),
          animate(this.animationTime(this.distanceToMoveHere), style({
            transform: `translate(${this.lastPositionX += this.distanceToMoveHere}px, ${this.lastPositionY -= this.distanceToMoveHere}px)`, 
          }))
        ]);
        if (this.lastPositionX == this.maxDistX && this.lastPositionY != 0) {
          this.movementDirection = 'topLeft';
        } else if( this.lastPositionX != this.maxDistX) {
          this.movementDirection = 'bottomRight';
        } else {
          this.movementDirection = 'bottomLeft';         
        }
        this.bounce(this.animationTime(this.distanceToMoveHere));
      break; 
      } 
      case 'topLeft': {
        this.getRandomColor();
        if (this.maxDistY == this.lastPositionY && this.maxDistY < this.lastPositionX) {
          this.distanceToMoveHere = this.maxDistY;
        } else if(this.lastPositionX == this.maxDistX && this.maxDistX < this.lastPositionY) {
          this.distanceToMoveHere = this.maxDistX;
        } else if(this.maxDistY == this.lastPositionY){
          this.distanceToMoveHere = this.lastPositionX;
        } else {
          this.distanceToMoveHere = this.lastPositionY;
        }

        animationFactory = this.animationBuilder
        .build([
          style({ 
            transform: `translate(${this.lastPositionX}px, ${this.lastPositionY}px)`,
          }),
          animate(this.animationTime(this.distanceToMoveHere), style({
            transform: `translate(${this.lastPositionX -= this.distanceToMoveHere}px, ${this.lastPositionY -= this.distanceToMoveHere}px)`, 
          }))
        ]);

        if (this.lastPositionX == 0 && this.lastPositionY == 0) {
          this.movementDirection = 'bottomRight';
        } else if (this.lastPositionY == 0) {
          this.movementDirection = 'bottomLeft';
        } else {
          this.movementDirection = 'topRight';
        }
        this.bounce(this.animationTime(this.distanceToMoveHere));
      break;       
      } 
      case 'bottomLeft': { 
        this.getRandomColor();
        if(this.maxDistY < this.lastPositionX ){          
          this.distanceToMoveHere = this.maxDistY - this.lastPositionY;
        } else if(this.lastPositionX == this.maxDistX && this.lastPositionX > this.lastPositionY) {
          this.distanceToMoveHere = this.maxDistX;
        } else if(this.maxDistX == this.lastPositionX && this.maxDistY > this.lastPositionX) {
          this.distanceToMoveHere = this.maxDistY - this.lastPositionY;
        } else {
          this.distanceToMoveHere = this.lastPositionX;
        }

        animationFactory = this.animationBuilder
        .build([
          style({
            transform: `translate(${this.lastPositionX}px, ${this.lastPositionY}px)`,
          }),
          animate(this.animationTime(this.distanceToMoveHere), style({
            transform: `translate(${this.lastPositionX -= this.distanceToMoveHere}px, ${this.lastPositionY += this.distanceToMoveHere}px)`, 
          }))
        ]);
        if (this.lastPositionX == 0 && this.lastPositionY == this.maxDistY) {
          this.movementDirection = 'topRight';
        } else if (this.lastPositionX == 0) {
          this.movementDirection = 'bottomRight';
        } else {
          this.movementDirection = 'topLeft';
        }
        this.bounce(this.animationTime(this.distanceToMoveHere));
      break; 
      }
      case 'stop': {
        animationFactory = this.animationBuilder
        .build([
          style({
            transform: `translate(${this.lastPositionX}px, ${this.lastPositionY}px)`,
          }),
        ]);
      }
        
    }
    this.player = animationFactory.create(this.elementRef.nativeElement);
  } 

  toggle() {
    this.createPlayer();
    this.player.play();
  }

  bounce(time: number) {
    console.log('time bounce ',Math.round(time/10)/100);
    
    setTimeout(() => {
      this.createPlayer();
      this.player.play();
    }, time);
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.elementRef.nativeElement.style.fill = color;
  }

  stop() {
    this.movementDirection = 'stop';
  }

  animationTime( distancia: number ) {
    return this.maxDistX < this.maxDistY ? 
      (((distancia/this.maxDistX)*100)*(this.fullTime/100)) :
      (((distancia/this.maxDistY)*100)*(this.fullTime/100));
  }

}