export function fetchData(cb: (data: any) => void) {
  setTimeout(() => cb(100), 1000);
}