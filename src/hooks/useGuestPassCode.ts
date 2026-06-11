import {useEffect, useState} from 'react';
import {localData} from '../local/localData';

export function useGuestPassCode() {
  const [code, setCode] = useState('NSC-2048');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localData.getPassCode().then(value => {
      setCode(value);
      setLoading(false);
    });
  }, []);

  return {code, loading};
}
