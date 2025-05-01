import { MatCheckboxModule } from '@angular/material/checkbox';
import { action } from '@storybook/addon-actions';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CheckboxOverviewExample } from './checkbox_nested.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

const meta: Meta = {
  title: 'COMPONENTS/Checkbox',

  decorators: [
    moduleMetadata({
      imports: [
        MatCheckboxModule,
        CheckboxOverviewExample,
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj;


// Single Checkbox Story
export const Single: Story = {
  name: 'Single Checkbox',
  render: (args) => ({
    template: `
      <div style="{background:var(--color-ui-background-low)}">
        <mat-checkbox
          [id]="id"
          [checked]="checked"
          [indeterminate]="indeterminate"
          [disabled]="disabled"
          [class.error]="error"
          (indeterminateChange)="indeterminateChange($event)"
          (change)="update($event.checked)">
          Label text
        </mat-checkbox>
      </div>
    `,
    style: ``,
    props: {
      ...args,
      // Output Actions
      update: action('value changed'),
      indeterminateChange: action('indeterminateChange'),
    },

  }),
  parameters: {
    docs: {
      description: {
        story:
          `
\`\`\`typescript
@component
\`\`\`

`

      }
    },
    controls: {
      expanded: true, // so that description is visible
    },
  },
  argTypes: {
    // Add description and extra controls like options to Inputs
    id: {
      description: '',
    },
    disabled: {
      description: '',
    },
    checked: {
      description: '',
    },
    indeterminate: {
      description: '',
    },
    error: {
      description: 'class `error` is added to `<mat-checkbox>`',
    },

  },
  args: {
    // Inputs
    id: 'checkbox_1',
    checked: false,
    disabled: false,
    indeterminate: false,
    error: false,
  },

};

export const Nested: Story = {
  name: 'Nested Checkboxes Example',
  render: (args) => ({
    template: `
    <div class="example-container">
    <checkbox-overview-example></checkbox-overview-example>
    </div>
  `,
    style: '',
    props: { ...args },
  }),
  args: {},
  parameters: {
    docs: {
      source: {
        language: "typescript",
        code: `
    import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
    import { MatCheckboxModule } from '@angular/material/checkbox';

    export interface Task {
      name: string;
      completed: boolean;
      subtasks?: Task[];
    }

    @Component({
      selector: 'checkbox-overview-example',
      standalone: true,
      imports: [MatCheckboxModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [
        \`

        .example {
          background: var(--color-ui-background-low);
        }
        
        .example-list-section ul {
            padding: 20px; /* Apply left padding */
          }
        \`],
      template: \`
      <div class="example">
      <mat-checkbox
        [checked]="task().completed"
        [indeterminate]="partiallyComplete()"
        (change)="update($event.checked)"
      >
      My To-Do List
      </mat-checkbox>
      <span class="example-list-section">
        <ul>
          @for (subtask of task().subtasks; track subtask; let i = $index) {
            <li>
              <mat-checkbox [checked]="subtask.completed" (change)="update($event.checked, i)">
                {{subtask.name}}
              </mat-checkbox>
            </li>
          }
        </ul>
      </span>
      </div>
      \`
    })
    export class CheckboxOverviewExample {

      readonly task = signal<Task>({
        name: 'My To-Do List',
        completed: false,
        subtasks: [
          { name: 'Buy Milk', completed: false },
          { name: 'Homework', completed: false },
          { name: 'Call Mom', completed: false },
        ],
      });

      readonly partiallyComplete = computed(() => {
        const task = this.task();
        if (!task.subtasks) {
          return false;
        }
        return task.subtasks.some(t => t.completed) && !task.subtasks.every(t => t.completed);
      });

      update(completed: boolean, index?: number) {
        this.task.update(task => {
          if (index === undefined) {
            task.completed = completed;
            task.subtasks?.forEach(t => (t.completed = completed));
          } else {
            task.subtasks![index].completed = completed;
            task.completed = task.subtasks?.every(t => t.completed) ?? true;
          }
          return { ...task };
        });
      }

  }
        `,

        type: "auto",
      }
    }
  }

};
