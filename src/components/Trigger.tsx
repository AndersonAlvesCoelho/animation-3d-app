import React, { useEffect } from 'react';

type Props = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Trigger({ setLoading }: Props) {
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, [setLoading]);

  return <></>;
}
