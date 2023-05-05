export const dfs = (isConnected: number[][], visited: Set<unknown>, cities: number, i: number) => {
  for (let j = 0; j < cities; j++) {
    if (isConnected[i][j] == 1 && !visited.has(j)) {
      visited.add(j);
      dfs(isConnected, visited, cities, j);
    }
  }
};



function findCircleNum(isConnected: number[][]): number {
  const cities = isConnected.length;
  const visited = new Set();
  let provinces = 0;
  for (let i = 0; i < cities; i++) {
    if (!visited.has(i)) {
      dfs(isConnected, visited, cities, i);
      provinces++;
    }
  }
  return provinces;

};