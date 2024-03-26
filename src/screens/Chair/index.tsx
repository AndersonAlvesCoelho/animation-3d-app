import { Canvas } from '@react-three/fiber/native';
import useControls from 'r3f-native-orbitcontrols';
import { Suspense, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Loader from '../../components/Loader';
import ModelChair from '../../components/Model3D/Chair';
import Trigger from '../../components/Trigger';
import { styles } from './styles';

export default function ChairScreen() {
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
            <ModelChair />
          </Suspense>
        </Canvas>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Grey Chair</Text>
          <Text style={styles.textPrice}>$80.00</Text>
          <Text style={styles.textDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            nostrum fuga aspernatur optio minima? Cupiditate repudiandae saepe
            quaerat animi, consequatur maiores inventore velit a dolore
            voluptates dolores adipisci earum labore.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
