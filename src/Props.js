const Props = ({ stories }) => {
  return (
    <ul>
      {stories.map((story) => {
        return <li>{story.title}</li>;
      })}
    </ul>
  );
};

export default Props;
