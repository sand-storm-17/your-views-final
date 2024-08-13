'use client';
import { useState } from 'react';
import Leaderboard from './leaderboard-ui';
import Dashboard from './dashboard';
import DashboardFeature from '../dashboard/dashboard-feature';
import { SolanaProvider, WalletButton } from '../solana/solana-provider';
import { ClusterUiSelect } from '../cluster/cluster-ui';
import { ClusterProvider, useCluster } from '../cluster/cluster-data-access';
import NewCoin from '../token/new-coin';
import { useWallet } from '@solana/wallet-adapter-react';

export default function Window() {
  const [currentWindow, setCurrentWindow] = useState('Leaderboard');

  function changetoLeaderboard() {
    setCurrentWindow('Leaderboard');
  }

  function changetoDashboard() {
    setCurrentWindow('Dashboard');
  }
  const cluster = useCluster();
  console.log(cluster.cluster);

  const wallet = useWallet();
  console.log(wallet.publicKey);

  return (
    <div className="flex basis-full bg-background-800 justify-center items-center">
      <div className="flex flex-col w-2/5 h-2/3 bg-background-100 border-none justify-center rounded-xl ">
        <div className="flex m-5 justify-center">
          <div className="flex items-center">
            <button
              onClick={changetoLeaderboard}
              className="flex font-heading text-2xl border rounded-l-2xl py-2 px-6 active:bg-background-800 hover:bg-primary-500"
            >
              Leaderboard
            </button>
            <button
              onClick={changetoDashboard}
              className="flex font-heading text-2xl border rounded-r-2xl py-2 px-6 active:bg-background-800 hover:bg-primary-500"
            >
              Dashboard
            </button>
          </div>
        </div>
        <div className="flex basis-5/6">
          {currentWindow == 'Leaderboard' ? <Leaderboard /> : <Dashboard />}
        </div>
      </div>
    </div>
  );
}
