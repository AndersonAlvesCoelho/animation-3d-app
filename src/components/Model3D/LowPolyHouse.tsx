/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    Cube_1: THREE.Mesh
    roof_Frame: THREE.Mesh
    House_Frame: THREE.Mesh
    Window: THREE.Mesh
    Sphere: THREE.Mesh
    Sphere_1: THREE.Mesh
    Sphere_2: THREE.Mesh
    Cube058: THREE.Mesh
    Cube058_1: THREE.Mesh
    Cube007: THREE.Mesh
    Cube007_1: THREE.Mesh
    Cube007_2: THREE.Mesh
    Roof: THREE.Mesh
    Cube052: THREE.Mesh
    Cube052_1: THREE.Mesh
    Cube025_1: THREE.Mesh
    Cube025_2: THREE.Mesh
    Cube023: THREE.Mesh
    Cube023_1: THREE.Mesh
    Trunk: THREE.Mesh
    Icosphere: THREE.Mesh
    Icosphere001: THREE.Mesh
    Icosphere002: THREE.Mesh
    Icosphere003: THREE.Mesh
    Icosphere004: THREE.Mesh
    Icosphere005: THREE.Mesh
    Icosphere006: THREE.Mesh
    Icosphere007: THREE.Mesh
    Icosphere008: THREE.Mesh
    Sphere001: THREE.Mesh
    Plane006: THREE.Mesh
    Plane007: THREE.Mesh
    Plane001: THREE.Mesh
    Plane002: THREE.Mesh
    Plane003: THREE.Mesh
    Plane004: THREE.Mesh
    Plane005: THREE.Mesh
    Plane008: THREE.Mesh
    Plane009: THREE.Mesh
    Plane010: THREE.Mesh
    Cube013: THREE.Mesh
    Cube013_1: THREE.Mesh
    Cube013_2: THREE.Mesh
    Cube014: THREE.Mesh
    Cube014_1: THREE.Mesh
    Cube014_2: THREE.Mesh
    Cube015_1: THREE.Mesh
    Cube015_2: THREE.Mesh
    Cube015_3: THREE.Mesh
    Cube016_1: THREE.Mesh
    Cube016_2: THREE.Mesh
    Cube016_3: THREE.Mesh
    Cube017_1: THREE.Mesh
    Cube017_2: THREE.Mesh
    Cube017_3: THREE.Mesh
    Cube018_1: THREE.Mesh
    Cube018_2: THREE.Mesh
    Cube018_3: THREE.Mesh
    Cube019_1: THREE.Mesh
    Cube019_2: THREE.Mesh
    Cube019_3: THREE.Mesh
    Cube020: THREE.Mesh
    Cube020_1: THREE.Mesh
    Cube020_2: THREE.Mesh
    Cube021_1: THREE.Mesh
    Cube021_2: THREE.Mesh
    Cube021_3: THREE.Mesh
    Cube022_1: THREE.Mesh
    Cube022_2: THREE.Mesh
    Cube022_3: THREE.Mesh
    Cube024: THREE.Mesh
    Cube024_1: THREE.Mesh
    Cube024_2: THREE.Mesh
    Cube026_1: THREE.Mesh
    Cube026_2: THREE.Mesh
    Cube026_3: THREE.Mesh
    Cube015: THREE.Mesh
    Cube016: THREE.Mesh
    Cube017: THREE.Mesh
    Cube018: THREE.Mesh
    Cube019: THREE.Mesh
    Cube021: THREE.Mesh
    Cube022: THREE.Mesh
    Circle001: THREE.Mesh
    Circle002: THREE.Mesh
    Plane011: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
    ['Material.016']: THREE.MeshStandardMaterial
    ['Material.017']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    ['Rock Brick']: THREE.MeshStandardMaterial
    ['Material.008']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.009']: THREE.MeshStandardMaterial
    ['Material.012']: THREE.MeshStandardMaterial
    ['Material.010']: THREE.MeshStandardMaterial
    ['Material.011']: THREE.MeshStandardMaterial
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    ['Material.013']: THREE.MeshStandardMaterial
    ['Material.019']: THREE.MeshStandardMaterial
  }
}

