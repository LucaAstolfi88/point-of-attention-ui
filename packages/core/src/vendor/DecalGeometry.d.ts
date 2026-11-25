import { BufferGeometry, Euler, Mesh, Vector3 } from 'three';

/** Type surface of the vendored three@0.160 DecalGeometry (depends only on 'three'). */
export class DecalGeometry extends BufferGeometry {
  constructor(mesh: Mesh, position: Vector3, orientation: Euler, size: Vector3);
}
