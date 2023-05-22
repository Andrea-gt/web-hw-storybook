import React from 'react';
import Pill from './Pill';

export default {
  title: 'Pills/Pill',
  component: Pill,
  tags: ['autodocs'],
};

export const Day = {
    args: {
        type: 'day'
    }
};

export const Night = {
    args: {
        type: 'night'
    }
};

export const asDisabled = {
    args: {
      type: 'day',
      disabled: true
    }
}