import { Canvas } from '@react-three/fiber/native';
import useControls from 'r3f-native-orbitcontrols';
import { Suspense, useState } from 'react';
import { View } from 'react-native';
import Loader from '../../components/Loader';
import { ModelLowPolyHouse } from '../../components/Model3D/LowPolyHouse';
import Trigger from '../../components/Trigger';
import { styles } from './styles';

export default function ModelLowPolyHouseScreen() {
  const [OrbitControls, events] = useControls();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.modelContainer} {...events}>
        {loading && <Loader />}
        <Canvas>
          <OrbitControls />
          <directionalLight position={[1, 0, 0]} args={['#FFF', 5]} />
          <directionalLight position={[-1, 0, 0]} args={['#FFF', 5]} />
          <directionalLight position={[0, 0, 0]} args={['#FFF', 5]} />
          <directionalLight position={[0, -1, 0]} args={['#FFF', 5]} />
          <directionalLight position={[0, 0, 1]} args={['#FFF', 5]} />
          <directionalLight position={[0, 0, -1]} args={['#FFF', 5]} />

          <Suspense fallback={<Trigger setLoading={setLoading} />}>
            <ModelLowPolyHouse />
          </Suspense>
        </Canvas>
      </View>
    </View>
  );
}
