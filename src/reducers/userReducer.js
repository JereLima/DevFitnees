const InitialState = {
  name: '',
  level: '', //beginner, intermediate, advanced
  workoutDays: [], //1a10
  workouts: [],
  lastWorkout: '', //id do treino
  dailyProgress: ['2021-01-26', '2021-01-25'],
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload.name};
      break;
    case 'SET_WORKOUTDAYS':
      return {...state, workoutDays: action.payload.workoutDays};
      break;
    case 'SET_LEVEL':
      return {...state, level: action.payload.level}
  }
  return state;
};
