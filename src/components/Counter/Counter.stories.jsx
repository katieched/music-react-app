import React from 'react';
import { Counter } from '.';

export default {
    title: 'Counter',
    component: Counter 
}

const Template = (args) => <Counter {...args} />

export const Default = Template.bind({});