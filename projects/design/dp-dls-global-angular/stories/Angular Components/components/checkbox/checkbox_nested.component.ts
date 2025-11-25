import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

/**
 * @title Basic checkboxes
 */
@Component({
    selector: 'checkbox-overview-example',
    imports: [MatCheckboxModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
      .example {
        background: var(--foundation-ui-background-low);
      }
      .example-list-section ul {
        padding-left: 20px; /* Apply left padding */
      }
    `
    ],
    template: `
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
  `
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

