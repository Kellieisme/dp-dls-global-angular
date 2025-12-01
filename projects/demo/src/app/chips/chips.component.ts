import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {ChangeDetectionStrategy, Component, signal, computed, inject, model,} from '@angular/core';
import { LiveAnnouncer, CdkAriaLive } from '@angular/cdk/a11y';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatCard, MatCardModule } from "@angular/material/card";

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'chips-page',
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss',
  imports: [CdkDropList, CdkDrag, MatFormFieldModule, MatChipsModule, MatIconModule, MatAutocompleteModule, FormsModule, MatCard, MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsPageComponent {
  // Generic helper to add an item to a signal array and announce
  private addToSignalArray(signalArray: any, value: string, announceMsg: string) {
    if (value) {
      signalArray.update((arr: string[]) => [...arr, value]);
      this.announcer.announce(announceMsg);
    }
  }

  // Generic helper to remove an item from a signal array and announce
  private removeFromSignalArray(signalArray: any, value: string, announceMsg: string) {
    signalArray.update((arr: string[]) => {
      const index = arr.indexOf(value);
      if (index < 0) {
        return arr;
      }
      arr.splice(index, 1);
      this.announcer.announce(announceMsg);
      return [...arr];
    });
  }
removableFruits(): string[] {
  // Always return an array for iteration in the template
  return this.fruits();
}
    // Used for demo chips in the template
    readonly labelExamples: string[] = [
      'Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry',
      'Aircraft', 'Parts', 'Companies', 'Concept'
    ];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly currentFruit = model('');
  readonly fruits = signal(['Lemon']);
  readonly allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  readonly filteredFruits = computed(() => {
    const currentFruit = this.currentFruit().toLowerCase();
    return currentFruit
      ? this.allFruits.filter(fruit => fruit.toLowerCase().includes(currentFruit))
      : this.allFruits.slice();
  });

  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    this.addToSignalArray(this.fruits, value, `Added ${value}`);
    this.currentFruit.set('');
  }

  remove(fruit: string): void {
    this.removeFromSignalArray(this.fruits, fruit, `Removed ${fruit}`);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.update(fruits => [...fruits, event.option.viewValue]);
    this.currentFruit.set('');
    event.option.deselect();
  }

readonly vegetables = signal<Vegetable[]>([
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ]);

  drop(event: CdkDragDrop<Vegetable[]>) {
    this.vegetables.update(vegetables => {
      moveItemInArray(vegetables, event.previousIndex, event.currentIndex);
      return [...vegetables];
    });
  }


  //Stacked chips example
   readonly bestBoys: string[] = ['Samoyed', 'Akita Inu', 'Alaskan Malamute', 'Siberian Husky'];

// template-driven form example
 readonly templateKeywords = signal(['angular', 'how-to', 'tutorial', 'accessibility']);

  removeTemplateKeyword(keyword: string) {
    this.removeFromSignalArray(this.templateKeywords, keyword, `removed ${keyword} from template form`);
  }

  addTemplateKeyword(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    this.addToSignalArray(this.templateKeywords, value, `added ${value} to template form`);
    event.chipInput!.clear();
  }
}

// import { MatIconModule } from '@angular/material/icon';
// import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
// import { COMMA, ENTER } from '@angular/cdk/keycodes';
// import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
// import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
// import { IconRegistryModule } from '../../../../design/dp-dls-global-angular/icon-registry/src/icon-registry.module';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { LiveAnnouncer } from '@angular/cdk/a11y';
// import { UserProfileComponent } from '../../../../design/dp-dls-global-angular/user-profile/src/user-profile.component';
// export interface LabelExample {
//   name: string;
// }

// @Component({
//     selector: 'chips-page',
//     imports: [MatChipsModule, MatIconModule, IconRegistryModule, CdkDropList, CdkDrag, MatFormFieldModule, UserProfileComponent],
//     templateUrl: './chips.component.html',
//     styleUrl: './chips.component.scss',
//     changeDetection: ChangeDetectionStrategy.OnPush
// })

// export class ChipsPageComponent {
//   title = 'Menu';
//   readonly labelExamples = signal<LabelExample[]>([
//     { name: 'Aircraft' },
//     { name: 'Parts' },
//     { name: 'Companies' },
//     { name: 'Concept' },
//   ]);
//   readonly addOnBlur = true;
//   readonly separatorKeysCodes = [ENTER, COMMA] as const;

//   drop(event: CdkDragDrop<LabelExample[]>) {
//     this.labelExamples.update(labelExamples => {
//       moveItemInArray(labelExamples, event.previousIndex, event.currentIndex);
//       return [...labelExamples];
//     });
//   }

//   readonly announcer = inject(LiveAnnouncer);

//   add(event: MatChipInputEvent): void {
//     const value = (event.value || '').trim();

//     if (value) {
//       this.labelExamples.update(labelExamples => [...labelExamples, { name: value }]);
//     }

//     // Clear the input value
//     event.chipInput!.clear();
//   }

//   remove(labelExample: LabelExample): void {
//     this.labelExamples.update(labelExamples => {
//       const index = labelExamples.indexOf(labelExample);
//       if (index < 0) {
//         return labelExamples;
//       }

