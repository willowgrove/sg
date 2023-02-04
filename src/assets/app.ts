import {AppDefinition, generate} from '../utils/app-generation';
import '../index';

const config: AppDefinition = {
  root: {
    component: 'sg-app',
    children: [
      {
        component: 'sg-header',
        attributes: {
          style: 'background: bisque',
        },
        children: /*html*/ `
          <h1>This is a header</h1>
          <h2 slot="before">Logo</h2>
          <h2 slot="after">...</h2>
        `,
      },
      {
        component: 'sg-alert',
        attributes: {
          style: 'background: var(--sg-color-success)',
        },
        dataSource:
          'data:application/json;charset=utf-8;base64,eyJjb250ZW50IjogIkhlbGxvIFdvcmxkISJ9',
        children: '$$data.content$$',
      },
      {
        component: 'sg-alert',
        attributes: {
          style: 'background: var(--sg-color-danger)',
        },
        children: 'This is an alert!',
      },
      {
        component: 'sg-carousel',
        attributes: {
          style: 'height: 50vh',
        },
        children: /*html*/ `
          <img
            src="https://picsum.photos/id/1/800/600"
            alt="Image 1"
            style="object-fit: cover"
          />
          <img
            src="https://picsum.photos/id/2/800/600"
            alt="Image 2"
            style="object-fit: cover"
          />
          <img
            src="https://picsum.photos/id/3/800/600"
            alt="Image 3"
            style="object-fit: cover"
          />
          <div style="background: beige; height: 100%;">
            <h1>Something else</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              aperiam ut minima. Magni itaque alias, harum natus molestias
              blanditiis sint fugiat deserunt doloribus repellat nam ea est
              dignissimos amet ipsa.
            </p>
          </div>
      `,
      },
    ],
  },
};

generate(config);
