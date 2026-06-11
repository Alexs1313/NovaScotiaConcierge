import {useEffect, useState} from 'react';
import {novaScotiaConciergeDi} from '../../../NovaScotiaConciergeApp/NovaScotiaConciergeDi';

export function useGuestPassCode() {
  const [code, setCode] = useState('NSC-2048');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    novaScotiaConciergeDi.getGuestPassCode.execute().then(value => {
      setCode(value);
      setLoading(false);
    });
  }, []);

  return {code, loading};
}
