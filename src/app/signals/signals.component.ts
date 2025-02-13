import { NgFor } from "@angular/common";
import { Component, signal } from "@angular/core";

@Component({
  selector: "app-signals",
  templateUrl: "./signals.component.html",
  standalone: true,
  imports: [NgFor],
})
export class signalsComponent {
  // actions: string[] = [];
  actions = signal<string[]>([]);
  // counter = 0;
  counter = signal(0);

  increment() {
    // this.counter++;
    // this.counter.update((oldValue) => oldValue + 1);
    this.counter.set(this.counter() + 1);
    // this.actions.push("INCREMENT");
    this.actions.mutate((oldValues) => oldValues.push("INCREMENT"));
  }

  decrement() {
    // this.counter--;
    // this.counter.update((oldValue) => oldValue - 1);
    this.counter.set(this.counter() - 1);
    // this.actions.push("DECREMENT");
    this.actions.update((oldValues) => [...oldValues, "DECREMENT"]);
  }
}
