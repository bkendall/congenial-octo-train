import { getName } from "./lib/getName";

export default function hello(): string {
  const name = getName();
  console.log(`hello ${name}, here is my awesome module`);
  return name;
}