export function ModelLowPolyHouse(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(require('../../assets/models/LowPolyHouse.glb')) as GLTFResult
  return (
    <group {...props} dispose={null} scale={7} position={[0, -1.4, 0]}>
      <group position={[-0.006, 3.078, 0]} scale={1.925}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials['Material.016']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.roof_Frame.geometry}
        material={materials['Material.017']}
        position={[-0.006, 7.764, 0]}
        scale={[0.268, 0.268, 2.413]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.House_Frame.geometry}
        material={materials['Material.007']}
        position={[-0.006, 3.071, 0]}
        scale={[2.24, 0.136, 0.136]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window.geometry}
        material={materials['Rock Brick']}
        position={[2.164, 3.391, -0.395]}
        rotation={[-2.986, 0.02, -1.443]}
        scale={0.132}
      />
      <group position={[-0.444, 2.515, 2.068]} scale={0.107}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_1.geometry}
          material={materials['Rock Brick']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_2.geometry}
          material={materials['Material.007']}
        />
      </group>
      <group position={[2.164, 3.391, -0.523]} rotation={[-2.986, 0.02, -1.443]} scale={0.152}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube058.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube058_1.geometry}
          material={materials['Material.002']}
        />
      </group>
      <group position={[-0.023, 5.173, 1.858]} scale={[1.215, 0.176, 0.186]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials['Material.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials['Rock Brick']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_2.geometry}
          material={materials['Material.008']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof.geometry}
        material={materials['Material.009']}
        position={[1.926, 5.851, 1.071]}
        rotation={[0, 0, 0.804]}
        scale={[-0.026, 0.552, 0.33]}
      />
      <group position={[-0.036, 4.698, -2.147]} scale={[1.128, 3.861, 0.679]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube052_1.geometry}
          material={materials['Rock Brick']}
        />
      </group>
      <group position={[-2.069, 0.648, 1.9]} scale={0.528}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_2.geometry}
          material={materials['Material.012']}
        />
      </group>
      <group
        position={[0.023, 0.301, 2.274]}
        rotation={[0, -1.55, 0]}
        scale={[0.365, 0.208, 0.216]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials['Material.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_1.geometry}
          material={materials['Material.011']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Trunk.geometry}
        material={materials['Material.007']}
        scale={1.274}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={materials['Material.006']}
        position={[1.923, 10.592, -6.007]}
        rotation={[-0.084, -0.586, 0]}
        scale={1.274}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={materials['Material.006']}
        position={[5.33, 10.864, -3.71]}
        rotation={[0, -0.842, 0]}
        scale={1.951}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere002.geometry}
        material={materials['Material.006']}
        position={[5.192, 10.015, -7.467]}
        rotation={[-0.084, -0.586, 0]}
        scale={1.951}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere003.geometry}
        material={materials['Material.006']}
        position={[0.154, 8.301, -5.608]}
        rotation={[-0.084, -0.586, 0]}
        scale={1.111}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere004.geometry}
        material={materials['Material.006']}
        position={[6.091, 8.086, -8.563]}
        rotation={[-0.084, -0.586, 0]}
        scale={1.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere005.geometry}
        material={materials['Material.006']}
        position={[2.511, 8.686, -8.416]}
        rotation={[-0.084, -0.586, 0]}
        scale={1.701}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere006.geometry}
        material={materials['Material.006']}
        position={[4.812, 7.348, -6.716]}
        rotation={[-0.084, -0.586, 0]}
        scale={2.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere007.geometry}
        material={materials['Material.006']}
        position={[5.575, 6.518, -4.582]}
        rotation={[-0.084, -0.586, 0]}
        scale={1.274}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere008.geometry}
        material={materials['Material.006']}
        position={[4.535, 12.477, -4.423]}
        rotation={[-0.084, -0.586, 0]}
        scale={1.274}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials['Material.005']}
        position={[1.759, -0.051, -1.407]}
        scale={[9.396, 4.653, 9.396]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials['Material.003']}
        position={[7.128, 0.169, 0.394]}
        rotation={[-0.2, -0.429, -0.273]}
        scale={[0.15, 0.857, 0.857]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials['Material.003']}
        position={[7.175, 0.431, 0.379]}
        rotation={[-2.599, 1.461, 2.634]}
        scale={[0.079, 0.868, 0.463]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.003']}
        position={[3.999, 0.367, 1.954]}
        rotation={[0.033, 0.153, -0.216]}
        scale={[0.145, 0.825, 0.825]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials['Material.003']}
        position={[4.042, 0.619, 1.968]}
        rotation={[-2.908, 0.895, -3.094]}
        scale={[0.076, 0.836, 0.446]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials['Material.003']}
        position={[3.206, 0.679, -0.393]}
        rotation={[-2.972, 0.186, 3.039]}
        scale={[0.068, 0.745, 0.397]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials['Material.003']}
        position={[-3, 0.391, -0.266]}
        rotation={[-0.384, 0.475, 0.408]}
        scale={[0.145, 0.825, 0.825]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials['Material.003']}
        position={[-2.955, 0.636, -0.294]}
        rotation={[-3.067, 0.457, -2.983]}
        scale={[0.076, 0.836, 0.446]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials['Material.003']}
        position={[-4.407, 0.277, -2.369]}
        rotation={[-3.056, -0.254, 3.115]}
        scale={[0.068, 0.745, 0.397]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials['Material.003']}
        position={[0.334, 0.474, -3.923]}
        rotation={[-0.131, 0.588, -0.083]}
        scale={[0.145, 0.825, 0.825]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials['Material.003']}
        position={[0.348, 0.537, -3.95]}
        rotation={[-3.007, 0.444, -3.121]}
        scale={[0.076, 0.836, 0.446]}
      />
      <group position={[4.35, 0.586, 1.094]} rotation={[0, 0, -0.18]} scale={0.142}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_1.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_2.geometry}
          material={materials['Material.013']}
        />
      </group>
      <group position={[7.093, -0.061, 0.141]} rotation={[-0.758, -0.096, -0.231]} scale={0.125}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_1.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_2.geometry}
          material={materials['Material.013']}
        />
      </group>
      <group position={[-4.322, 0.056, -2.418]} scale={0.099}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_3.geometry}
          material={materials['Material.013']}
        />
      </group>
      <group position={[0.238, 0.504, -4.505]} rotation={[0, 0, -0.4]} scale={0.142}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_3.geometry}
          material={materials['Material.013']}
        />
      </group>
      <group position={[4.205, 0.241, 2.177]} rotation={[0.348, 0, -0.556]} scale={0.168}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_3.geometry}
          material={materials['Material.013']}
        />
      </group>
      <group position={[-0.159, 0.498, -3.461]} rotation={[0, 0, 0.223]} scale={0.142}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_3.geometry}
          material={materials['Material.013']}
        />
      </group>
      <group position={[-3.39, 0.02, -0.375]} rotation={[0, 0, 0.311]} scale={0.142}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_3.geometry}
          material={materials['Material.013']}
        />
      </group>
      <group position={[0.814, 0.531, -3.461]} rotation={[0, 0, -0.611]} scale={0.101}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_1.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_2.geometry}
          material={materials['Material.013']}
        />
      </group>
      <group position={[-3.036, 0.428, 0.011]} rotation={[0, 0, -0.464]} scale={0.142}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_3.geometry}
          material={materials['Material.013']}
        />
      </group>
      <group position={[3.161, 0.333, -0.295]} rotation={[0, 0, -0.369]} scale={0.116}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_3.geometry}
          material={materials['Material.013']}
        />
      </group>
      <group position={[3.741, 0.286, 2.108]} rotation={[-0.178, 0, 0.278]} scale={0.124}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_1.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_2.geometry}
          material={materials['Material.013']}
        />
      </group>
      <group position={[6.885, 0.394, 0.876]} rotation={[-0.159, 0, 0.021]} scale={0.142}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_1.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_3.geometry}
          material={materials['Material.013']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials['Material.008']}
        position={[-3.624, 1.322, -3.278]}
        rotation={[0, 1.084, 0]}
        scale={[0.37, 1.468, 0.185]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials['Material.008']}
        position={[-2.579, 1.126, -5.147]}
        rotation={[Math.PI, -0.999, Math.PI]}
        scale={[0.37, 1.316, 0.185]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials['Material.008']}
        position={[-1.055, 1.322, -6.375]}
        rotation={[-0.036, 0.446, 0.081]}
        scale={[0.369, 1.471, 0.185]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials['Material.008']}
        position={[0.603, 1.322, -6.921]}
        rotation={[Math.PI, -0.353, Math.PI]}
        scale={[0.37, 1.468, 0.185]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials['Material.008']}
        position={[2.222, 1.249, -7.388]}
        rotation={[3.139, -0.045, -3.063]}
        scale={[0.369, 1.414, 0.185]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials['Material.008']}
        position={[4.108, 1.194, -6.819]}
        rotation={[0, -0.418, 0]}
        scale={[0.343, 1.363, 0.172]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials['Material.008']}
        position={[5.558, 1.322, -6.005]}
        rotation={[-Math.PI, 0.489, -Math.PI]}
        scale={[0.37, 1.468, 0.185]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials['Material.008']}
        position={[2.162, 0.38, -1.053]}
        rotation={[0.005, 0.175, 0.04]}
        scale={[6.854, 6.229, 6.854]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials['Material.008']}
        position={[2.034, 1.608, -1.044]}
        rotation={[0, 0.172, 0]}
        scale={[6.854, 6.229, 6.854]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials['Material.019']}
        position={[1.786, 12.974, -33.893]}
        rotation={[Math.PI / 2, 0, 0.014]}
        scale={94.613}
      />
    </group>
  )
}

useGLTF.preload(require('../../assets/models/LowPolyHouse.glb'))

