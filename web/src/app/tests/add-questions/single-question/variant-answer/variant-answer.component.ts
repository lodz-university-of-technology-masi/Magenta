import {Component, Input, OnInit} from '@angular/core';
import {Question, Variant} from '../../../../models/question';
import {text} from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-variant-answer',
  templateUrl: './variant-answer.component.html',
  styleUrls: ['./variant-answer.component.css']
})
export class VariantAnswerComponent implements OnInit {

  constructor() { }

  @Input()
  variants: Variant[];

  ngOnInit() {
  }
  add(): void {
    const variant = new Variant();
    variant.text = '';
    this.variants.push(variant);
  }
  delete(id: number): void  {
    this.variants.splice(id, 1);
  }
}
