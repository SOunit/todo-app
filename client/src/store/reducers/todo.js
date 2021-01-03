const initialState = {
  todo: [
    {
      _id: 'a',
      title: 'test title',
      createdAt: '2020/10/10 10:00',
      user: 'test user',
    },
    {
      _id: 'b',
      title: 'test title',
      createdAt: '2020/10/10 10:00',
      user: 'test user',
    },
    {
      _id: 'c',
      title: 'test title',
      createdAt: '2020/10/10 10:00',
      user: 'test user',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  }
  return state;
};

export default reducer;
