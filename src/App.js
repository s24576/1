import React from 'react';
import './style.css';

const JSXRules = (text) => {
  return <blockquote>{text.text}</blockquote>;
};

const FancyTable = ({ n }) => {
  const array = [];
  for (let i = 1; i <= n; i++) {
    array.push(<li>{i}</li>);
  }
  return <ul>{array}</ul>;
};

const Multiple = ({ name, number }) => [
  <h2 key="header">{name}</h2>,
  <FancyTable key="table" n={number} />,
];

export default function App() {
  return (
    <div>
      <JSXRules text="Przykładowy tekst w blockquote" />
      <FancyTable n={4} />
      <Multiple name="Nazwa" number={5} />
    </div>
  );
}
