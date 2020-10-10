export default function generateClassName(classes: {
  [key: string]: string;
}): string {
  return Object.keys(classes)
    .map(key => classes[key])
    .join(' ');
}
