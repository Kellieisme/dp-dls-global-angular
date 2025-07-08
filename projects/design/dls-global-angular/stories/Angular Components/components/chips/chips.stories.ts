import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { IconRegistryStorybookModule } from '@dasdigitalplatform/dls-global-angular/icon-registry';
import { UserProfileComponent } from '@dasdigitalplatform/dls-global-angular/user-profile';
import { Component, Input, inject, signal } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

export interface LabelExample {
  name: string;
}

@Component({
      selector: 'storybook-chips-page',
      template: `
    @if (variant === 'InputChips') {
      <mat-form-field class="example-chip-list">
        <mat-chip-grid #chipGrid aria-label="Enter labels">
          @for (labelExample of labelExamples(); track labelExample) {
            <mat-chip-row
              (removed)="remove(labelExample)"
              [editable]="true"
              (edited)="edit(labelExample, $event)"
              [aria-description]="'press enter to edit ' + labelExample.name"
              >
              @if (withIcon) {
                <mat-icon svgIcon="icon-folder" matChipAvatar></mat-icon>
              },
              @if (withIcon && iconType === 'favicon') {
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
      </mat-form-field>
    }

    @if (variant === 'AvatarInputChips') {
      <mat-form-field class="example-chip-list">
        <mat-chip-grid #chipGridAvatar aria-label="Enter chips">
          @for (labelExample of labelExamples(); track labelExample.name) {
            <mat-chip-row
              (removed)="remove(labelExample)"
              [editable]="true"
              (edited)="edit(labelExample, $event)"
              [aria-description]="'press enter to edit ' + labelExample.name"
              class="avatar-chip"
              >
              <ba-user-profile userFirstName="William" [small]="true" userAvatarSource="./assets/card-img-1.png" />
              {{labelExample.name}}
              <button matChipRemove [attr.aria-label]="'remove ' + labelExample.name">
                <mat-icon svgIcon="icon-cancel-filled"></mat-icon>
              </button>
            </mat-chip-row>
          }
          <input
            placeholder="New thing..."
            [matChipInputFor]="chipGridAvatar"
            [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
            [matChipInputAddOnBlur]="addOnBlur"
            (matChipInputTokenEnd)="add($event)"
            />
        </mat-chip-grid>
      </mat-form-field>
    }

    @if (variant === 'AssistiveChips') {
      <mat-chip-set
        class="example-chip"
        cdkDropList
        cdkDropListOrientation="horizontal"
        (cdkDropListDropped)="drop($event)"
        >
        @for (labelExample of labelExamples(); track labelExample.name) {
          <mat-chip
            class="example-box assistive"
            [class.elevated]="style === 'elevated'"
            cdkDrag>
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

    @if (variant === 'FilterAndSuggestionChips') {
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
    }
  `],
    standalone: false
})
class StorybookChipsPageComponent {
  @Input() variant: 'InputChips' | 'AvatarInputChips' | 'AssistiveChips' | 'FilterAndSuggestionChips' = 'InputChips';
  @Input() withIcon = false;
  @Input() iconType: 'leading' | 'favicon' = 'leading';
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
    variant: {
      table: { disable: true },
    },
    withIcon: {
      control: 'boolean',
      defaultValue: false,
    },
    iconType: {
      description: 'Icon Type',
      control: 'select',
      defaultValue: 'leading',
      options: ['leading', 'favicon'],
    },
    withTrailingIcon: {
      control: 'boolean',
      defaultValue: false,
    },
    style: {
      description: 'Chip style',
      control: 'select',
      defaultValue: 'outlined',
      options: ['outlined', 'elevated'],
    },
  },
} as Meta;


const ChipsTemplate: StoryObj = {
  render: (args) => ({
    props: args,
    template: `<storybook-chips-page [variant]="variant" [withIcon]="withIcon" [iconType]="iconType" [style]="style" [withTrailingIcon]="withTrailingIcon"></storybook-chips-page>`,
  }),
};

export const InputChips: StoryObj = {
  ...ChipsTemplate,
  args: {
    variant: 'InputChips',
    withIcon: true,
    iconType: 'none',
  },
  argTypes: {
    iconType: { table: { disable: true } },
    withTrailingIcon: { table: { disable: true } },
    style: { table: { disable: true } },
  },
};

export const AvatarInputChips: StoryObj = {
  ...ChipsTemplate,
  args: {
    variant: 'AvatarInputChips',
  },
  argTypes: {
    withIcon: { table: { disable: true } },
    iconType: { table: { disable: true } },
    withTrailingIcon: { table: { disable: true } },
    style: { table: { disable: true } },
  },
};

export const AssistiveChips: StoryObj = {
  ...ChipsTemplate,
  args: {
    variant: 'AssistiveChips',
    withIcon: false,
    iconType: 'leading',
    style: 'outlined',
  },
  argTypes: {
    withTrailingIcon: { table: { disable: true } },
  },
};

export const FilterAndSuggestionChips: StoryObj = {
  ...ChipsTemplate,
  args: {
    variant: 'FilterAndSuggestionChips',
    withIcon: true,
    iconType: 'leading',
    withTrailingIcon: false,
    style: 'outlined',
  },
  argTypes: {
    iconType: { table: { disable: true } },
  },
};
