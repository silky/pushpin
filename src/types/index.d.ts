import { Repo } from "hypermerge";

declare global {
  interface Window {
    repo: Repo
  }
}