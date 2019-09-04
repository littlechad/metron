export default function reducer(reducers, states) {
  return (state = states, { type, payload }) => {
    const ducer = reducers[type]
    if (!ducer) { return state }

    return ducer(state, { type, payload })
  }
}
