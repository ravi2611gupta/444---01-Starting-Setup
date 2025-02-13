import { NgFor } from "@angular/common";
import { Component, computed, effect, signal } from "@angular/core";

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
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => {
      console.log(this.counter()); //! This function will always run whenever there is a change in the counter signal, similar to how useEffect works with a dependency array.
    });
  }

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
