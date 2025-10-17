
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'card-page',
  standalone: true, // <-- Add this if missing
  imports: [MatCardModule, MatButtonModule, MatChipsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardPageComponent {
  title = 'Card';
  basicCards = [
    {
      title: 'Basic Card 1',
      subtitle: 'Subheading 1',
      content: 'Supportive text for card 1.',
    },
    {
      title: 'Basic Card 2',
      subtitle: 'Subheading 2',
      content: 'Supportive text for card 2.',
    },
  ];

  cardsWithActions = [
    {
      title: 'Action Card 1',
      subtitle: 'Subheading 1',
      content: 'Short description here.',
      actions: ['Action A', 'Action B'],
    },
    {
      title: 'Action Card 2',
      subtitle: 'Subheading 2',
      content: 'Another description.',
      actions: ['Action A', 'Action B'],
    },
    {
      title: 'Action Card 3',
      subtitle: 'Subheading 3',
      content: 'More detail text here.',
      actions: ['Action A', 'Action B'],
    },
  ];

  clickableCards = [
    {
      title: 'Clickable 1',
      subtitle: 'Subheading 1',
      content: 'Clickable card content here.',
    },
    {
      title: 'Clickable 2',
      subtitle: 'Subheading 2',
      content: 'More clickable card text.',
    },
    {
      title: 'Clickable 3',
      subtitle: 'Subheading 3',
      content: 'Additional details.',
    },
    {
      title: 'Clickable 4',
      subtitle: 'Subheading 4',
      content: 'More info displayed here.',
    },
  ];

  standardImageCards = [
    {
      image: './assets/card-img-1.png',
      title: 'Standard Image 1',
      subtitle: 'Subheading 1',
      content: 'Content with one action button',
    },
    {
      image: './assets/card-img-1.png',
      title: 'Standard Image 2',
      subtitle: 'Subheading 2',
      content: 'Content with one action button',
    },
    {
      image: './assets/card-img-1.png',
      title: 'Standard Image 3',
      subtitle: 'Subheading 3',
      content: 'Content with one action button',
    },
    {
      image: './assets/card-img-1.png',
      title: 'Standard Image 4',
      subtitle: 'Subheading 4',
      content: 'Content with one action button',
    },
  ];

  landscapeCards = [
    {
      image: './assets/card-img-1.png',
      title: 'Landscape 1',
      subtitle: 'Subheading 1',
      content: 'Landscape card content.',
    },
    {
      image: './assets/card-img-1.png',
      title: 'Landscape 2',
      subtitle: 'Subheading 2',
      content: 'Landscape card content.',
    },
  ];

  footerCard = {
    title: 'Card with Footer',
    subtitle: 'Subheading',
    content: 'Content inside card footer with chips.',
    chips: ['Chip 1', 'Chip 2', 'Chip 3'],
  };

}
