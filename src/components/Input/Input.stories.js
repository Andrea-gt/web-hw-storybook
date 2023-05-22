import Input from './Input'

export default {
  title: 'Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
  },
}

export const asNumeric = {
  args: {
    label: 'Time:',
    name: 'time',
    value: '',
    onChange: () => {},
    type: 'number',
    required: false,
    placeholder: 'Insert seconds'
  },
}

export const asDisabled = {
    args: {
        label: 'Disabled Input:',
        name: 'disabledInput',
        value: '',
        onChange: () => {},
        type: 'text',
        required: false,
        placeholder: 'Disabled input',
        disabled: true, 
    }
}