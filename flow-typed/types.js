// @flow

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void,
  },
};

// export type State = {
//   searchTerm: string,
//   apiData: {
//     [imdbID: string]: Show,
//   },
// };
