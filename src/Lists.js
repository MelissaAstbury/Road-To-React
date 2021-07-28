const Lists = () => {
  const people = [
    {
      title: 'React',
      points: 3,
      author: 'Melissa',
    },
    {
      title: 'Vue',
      points: 1,
      author: 'Andy',
    },
  ];

  const foods = [
    {
      name: 'Pizza',
      rating: 4,
      id: 1,
    },
    {
      name: 'Pasta',
      rating: 6,
      id: 2,
    },
  ];

  return (
    // No return needed if only returning one thing
    <div>
      {people.map((person) => (
        <p key={person.points}>{person.author}</p>
      ))}
      {/* Return required if more than one part of the object is being returned */}
      {foods.map((food) => {
        return (
          <>
            <li key={food.id}>{food.name}</li>
            <li key={food.rating}>{food.rating}</li>
          </>
        );
      })}
    </div>
  );
};

export default Lists;
