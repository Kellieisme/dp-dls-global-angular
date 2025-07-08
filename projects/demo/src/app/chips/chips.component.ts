import { MatIconModule } from '@angular/material/icon';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { IconRegistryModule } from '@dasdigitalplatform/dls-global-angular/icon-registry';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { UserProfileComponent } from '@dasdigitalplatform/dls-global-angular/user-profile';

export interface LabelExample {
  name: string;
}

@Component({
    selector: 'chips-page',
    imports: [MatChipsModule, MatIconModule, IconRegistryModule, CdkDropList, CdkDrag, MatFormFieldModule, UserProfileComponent],
    templateUrl: './chips.component.html',
    styleUrl: './chips.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChipsPageComponent {
  title = 'Menu';
  readonly labelExamples = signal<LabelExample[]>([
    { name: 'Aircraft' },
    { name: 'Parts' },
    { name: 'Companies' },
    { name: 'Concept' },
  ]);
  readonly addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  drop(event: CdkDragDrop<LabelExample[]>) {
    this.labelExamples.update(labelExamples => {
      moveItemInArray(labelExamples, event.previousIndex, event.currentIndex);
      return [...labelExamples];
    });
  }

  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.labelExamples.update(labelExamples => [...labelExamples, { name: value }]);
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(labelExample: LabelExample): void {
    this.labelExamples.update(labelExamples => {
      const index = labelExamples.indexOf(labelExample);
      if (index < 0) {
        return labelExamples;
      }

      labelExamples.splice(index, 1);
      this.announcer.announce(`Removed ${labelExample.name}`);
      return [...labelExamples];
    });
  }

  edit(labelExample: LabelExample, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove label if it no longer has a name
    if (!value) {
      this.remove(labelExample);
      return;
    }

    // Edit existing label
    this.labelExamples.update(labelExamples => {
      const index = labelExamples.indexOf(labelExample);
      if (index >= 0) {
        labelExamples[index].name = value;
        return [...labelExamples];
      }
      return labelExamples;
    });
  }
}
