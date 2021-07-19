import { defineInterface } from '@directus/extension-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'custom',
	name: 'Custom',
	description: 'This is my custom interface!',
	icon: 'box',
	component: InterfaceComponent,
	types: ['string'],
});