import { Canvas } from '@react-three/fiber/native';
import useControls from 'r3f-native-orbitcontrols';
import { Suspense, useState } from 'react';
import { View } from 'react-native';
import Loader from '../../components/Loader';
import { ModelLowPolyKitchen } from '../../components/Model3D/LowPolyKitchen';
import Trigger from '../../components/Trigger';
import { styles } from './styles';

export default function LowPolyKitchenScreen() {
  const [OrbitControls, events] = useControls();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <View style={styles.container} {...events}>
      {loading && <Loader />}
      <Canvas>
        <OrbitControls />
        <directionalLight position={[1, 0, 0]} args={['#FFF', 5]} />
        <directionalLight position={[0, 1, 0]} args={['#FFF', 5]} />
        <directionalLight position={[0, 0, 1]} args={['#FFF', 5]} />
        <directionalLight position={[0, 0, 0]} args={['#FFF', 5]} />
        <directionalLight position={[-1, 0, 0]} args={['#FFF', 5]} />
        <directionalLight position={[0, -1, 0]} args={['#FFF', 5]} />
        <directionalLight position={[0, 0, -1]} args={['#FFF', 5]} />

        <Suspense fallback={<Trigger setLoading={setLoading} />}>
          <ModelLowPolyKitchen  />
        </Suspense>
      </Canvas>
    </View>
  );
}
