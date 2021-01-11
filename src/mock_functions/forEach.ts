export function forEach<T>(items: T[], callback: (item: T) => void) {
  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    callback(element);
  }
}