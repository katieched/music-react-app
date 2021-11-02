import React from 'react';
import { Card } from '.'; //dot will just look for the index

export default {
    title: 'Card',
    component: Card,
    argTypes: {
        size: {
            control: 'radio',
            options: ['small', 'large']
        },
        name: {
            control: 'text'
        },
        musicGenre: {
            control: 'text'
        },
        intro: {
            control: 'text'
        }
    }
}

const Template = args => <Card {...args} />

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    name: 'ABBA',
    musicGenre: 'Pop',
    intro: 'Queen are a British rock band formed in London in 1970. Their classic line-up was Freddie Mercury, Brian May, Roger Taylor and John Deacon.'
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    name: 'ABBA',
    musicGenre: 'Pop',
    intro: 'Queen are a British rock band formed in London in 1970. Their classic line-up was Freddie Mercury, Brian May, Roger Taylor and John Deacon.'
}