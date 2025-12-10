import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { IconRegistryStorybookModule } from '@jeppesen-foreflight/dp-dls-global-angular/icon-registry';
import { UserProfileComponent } from '@jeppesen-foreflight/dp-dls-global-angular/user-profile';
import { Component, Input, inject, signal } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

export interface LabelExample {
  name: string;
}

@Component({
    selector: 'storybook-chips-page',
    template: `
    @if (type === 'input') {
      <mat-chip-grid #chipGrid aria-label="Enter labels" class="example-chip-list">
        @for (labelExample of labelExamples(); track labelExample) {
          <mat-chip-row
            (removed)="remove(labelExample)"
            [editable]="true"
            (edited)="edit(labelExample, $event)"
            [aria-description]="'press enter to edit ' + labelExample.name"
            [class.avatar-chip]="withAvatar"
            >
            @if (withAvatar) {
              <ba-user-profile matChipAvatar userFirstName="William" [small]="true" userAvatarSource="./assets/card-img-1.png" />
            }
            @if (withIcon && !withAvatar && iconType === 'leading') {
              <mat-icon svgIcon="icon-folder" matChipAvatar></mat-icon>
            }
            @if (withIcon && !withAvatar && iconType === 'favicon') {
              <mat-icon svgIcon="icon-favorite" matChipAvatar></mat-icon>
            }
            {{labelExample.name}}
            <button matChipRemove [attr.aria-label]="'remove ' + labelExample.name">
              <mat-icon svgIcon="icon-cancel-filled"></mat-icon>
            </button>
          </mat-chip-row>
        }
        <input
          placeholder="Add item ..."
          [matChipInputFor]="chipGrid"
          [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
          [matChipInputAddOnBlur]="addOnBlur"
          (matChipInputTokenEnd)="add($event)"
          />
      </mat-chip-grid>
    }
    
    @if (type === 'basic') {
      <mat-chip-set
        class="example-chip"
        [cdkDropList]="draggable ? '' : null"
        [cdkDropListOrientation]="draggable ? 'horizontal' : null"
        (cdkDropListDropped)="draggable ? drop($event) : null"
        >
        @for (labelExample of labelExamples(); track labelExample.name) {
          <mat-chip
            class="example-box assistive"
            [class.elevated]="style === 'elevated'"
            [cdkDrag]="draggable ? '' : null">
            @if (withIcon && iconType === 'leading') {
              <mat-icon svgIcon="icon-folder" matChipAvatar></mat-icon>
            }
            @if (withIcon && iconType === 'favicon') {
              <img
                matChipAvatar
                src="./assets/card-img-1.png"
                alt="Example photo"
                />
            }
            {{labelExample.name}}
          </mat-chip>
        }
      </mat-chip-set>
    }
    
    @if (type === 'filter') {
      <mat-chip-listbox aria-label="Labels examples">
        @for (labelExample of labelExamples(); track labelExample.name) {
          <mat-chip-option [class.elevated]="style === 'elevated'">
            @if (withIcon) {
              <mat-icon svgIcon="icon-folder" matChipAvatar></mat-icon>
            }
            {{labelExample.name}}
            @if (withTrailingIcon) {
              <mat-icon svgIcon="icon-expand-more" MatChipTrailingIcon></mat-icon>
            }
          </mat-chip-option>
        }
      </mat-chip-listbox>
    }
    `,
    styles: [`
    .example-chip-list {
      width: 100%;
      padding-bottom: 40px;
    }
    .example-chip-list input {
      border: none;
      outline: none;
      padding: 8px 0;
      font-family: inherit;
      font-size: inherit;
      background: transparent;
      color: var(--foundation-ui-textandicon-high);
    }
    .example-chip-list input::placeholder {
      color: var(--foundation-ui-textandicon-medium);
    }
  `],
    standalone: false
})
class StorybookChipsPageComponent {
  @Input() type: 'input' | 'basic' | 'filter' = 'input';
  @Input() withIcon = false;
  @Input() iconType: 'leading' | 'favicon' = 'leading';
  @Input() withAvatar = false;
  @Input() draggable = false;
  @Input() withTrailingIcon = false;
  @Input() style: 'outlined' | 'elevated' = 'outlined';

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

    if (!value) {
      this.remove(labelExample);
      return;
    }

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

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'COMPONENTS/Chips',
  decorators: [
    moduleMetadata({
      imports: [
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CdkDropList,
        CdkDrag,
        IconRegistryStorybookModule,
        UserProfileComponent
      ],
      providers: [LiveAnnouncer],
      declarations: [StorybookChipsPageComponent],
    }),
  ],
  argTypes: {
    type: {
      description: 'Chip type: **Input** (editable tags), **Basic** (read-only display), **Filter** (selectable options)',
      control: 'select',
      options: ['input', 'basic', 'filter'],
      defaultValue: 'input',
      table: {
        type: { summary: 'input | basic | filter' },
        defaultValue: { summary: 'input' },
      },
    },
    withIcon: {
      description: 'Show icon in chips',
      control: 'boolean',
      defaultValue: false,
      if: { arg: 'type', neq: 'input' },
    },
    iconType: {
      description: 'Icon Type',
      control: 'select',
      defaultValue: 'leading',
      options: ['leading', 'favicon'],
      if: { arg: 'withIcon', eq: true },
    },
    withAvatar: {
      description: 'Show avatar instead of icon (Input chips only)',
      control: 'boolean',
      defaultValue: false,
      if: { arg: 'type', eq: 'input' },
    },
    draggable: {
      description: 'Enable drag-and-drop reordering (Basic chips only)',
      control: 'boolean',
      defaultValue: false,
      if: { arg: 'type', eq: 'basic' },
    },
    withTrailingIcon: {
      description: 'Show trailing icon (Filter chips only)',
      control: 'boolean',
      defaultValue: false,
      if: { arg: 'type', eq: 'filter' },
    },
    style: {
      description: 'Chip style (Basic and Filter chips only)',
      control: 'select',
      defaultValue: 'outlined',
      options: ['outlined', 'elevated'],
      if: { arg: 'type', neq: 'input' },
    },
  },
} as Meta;

export const Chips: StoryObj = {
  args: {
    type: 'input',
    withIcon: false,
    iconType: 'leading',
    withAvatar: false,
    draggable: false,
    withTrailingIcon: false,
    style: 'outlined',
  },
  render: (args) => ({
    props: args,
    template: `<div style="padding-bottom: 60px;"><storybook-chips-page [type]="type" [withIcon]="withIcon" [iconType]="iconType" [withAvatar]="withAvatar" [draggable]="draggable" [style]="style" [withTrailingIcon]="withTrailingIcon"></storybook-chips-page></div>`,
  }),
  name: 'Chips',
  parameters: {
    docs: {
      description: {
        story: `Interactive chip component with three types:
        
- **Input**: Editable chips where users can add, edit, and remove items (like tags/labels). Supports icons and avatars.
- **Basic**: Read-only display chips for showing information. Supports drag-and-drop reordering and can be styled as outlined or elevated.
- **Filter**: Selectable chips for filtering or choosing options. Users can click to toggle selection. Supports trailing icons and can be styled as outlined or elevated.`,
      },
    },
    layout: 'padded',
    chromatic: { viewports: [320, 1200] },
  },
};