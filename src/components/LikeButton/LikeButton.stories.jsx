import React from 'react';
import { LikeButton } from '.';

export default {
    title: 'LikeButton',
    component: LikeButton,
}

const Template = args => <LikeButton {...args} />

export const Default = Template.bind({});