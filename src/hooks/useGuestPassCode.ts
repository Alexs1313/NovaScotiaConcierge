import {useEffect, useState} from 'react';
import {localData} from '../storage/localData';

export function useGuestPassCode() {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localData.refreshPassCode().then(value => {
      setCode(value);
      setLoading(false);
    });
  }, []);

  return {code, loading};
}
