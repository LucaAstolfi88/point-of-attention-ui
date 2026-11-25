import { AnimationClip, Camera, Group, Loader, LoadingManager } from 'three';

/** Type surface of the vendored three@0.160 GLTFLoader (depends only on 'three'). */
export interface GLTF {
  animations: AnimationClip[];
  scene: Group;
  scenes: Group[];
  cameras: Camera[];
  asset: {
    copyright?: string;
    generator?: string;
    version?: string;
    minVersion?: string;
    extensions?: unknown;
    extras?: unknown;
  };
  parser: unknown;
  userData: Record<string, unknown>;
}

export class GLTFLoader extends Loader {
  constructor(manager?: LoadingManager);

  load(
    url: string,
    onLoad: (gltf: GLTF) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (error: unknown) => void,
  ): void;

  loadAsync(url: string, onProgress?: (event: ProgressEvent) => void): Promise<GLTF>;

  parse(
    data: ArrayBuffer | string,
    path: string,
    onLoad: (gltf: GLTF) => void,
    onError?: (error: unknown) => void,
  ): void;

  parseAsync(data: ArrayBuffer | string, path: string): Promise<GLTF>;
}
