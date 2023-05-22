import React, { useState } from 'react';
import Joi from 'joi';
import styles from './Welcome.module.css';
import useForm from '../../hooks/useForm';
import Input from '../../components/Input/Input';
import Pill from '../../components/Pill';
import Dropdown from '../../components/Dropdown';
import Notification from '../../components/Notification/Notification';
import { navigate } from '..';

const schema = Joi.object({
  mazeSize: Joi.number().integer().min(4).max(100)
    .required(),
  mazeTime: Joi.allow(null).optional(),
});

function Welcome() {
  const form = useForm(schema, { mazeSize: '', mazeTime: '' });
  const [disableTime, setDisableTime] = useState(true);
  const [activePill, setActivePill] = useState('day');
  const [selectedCharacter, setSelectedCharacter] = useState('Inuyasha');

  const handlePillClick = (pillType) => {
    setActivePill(pillType);
  };

  const handleCheckboxChange = () => {
    setDisableTime(!disableTime);
  };

  const handleCharacterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCharacter(selectedValue);
  };

  const handleMaze = () => {
    if (form.validate()) {
      const args = {
        mazeSize: form.values.mazeSize,
        mazeTime: form.values.mazeTime,
        character: selectedCharacter,
        daytime: activePill,
      };
      navigate('maze', args);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Welcome</h1>
      <h2>Settings</h2>
      <div className={styles.form_container}>
        <Input
          value={form.values.mazeSize}
          onChange={form.onChange('mazeSize')}
          name="size"
          placeholder="Between 4 - 100"
          label="Maze Size:"
          type="number"
          min={4}
          max={100}
          required
        />

        {form.error
          ? <Notification type="warning">Maze size has to be between 4 - 100.</Notification> : null}

        <Input
          value={form.values.mazeTime}
          onChange={form.onChange('mazeTime')}
          placeholder="Time in sec"
          name="time"
          label="Time:"
          type="number"
          min={0}
          disabled={disableTime}
        />

        <div>
          <input
            type="checkbox"
            checked={!disableTime}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="disableTime">Enable Time</label>
        </div>

        <div className={styles.pill_container}>
          <Pill
            type="day"
            disabled={activePill !== 'day'}
            onClick={handlePillClick}
          />
          <Pill
            type="night"
            disabled={activePill !== 'night'}
            onClick={handlePillClick}
          />
        </div>

        <Dropdown
          label="Characters"
          options={['Inuyasha', 'Kagome']}
          value={selectedCharacter}
          onChange={handleCharacterChange}
        />
        <button type="button" onClick={handleMaze} className={styles.button}>I&apos;m Ready!</button>
      </div>
    </div>
  );
}

export default Welcome;
